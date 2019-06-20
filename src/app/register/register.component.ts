import {Component, OnInit} from '@angular/core';
import {User} from '../bean/user';
import {Router} from '@angular/router';
import {RegisterService} from './service/register.service';
import 'particles.js';
import {Settings} from '../../data/const';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    hide = true;
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
    user: User;
    usernameControl = new FormControl('', [Validators.required]);
    emailControl = new FormControl('', [Validators.required, Validators.email]);
    passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
    passwordConfirmControl = new FormControl('', [Validators.required]);


    constructor(private router: Router, private registerService: RegisterService) {
    }

    ngOnInit() {
        if(localStorage.getItem("user")||localStorage.getItem("admin")){
            this.router.navigate(['/']);
        }else {
            particlesJS('particles', Settings.ParticlesConfig);
        }
    }

    getErrorMessageBuiltIn(type) {
        switch (type) {
            case 'email':
                return this.emailControl.hasError('required') ? 'You must enter a value' :
                    this.emailControl.hasError('email') ? 'Not a valid email' : '';
            case 'username':
                return this.usernameControl.hasError('required') ? 'You must enter a value' :
                    this.usernameControl.hasError('repeat') ? '用户名重复' : '';
            case 'password':
                return this.passwordControl.hasError('required') ? 'You must enter a value' :
                    this.passwordControl.hasError('minlength') ? '密码不得小于6个字符' : '';
            case 'passwordConfirm':
                return this.passwordConfirmControl.hasError('required') ? 'You must enter a value' :
                    this.passwordConfirmControl.hasError('different') ? '两次输入密码不一致' : '';
        }

    }

    register(): void {
        try {
            if (this.password === this.confirmPassword) {
                if (this.passwordControl.invalid || this.emailControl.invalid || this.usernameControl.invalid) return;
                this.user = new User();
                this.user.email = this.email;
                this.user.password = this.password;
                this.user.userName = this.username;

                this.registerService.register(this.user).subscribe(user => {
                    if (user== undefined||user.token ==undefined) {
                        this.usernameControl.setErrors({'repeat': true});
                    } else {
                        user.password = '';
                        localStorage.setItem('user', JSON.stringify(user));
                        this.router.navigate(['/']);
                    }
                });
            } else {
                this.passwordConfirmControl.setErrors({'different': true});
            }
        } catch (error) {
            console.log(error);
        }
    }

    ngOnDestroy() {
        if (pJSDom && pJSDom.length > 0) {
            // 单页应用的全局对象一直会存在，会产生性能问题
            // 如果存在全局对象则先销毁
            pJSDom[0].pJS.fn.vendors.destroypJS();
            pJSDom = [];
        }
    }
}

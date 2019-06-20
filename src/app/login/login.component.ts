import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {LoginService} from './service/login.service';
import {User} from '../bean/user';
import 'particles.js';
import {Settings} from '../../data/const';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {
        this.options = fb.group({
            usrLabel: 'student',
        });

    }

    username: string;
    password: string;
    user: User;
    showSpinner = false;
    warnning: string;
    options: FormGroup;

    ngOnInit() {
        if (localStorage.getItem('user') || localStorage.getItem('admin')) {
            this.router.navigate(['/']);
        } else {
            particlesJS('particles', Settings.ParticlesConfig);

        }
    }

    login(): void {
        try {
            if (this.username && this.password) {
                this.user = new User();
                this.user.password = this.password;
                this.user.userName = this.username;
                this.loginService.login(this.user).subscribe(user => {
                    if (user.token != undefined) {
                        if (this.options.value.usrLabel === 'admin') {
                            //保存 管理员token为admin
                            localStorage.setItem('admin', user.token);
                            this.router.navigate(['/Overview-root']);

                        } else {
                            // 保存的用户信息
                            user.password = '';
                            //保存 普通用户为user
                            localStorage.setItem('user', JSON.stringify(user));
                            this.router.navigate(['/']);
                        }

                    } else {
                        this.showSpinner = true;
                        this.warnning = '用户名或密码错误';
                    }
                });
            } else {
                this.showSpinner = true;
                this.warnning = '用户名和密码为必填字段';
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

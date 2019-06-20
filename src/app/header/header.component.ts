import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: string;
    admin:string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.user = localStorage.getItem('user');
        this.admin = localStorage.getItem('admin');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        localStorage.removeItem('admin');
        this.router.navigate(['/login']);
    }
}

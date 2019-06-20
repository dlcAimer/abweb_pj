import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {OverviewService} from './service/overview.service';
import {User} from '../bean/user';
import {HistoryTableComponent} from '../history-table/history-table.component';

@Component({
    selector: 'app-overview-root',
    templateUrl: './overview-root.component.html',
    styleUrls: ['./overview-root.component.css']
})
export class OverviewRootComponent implements OnInit {
    students: string [];
    users: User[];
    selected: string;
    selectedUser: User;
    @ViewChild(HistoryTableComponent) historyTableComponent: HistoryTableComponent;


    constructor(private router: Router, private overviewService: OverviewService) {
    }

    ngOnInit() {
        if (localStorage.getItem('admin')) {
            let adminPW = localStorage.getItem('admin');
            this.getStudents();
        } else {
            this.router.navigate(['/']);

        }
    }


    getStudents(): void {
        this.students = [];
        this.overviewService.getStudents().subscribe(users => {
            this.users = users;
            for (let i = 0; i < this.users.length; i++) {
                this.students.push(this.users[i].userName);
            }
            this.selected = this.students[0];
            this.selectedUser = this.users[0];
            this.historyTableComponent.user = this.selectedUser;
            this.historyTableComponent.initComponent();
        });
    }

    onSelect(student: string): void {
        this.selected = student;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userName === this.selected) {
                this.selectedUser = this.users[i];
                this.historyTableComponent.user = this.selectedUser;
                this.historyTableComponent.initComponent();
            }
        }
    }


    dealNext(student: string): void {
        this.selected = student;
        window.scrollTo(0, 0);
    }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-quick-start',
    templateUrl: './quick-start.component.html',
    styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {

    constructor(private router: Router,public dialog: MatDialog) {
    }
    openDialog(): void {
        let inform = "新手指南";
        this.dialog.open(DialogComponent, {
            width: '60%',
            data: {isNav: true, inform: inform, imgUrl: null, color: null, shape: null}
        });
    }

    ngOnInit() {
        this.openDialog();
    }

    onClick() {
        if (localStorage.getItem('user') != undefined) {
            this.router.navigate(['/blockly-learn']);
        } else {
            this.router.navigate(['/login']);
        }
    }

}

import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {User} from '../bean/user';
import {HistoryService} from './service/history.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface SceneHistorySourceElement {
    designPropName: string;
    sceneName: string;
    beginTime: string;
    testPassRate: string;
}

@Component({
    selector: 'app-history-table',
    templateUrl: './history-table.component.html',
    styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent implements OnInit {
    displayedColumns: string[];
    sceneHistorySource: any;
    time: string;
    @Input() user: User;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(private historyService: HistoryService) {
        this.sceneHistorySource = [];
        this.displayedColumns = ['designPropName', 'sceneName', 'beginTime', 'testPassRate'];

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.toString();
        let splits = filterValue.split(' ');
        let em = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC');
        let month = em.indexOf(splits[1].toUpperCase()) + 1;
        let day = splits[2];
        let year = splits[3];
        filterValue = year + '/' + month + '/' + parseInt(day);
        this.sceneHistorySource.filter = filterValue.trim();
    }

    ngOnInit() {
        if (this.user != undefined) {
            this.initComponent();
        }
    }

    initComponent() {
        this.sceneHistorySource = [];
        let list: any;
        let str = localStorage.getItem('scenes' + this.user.userName);
        let temp = [];
        if (str === null) {
            this.historyService.getScenes(this.user.userName).subscribe(scenes => {
                list = scenes;
                for (const index in list) {
                    if (list[index].designPropName != undefined) {
                        temp.push({
                            designPropName: list[index].designPropName,
                            sceneName: list[index].sceneName,
                            beginTime: list[index].beginTime,
                            testPassRate: list[index].testPassRate
                        });
                    }
                }
                this.sceneHistorySource = temp;
                this.sceneHistorySource = new MatTableDataSource(this.sceneHistorySource);
                this.sceneHistorySource.paginator = this.paginator;

                localStorage.setItem('scenes' + this.user.userName, JSON.stringify(temp));
            });

        } else {
            list = JSON.parse(str);
            for (const index in list) {
                if (list[index].designPropName != undefined) {
                    temp.push({
                        designPropName: list[index].designPropName,
                        sceneName: list[index].sceneName,
                        beginTime: list[index].beginTime,
                        testPassRate: list[index].testPassRate
                    });
                }
            }
            this.sceneHistorySource = temp;
            this.sceneHistorySource = new MatTableDataSource(this.sceneHistorySource);
            this.sceneHistorySource.paginator = this.paginator;
        }
    }
}

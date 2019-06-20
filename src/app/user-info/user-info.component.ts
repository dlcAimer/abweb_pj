import {Component, OnInit, ViewChild} from '@angular/core';
import {LineChart} from '../../data/chart';
import {User} from '../bean/user';
import {Router} from '@angular/router';
import {patterns} from '../../data/introductionData';
import {HistoryTableComponent} from '../history-table/history-table.component';

export interface PeriodicElement {
    name: string;
    position: number;
    symbol: string;
}

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    studentLineChart: LineChart;
    nowUser: User;
    @ViewChild(HistoryTableComponent) historyTableComponent: HistoryTableComponent;


    constructor(private router: Router) {
        this.nowUser = JSON.parse(localStorage.getItem("user"));
        try {
            this.dataSource = [];
            this.displayedColumns = ['position', 'name', 'symbol'];
            for (let i = 0; i < patterns.length; i++) {
                let symbol = localStorage.getItem(patterns[i]+this.nowUser.userName) == null ? '未开始' : localStorage.getItem(patterns[i]+this.nowUser.userName);
                this.dataSource.push({
                    position: i + 1,
                    name: patterns[i],
                    symbol: symbol
                });
            }
        } catch (e) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.getLineChart();

    }

    changeUser() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }


    getLineChart() {
        // 传入的参数可以是固定的数据，可以是从http请求来的数据
        const colorDomain = new Array('#FFA1B5', '#86C7F3', '#5aa454');
        this.studentLineChart = new LineChart();
        this.studentLineChart.xAxis = true;
        this.studentLineChart.yAxis = true;
        this.studentLineChart.legend = true;
        this.studentLineChart.showXAxisLabel = true;
        this.studentLineChart.showYAxisLabel = true;
        this.studentLineChart.yAxisLabel = '时间/min';
        this.studentLineChart.view = [800, 400];
        this.studentLineChart.results = new Array();
        this.studentLineChart.scheme.domain = colorDomain;
        this.studentLineChart.generateStudentStatisticLineChartResult();
    }


}

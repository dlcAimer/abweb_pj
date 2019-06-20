import {Component, OnInit} from '@angular/core';
import {Settings} from '../../data/const';

@Component({
    selector: 'app-blockly-learn',
    templateUrl: './blockly-learn.component.html',
    styleUrls: ['./blockly-learn.component.css']
})
export class BlocklyLearnComponent implements OnInit {
    selected: string;

    constructor() {
    }


    ngOnInit() {
        particlesJS('particles', Settings.ParticlesConfig);
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

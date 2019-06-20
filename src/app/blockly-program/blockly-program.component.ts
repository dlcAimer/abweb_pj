import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BlocklyService} from './service/blockly.service';
import {ActivatedRoute, Router} from '@angular/router';
import {patterns, scenes_desc, scenes_name} from '../../data/introductionData';
import {sceneXmls} from '../../data/toolbox';
import {SceneHistory} from '../bean/sceneHistory';
import {CodeService} from './service/code.service';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {User} from '../bean/user';

declare let Blockly: any;

@Component({
    selector: 'app-blockly-program',
    templateUrl: './blockly-program.component.html',
    styleUrls: ['./blockly-program.component.css']
})

export class BlocklyProgramComponent implements OnInit {
    patternIdx: number;
    sceneIdx: number;
    workspace: any;
    patterns: string[];
    scenes_name: string[];
    scenes_desc: string[][];
    style: string;
    disableNext: boolean;
    disablePre: boolean;
    toolboxStr: string;
    beginTime: Date;
    code: any;
    user: User;
    check:boolean;
    @ViewChild('toolbox') toolbox: ElementRef;

    constructor(public dialog: MatDialog, private codeService: CodeService, private blocklyService: BlocklyService, private routerIonfo: ActivatedRoute, private router: Router) {
        this.beginTime = new Date();
        this.patternIdx = this.routerIonfo.snapshot.queryParams['id'];
        this.check =true;
        for (let i = 0; i <5 ; i++) {
            if(this.patternIdx==i){
                this.check = false;
            }
        }
        this.sceneIdx = 0;
        this.patterns = patterns;
        this.scenes_desc = scenes_desc;
        this.scenes_name = scenes_name;
        this.style = '<style>' +
            '.english {  border:1px solid gainsboro;\n' +
            '  color: #FF3399;' + 'background-color: #F8F8F8;' +
            'border-radius: 5px}' +
            '.sceneTitle{font-weight: bold; color: #484848}' +
            '</style>';
    }

    openDialog(inform: string, imageUrl: string, color: string, shape: string): void {
        this.dialog.open(DialogComponent, {
            width: '30%',
            data: {isNav: false, inform: inform, imgUrl: imageUrl, color: color, shape: shape}
        });
    }

    closeDiag() {
        this.dialog.closeAll();
    }

    createBlocks() {
        this.toolboxStr = sceneXmls[this.patternIdx][this.sceneIdx];
        this.workspace = this.blocklyService.blockly.inject('blocklyDiv', {
            toolbox: this.toolboxStr,
            collapse: true,
            comments: true,
            disable: true,
            maxBlocks: Infinity,
            trashcan: true,
            horizontalLayout: false,
            toolboxPosition: 'start',
            css: true,
            media: '../../js/media/',
            rtl: false,
            scrollbars: true,
            sounds: true,
            oneBasedIndex: true,
        });
    }

    changeBlocks() {
        this.toolboxStr = sceneXmls[this.patternIdx][this.sceneIdx];
        this.workspace.updateToolbox(this.toolboxStr);
    }


    ngOnInit(): void {
        if(this.check) {
            this.router.navigate(['/login']);
            return;
        }
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/']);
        } else {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.createBlocks();
            this.changeScene(0);
        }
    }


    showCode(): void {
        this.code = Blockly.JavaScript.workspaceToCode(this.workspace);
        let success = false;
        // 将代码发送给后端
        try {
            let scene = new SceneHistory();
            scene.token = this.user.token;
            scene.codeJava = localStorage.getItem('code').split('$');
            scene.designPropName = this.patterns[this.patternIdx];
            scene.sceneName = ' 场景' + (this.sceneIdx + 1);
            scene.beginTime = new Date().toLocaleString();

            localStorage.setItem(patterns[this.patternIdx] + this.user.userName, '进行中');
            this.openDialog('正在为你编译和运行代码。。。', null, null, null);
            this.codeService.checkCode(scene).subscribe(sceneRes => {
                if (sceneRes != undefined) {
                    this.saveScene(sceneRes);
                    success = sceneRes.testPassRate == '100%';
                    this.closeDiag();
                    //弹窗
                    let imageUrl;
                    // success = true;
                    if (success) {
                        imageUrl = this.getImageUrl();
                        let inform = '恭喜通过';
                        this.openDialog(inform, imageUrl, localStorage.getItem('color'), this.sceneIdx == 2 ? localStorage.getItem('shape') : null);
                        //如果pass了最后一个场景
                        if (this.sceneIdx == (this.scenes_desc[this.patternIdx].length - 1)) {
                            localStorage.setItem(patterns[this.patternIdx] + this.user.userName, '通过');
                        }
                    } else {
                        imageUrl = '../../pic/fail.gif';
                        let inform = '再检查一下积木吧 通过率：' + sceneRes.testPassRate;
                        this.openDialog(inform, imageUrl, null, null);
                    }
                }
                localStorage.removeItem('shape');
                localStorage.removeItem('color');
                localStorage.removeItem('code');

            });
        } catch (error) {
            localStorage.removeItem('shape');
            localStorage.removeItem('color');
            localStorage.removeItem('code');
            console.log(error);
        }

    }

    saveScene(scene: SceneHistory) {
        let scenesStr = localStorage.getItem('scenes' + this.user.userName);
        if (scenesStr == null) {
            let scenes = [];
            scenes.push(scene);
            localStorage.setItem('scenes' + this.user.userName, JSON.stringify(scenes));
        } else {
            let scenes = JSON.parse(scenesStr);
            scenes.push(scene);
            localStorage.setItem('scenes' + this.user.userName, JSON.stringify(scenes));
        }
    }


    changeScene(addIdx: number): void {

        let newIdx = this.sceneIdx + addIdx;
        this.disableNext = false;
        this.disablePre = false;
        if (newIdx == 0) {
            this.disablePre = true;
        }
        if (newIdx == scenes_desc[this.patternIdx].length - 1) {
            this.disableNext = true;
        }
        this.sceneIdx = newIdx;
        this.changeBlocks();
    }

    getImageUrl(): string {
        let imageUrl = null;
        if (this.patternIdx == 0 && this.sceneIdx == 1) {
            imageUrl = '../../pic/factory.gif';
        } else if (this.patternIdx == 1 && this.sceneIdx == 0) {
            imageUrl = '../../pic/danli.gif';
        } else if ((this.patternIdx == 0 && this.sceneIdx == 0) ||
            (this.patternIdx == 2 && this.sceneIdx == 0)) {
            imageUrl = '../../pic/shape.gif';
        }
        return imageUrl;
    }

    ngOnDestroy() {
        if(this.check) {
            this.router.navigate(['/login']);
            return;
        }
        // 更新学习时间
        let uid = this.user.userName;
        let dataListKey = 'dateList' + uid;
        let timeMin = (new Date().getTime() - this.beginTime.getTime()) / 86400000 * 24 * 60;
        let dateListStr = (localStorage.getItem(dataListKey));
        if (dateListStr == null) {
            let dateList = [];
            dateList.push({'name': new Date().toDateString(), 'value': timeMin});
            localStorage.setItem(dataListKey, JSON.stringify(dateList));
        } else {
            let dateList = JSON.parse(dateListStr);
            let temp = dateList[dateList.length - 1];
            let tempDate = temp.name;
            if (tempDate == new Date().toDateString()) {
                dateList[dateList.length - 1].value += timeMin;
            } else {
                dateList.push({'name': new Date().toDateString(), 'value': timeMin});
            }

            localStorage.setItem(dataListKey, JSON.stringify(dateList));
        }
    }
}

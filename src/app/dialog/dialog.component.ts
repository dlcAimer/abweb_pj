import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../bean/dialogData';
import {enableProdMode} from '@angular/core';
import * as THREE from 'three';

enableProdMode();

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit {
    public context: CanvasRenderingContext2D;
    scene: any;
    camera: any;
    mesh: any;
    renderer: any;
    hidden3D: boolean = true;
    canvasHeight: number;
    canvasWidth: number;
    anm: any;
    @ViewChild('mycanvas') canvasRef: ElementRef;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onConvert(): void {
        this.hidden3D = !this.hidden3D;
        if (this.data.shape) {
            window.cancelAnimationFrame(this.anm);
            this.draw_3DShape();
        }
    }


    ngAfterViewInit(): void {
        if (this.data.shape) {
            this.draw_3DShape();
        }
    }


    draw_3DShape(): void {
        let color = this.data.color;
        let shape = this.data.shape;
        let canvas = this.canvasRef.nativeElement;
        this.canvasWidth = canvas.clientWidth;
        this.canvasHeight = canvas.clientHeight;
        //创建scene
        this.scene = new THREE.Scene();
        //设置背景色
        this.scene.background = new THREE.Color(0xffffff);
        //设置相机
        this.camera = new THREE.PerspectiveCamera(30,
            canvas.clientWidth / canvas.clientHeight, 1, 1000);
        this.camera.position.set(100, 300, 50);//设置相机位置
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));//让相机指向原点


        if (!this.hidden3D) {
            if (shape === 'Circle') {
                this.mesh = this.createSphere(color);
            } else if (shape === 'Triangle') {
                this.mesh = this.createCone(color);
            } else if (shape === 'Square') {
                this.mesh = this.createCube(color);
            }
        } else {
            if (shape === 'Circle') {
                this.mesh = this.createCircle(color);
            } else if (shape === 'Triangle') {
                this.mesh = this.createTriangle(color);
            } else if (shape === 'Square') {
                this.mesh = this.createSquare(color);
            }
        }

        this.mesh.position.set(this.canvasWidth / 50, this.canvasHeight / 5, 0);
        this.scene.add(this.mesh);

        this.renderer = new THREE.WebGLRenderer({canvas: canvas});
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        //给场景添加光源
        //自然光
        let ambientLight = new THREE.AmbientLight(0x606060);
        this.scene.add(ambientLight);
        //平行光源
        let directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 0.75, 0.5).normalize();
        this.scene.add(directionalLight);
        let animate = () => {
            this.mesh.rotation.x += 0.01;
            this.mesh.rotation.y += 0.02;
            this.renderer.render(this.scene, this.camera);
            this.anm = requestAnimationFrame(animate);
        };
        animate();
    }

    createCube(color) {
        //创建正方体
        let cubeGeo = new THREE.BoxGeometry(50, 50, 50, 5, 5, 5);
        let cubeMat = new THREE.MeshLambertMaterial({
            color: color,
            wireframe: false
        });
        return new THREE.Mesh(cubeGeo, cubeMat);
    }

    //创建一个球
    createSphere(color) {
        let sphereGeo = new THREE.SphereGeometry(40, 40, 40);//创建球体
        let sphereMat = new THREE.MeshLambertMaterial({//创建材料
            color: color,
            wireframe: false
        });
        //创建球体网格模型
        return new THREE.Mesh(sphereGeo, sphereMat);//将球体添加到场景
    }

    createCone(color) {
        let coneGeo = new THREE.ConeGeometry(40, 50, 3, 3);
        let coneMat = new THREE.MeshLambertMaterial({//创建材料
            color: color,
            wireframe: false
        });
        return new THREE.Mesh(coneGeo, coneMat);
    }

    createCircle(color) {
        let geometry = new THREE.CircleGeometry(40, 32);
        let material = new THREE.MeshBasicMaterial({color: color});
        return new THREE.Mesh(geometry, material);
    }

    createSquare(color) {
        let geometry = new THREE.PlaneGeometry(40, 40, 32);
        let material = new THREE.MeshBasicMaterial({color: color, side: THREE.DoubleSide});
        return new THREE.Mesh(geometry, material);
    }

    createTriangle(color) {
        let coneGeo = new THREE.ConeGeometry(40, 0, 3, 3);
        let coneMat = new THREE.MeshLambertMaterial({//创建材料
            color: color,
            wireframe: false
        });
        return new THREE.Mesh(coneGeo, coneMat);
    }

}

import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

// import model from './model.js'; //模型对象

//场景
const scene = new THREE.Scene();
// scene.add(model); //模型对象添加到场景中

const loader = new GLTFLoader(); //创建一个GLTF加载器


//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// directionalLight.position.set(400, 200, 300);
// scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0x422C63, 0.4);
scene.add(ambient);
loader.load("../../train/demo1/assets/aa1.glb", function (gltf) {
    scene.add(gltf.scene)
    console.log(scene,gltf.scene)
})

//渲染器和相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(100, width / height, 1, 3000);
camera.position.set(0, 2,0);
camera.lookAt(0, 2, 0);



// const cameraHelper = new THREE.CameraHelper(camera)
// scene.add(cameraHelper);
const renderer = new THREE.WebGLRenderer({
    antialias:true,//抗锯齿
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
renderer.outputEncoding = THREE.sRGBEncoding;

// 设置相机控件轨道控制器OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);

// 添加第一人称控制器
const controls1 = new FirstPersonControls(camera, renderer.domElement);
controls1.lookSpeed = 0.06;
controls1.movementSpeed = 5
// 渲染循环
function render() {
    controls1.update(0.01);  // 更新控制器
    camera.position.y = 2
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();



// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};
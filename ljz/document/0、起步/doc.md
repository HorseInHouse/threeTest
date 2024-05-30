#### 1、添加辅助坐标轴
```javascript
// @params {Object} size 坐标轴线长度
const axes = new THREE.AxesHelper(20);
scene.add(axes);
```

#### 2、通过鼠标拖动、缩放和旋转查看 3D 场景
```javascript
const trackballControls = initTrackballControls(camera, renderer);
function render() {
        trackballControls.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
}
```

#### 3、查看动画帧率，fps
```javascript
const stats = initStats();
function render() {
        stats.update()
}
```

#### 4、添加调试工具
```javascript
const gui = new dat.GUI();
const cubeParams = {
    rotationSpeedX: 0.01,
    rotationSpeedY: 0.01,
    color: "#00ff00"
};
gui.add(cubeParams, 'rotationSpeedX', 0, 0.1);
gui.add(cubeParams, 'rotationSpeedY', 0, 0.1);
gui.addColor(cubeParams, 'color').onChange(function(value) {
    cube.material.color.set(value);
});
function render() {
    requestAnimationFrame(animate);
    cube.rotation.x += cubeParams.rotationSpeedX;
    cube.rotation.y += cubeParams.rotationSpeedY;
    renderer.render(scene, camera);
}
```

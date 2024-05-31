#### 简单动画
+ 使用requestAnimationFrame代替定时器
+ 弊端1：定时器在不在当前tab页签下还是会触发，消耗资源
+ 弊端2：定时器一旦调用就会刷新屏幕


#### 选择对象
+ 将标准化设备坐标(NDC)转为世界坐标：
```javascript
// 归一化坐标,将鼠标点击位置转换为标准化设备坐标 (NDC)
let vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
// 将 NDC 转换为世界坐标
vector = vector.unproject(camera);
// 计算从相机位置到点击位置的方向向量并归一化
// 射线方向归一化的原因：射线投射器只关心方向，不再受到向量长度的影响
const direction = vector.sub(camera.position).normalize()
// 创建射线投射器，起点是相机位置，方向是计算出的单位向量
const raycaster = new THREE.Raycaster(camera.position, direction);
// 进行射线投射，检测与场景中物体的交点
const intersects = raycaster.intersectObjects([sphere, cylinder, cube]);
if (intersects.length > 0) {
    // todo
}
```

#### 使用Tween.js实现动画
```javascript
const posSrc = { pos: 1};
const tween = new TWEEN.Tween(posSrc).to({pos: 0}, 2000);
const tweenBack = new TWEEN.Tween(posSrc).to({pos: 1}, 2000);
// 创建循环动画
tweenBack.chain(tween);
tween.chain(tweenBack);
tween.start();
function render() {
    TWEEN.update();
    const positionArray = mesh.geometry.attributes['position']
    for (i = 0; i < positionArray.count ; i++) {
        const oldPosX = origPosition.getX(i);
        const oldPosY = origPosition.getY(i);
        const oldPosZ = origPosition.getZ(i);
        positionArray.setX(i, oldPosX * posSrc.pos);
        positionArray.setY(i, oldPosY * posSrc.pos);
        positionArray.setZ(i, oldPosZ * posSrc.pos);
    }
    positionArray.needsUpdate = true;
}
```

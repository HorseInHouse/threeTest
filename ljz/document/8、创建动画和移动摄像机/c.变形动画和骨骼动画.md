#### 用变形目标创建动画
```javascript
const loader = new THREE.JSONLoader();
loader.load('../../assets/models/horse/horse.js', function (geometry) {
    // 计算顶点法线，用于光照计算
    geometry.computeVertexNormals();
    // 计算形态目标法线，用于形态动画,使模型看起来不粗糙
    geometry.computeMorphNormals();
    // morphTargets:允许通过顶点动画来变换模型的形状。通常用于面部表情动画或模型变形等效果
    // vertexColors:使用顶点颜色来决定每个面的颜色
    const mat = new THREE.MeshLambertMaterial({morphTargets: true, vertexColors: THREE.FaceColors});
    mesh = new THREE.Mesh(geometry, mat);
    // 创建一个动画混合器（AnimationMixer）并将其绑定到网格对象上
    mixer = new THREE.AnimationMixer(mesh);
    // 从几何体的动画数组中获取第一个动画剪辑
    animationClip = geometry.animations[0]
    // 创建一个剪辑动作（clipAction）并播放该动画。
    clipAction = mixer.clipAction(animationClip).play();
    // 设置动画循环模式为重复播放
    clipAction.setLoop(THREE.LoopRepeat);
    scene.add(mesh)
})
```

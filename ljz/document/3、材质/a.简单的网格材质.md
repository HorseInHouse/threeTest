#### 网格基础材质THREE.MeshBasicMaterial
+ 基础材质，用于给几何体赋予一种简单的颜色，课显示几何体线框
+ 不考虑场景中光照的影响

#### 网格深度材质THREE.MeshDepthMaterial
+ 这个材质使用从摄像机到网格的距离决定如何给网格上色
+ 这种材质可以和比的材质叠加使用，**实现逐渐消失的效果**，通过修改camera的near和far实现
+ camera的near和far之间的距离决定了场景的亮度和物体消失的速度

> 联合材质：由于网格深度材质没有选项设置颜色，所以可以通过联合材质创建新效果
```javascript
const cubeMaterial = new THREE.MeshDepthMaterial();
const colorMaterial = new THREE.MeshBasicMaterial({
    color: controls.color,
    transparent: true,
    blending: THREE.MultiplyBlending
});
// 创建一个网格时候，几何体会被复制，返回一个网格组，里面两个网格完全相同
const cube = new THREE.SceneUtils.createMultiMaterialObject(cubeGeometry, [colorMaterial,
    cubeMaterial
]);
// 防止渲染闪烁
cube.children[1].scale.set(0.99, 0.99, 0.99);
```

#### 网格法向材质THREE.MeshNormalMaterial
+ 简单材质，根据法向量计算物体表面的颜色,可以显示法向量

> 在单几何体上使用多种材质
+ new THREE.Mesh中的材质传递是list的话，会根据模型的faces中的materialIndex去匹配list的下标
+ 所以，比如一个正方体12个面(一个面是两个三角形)，只需要列举6个材质的list，因为它会将材质应用到一个整个侧面
```javascript
const mats = [];
mats.push(new THREE.MeshBasicMaterial({
    color: 0x009e60
}));
mats.push(new THREE.MeshBasicMaterial({
color: 0x009e60
}));
const cubeGeom = new THREE.BoxGeometry(2.9, 2.9, 2.9);
const cube = new THREE.Mesh(cubeGeom, mats);
group.add(cube);
```



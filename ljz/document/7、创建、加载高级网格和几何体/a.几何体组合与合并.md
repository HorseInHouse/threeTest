#### 对象组合
+ 对象旋转、缩放等操作，可基于组合的父对象
+ group的position设置为(10,0,0)，子元素设置为(5,0,0),当对象被添加到场景中，组内元素位置为(15,0,0)
```javascript
const sphere = createMesh(new THREE.SphereGeometry(5, 10, 10));
const cube = createMesh(new THREE.BoxGeometry(6, 6, 6));
const group = new THREE.Group();
group.add(sphere);
group.add(cube);
```
#### 将多个网格合并成一个网格
+ 可以提高渲染性能
+ 因为是将多个相同几何体合并成一个，所以不太好单独操控某一个几何体，除非能遍历到对应的顶点和面进行操作
```javascript
const geometry = new THREE.Geometry();
for (var i = 0; i < controls.numberOfObjects; i++) {
    const cubeMesh = addcube();
    cubeMesh.updateMatrix();
    geometry.merge(cubeMesh.geometry, cubeMesh.matrix);
}
scene.add(new THREE.Mesh(geometry, cubeMaterial));
```

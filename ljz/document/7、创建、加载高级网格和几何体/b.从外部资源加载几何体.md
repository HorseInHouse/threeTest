#### 将当前模型导出成json
```javascript
mesh.toJSON()
```

#### 将模型json导入到场景中
```javascript
const loadedGeometry = JSON.parse(json);
const loader = new THREE.ObjectLoader();
loadedMesh = loader.parse(loadedGeometry);
```

#### 加载.obj文件
+ 定义几何体
```javascript
const loader = new THREE.OBJLoader();
loader.load('../../assets/models/pinecone/pinecone.obj', function (mesh) {
    loaderScene.render(mesh, camera);
});
```

#### 加载.mtl文件
+ 定义材质
```javascript
const mtlLoader = new THREE.MTLLoader();
mtlLoader.load('butterfly.mtl', function (materials) {
    loaderScene.render(mesh, camera);
})
```

#### 将.mtl材质文件赋予给.obj几何体文件
```javascript
const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath("../../assets/models/butterfly/")
mtlLoader.load('butterfly.mtl', function (materials) {
    materials.preload();
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('../../assets/models/butterfly/butterfly.obj', function (object) {
        loaderScene.render(object, camera);
    });
});
```

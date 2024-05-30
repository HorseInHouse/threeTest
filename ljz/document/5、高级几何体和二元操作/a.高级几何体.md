#### 凸多边形几何体 new THREE.ConvexGeometry

```javascript
// @param {list} points 
new THREE.ConvexGeometry(points)
```

+ 基于给定的顶点自动生成一个凸多边形
+ 需要手动计算顶点和平面的法线

```javascript
const convexGeometry = new THREE.ConvexGeometry(points);
convexGeometry.computeVertexNormals();
convexGeometry.computeFaceNormals();
```

#### 旋转体几何体(可制作花瓶) new THREE.LatheGeometry
```javascript
// @param {list} points
new THREE.LatheGeometry(points, ...args)
```

#### 二维图形转三维图形  new THREE.ExtrudeGeometry

```javascript
const options = {
    amount: controls.amount,
    bevelThickness: controls.bevelThickness,
    bevelSize: controls.bevelSize,
    bevelSegments: controls.bevelSegments,
    bevelEnabled: controls.bevelEnabled,
    curveSegments: controls.curveSegments,
    steps: controls.steps
};
new THREE.ExtrudeGeometry(new Three.Shape(), options);
```

#### 沿三维路径延伸的管状几何体 new THREE.TubeGeometry
```javascript
new THREE.ExtrudeGeometry(new Three.Shape(), options);
```

#### 创建三维文本
```javascript
let fontload1 = new THREE.FontLoader();
fontload1.load('../../assets/fonts/bitstream_vera_sans_mono_roman.typeface.json', function (response) {
    controls.font = response;
    font_bitstream = response;
    controls.redraw();
    render();
});
const options = {
    size: controls.size,
    height: controls.height,
    weight: controls.weight,
    font: controls.font,
    bevelThickness: controls.bevelThickness,
    bevelSize: controls.bevelSize,
    bevelSegments: controls.bevelSegments,
    bevelEnabled: controls.bevelEnabled,
    curveSegments: controls.curveSegments,
    steps: controls.steps
};
const geom = new THREE.TextGeometry("Learning Three.js", options)
geom.applyMatrix(new THREE.Matrix4().makeScale(0.05,0.05,0.05));
geom.center();
```

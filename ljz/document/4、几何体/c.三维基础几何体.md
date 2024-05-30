### 三维几何体
#### 长方体 new THREE.BoxGeometry
```javascript
// @param {number} depth 深
new THREE.BoxGeometry(width, height, depth)
```
#### 球体 new THREE.SphereGeometry
```javascript
// @param {number} widthSegments 竖直方向分段数，越多越光滑
// @param {number} heightSegments 水平方向分段数，越多越光滑
new THREE.SphereGeometry(radius, widthSegments, heightSegments)
```
#### 圆柱体 new THREE.CylinderGeometry
```javascript
// @param {number} radiusTop 顶部圆的尺寸
// @param {number} radiusBottom 低部圆的尺寸
new THREE.CylinderGeometry(radiusTop, radiusBottom, height, ...args)
```
#### 圆锥几何体 new THREE.ConeGeometry
```javascript
// 用法同CylinderGeometry类似
new THREE.ConeGeometry(radius, height, ...args)
```
#### 圆环体(可创建类似甜甜圈) new THREE.TorusGeometry
```javascript
// @param {number} radius 外管半径
// @param {number} tube 内管半径
new THREE.TorusGeometry(radius, tube, radialSegments, ...args)
```
#### 环状纽结体(可创建类似甜甜圈) new THREE.TorusKnotGeometry
```javascript
// @param {number} p 定义纽结形状，默认为2
// @param {number} q 定义纽结形状，默认为3
new THREE.TorusKnotGeometry(radius, tube, segmentsT, segmentsR, p, q )
```
#### 多面体 new THREE.PolyhedronGeometry
```javascript
// @param {array} vertices 定义多面体的顶点
// @param {array} indices 定义顶点的索引，以指定多面体的面
// @param {number} radius 多面体的大小，默认为1
// @param {number} detail 给多面体添加细节，设置为1，一个三角形会拆分成4个三角形
new THREE.PolyhedronGeometry(vertices, indices, radius, detail )
```

### 二维几何体
#### 矩形 new THREE.PlaneGeometry
```javascript
// @param {number} segmentsWidth 宽度段数量，指定举行宽度分成几段，默认是1
new THREE.PlaneGeometry(width, depth, segmentsWidth, segmentsDepth)
```
#### 圆 new THREE.CircleGeometry
```javascript
// @param {number} radius 半径
// @param {number} segments 创建圆所有面的数量最小3个，默认8个，越大圆越光滑
// @param {number} thetaStart 从哪里开始画圆[0,2*Math.PI]
// @param {number} thetaLength 圆画多大，通过这个参数可画出扇形
new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
```
#### 环形 new THREE.RingGeometry
```javascript
// @param {number} thetaSegments 创建圆所有面的数量最小3个，默认8个，越大圆越光滑
// @param {number} thetaStart 从哪里开始画圆[0,2*Math.PI]
// @param {number} thetaLength 圆画多大，通过这个参数可画出扇形
new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength)
```
#### 任意图形 new THREE.ShapeGeometry
```javascript
// @param {object} shapes 创建圆所有面的数量最小3个，默认8个，越大圆越光滑
// @param {object} options 从哪里开始画圆[0,2*Math.PI]
new THREE.ShapeGeometry(shapes, options)

const shape = new THREE.Shape();
/**
 * moveTo
 * lineTo
 * 等常用画图方法
 * **/
```


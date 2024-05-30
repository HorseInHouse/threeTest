#### 自定义一个几何体，以长方体为例
定义顶点 8个顶点
定义面 16个面
执行computerFaceNormals方法，threeJs会决定每个面的法向量，从而决定不同光源下的颜色

```javascript
const vertices = [
      new THREE.Vector3(1, 3, 1), // 0
      new THREE.Vector3(1, 3, -1),// 1
      new THREE.Vector3(1, -1, 1),// 2
  ];
const faces = [new THREE.Face3(0, 2, 1)] // 分别代表点集合下标值
const geom = new THREE.Geometry()
geom.vertices = vertices
geom.faces = faces
geom.computerFaceNormals()
```

在三维建模领域中，用三角形还是四边形存在争议，但是对于渲染器和游戏引擎来说，用三角形更加容易，且效率更高

>创建面顶点时，创建面向摄像机的面，顶点顺序是顺时针，反之逆时针

#### 网格对象的属性和方法
```javascript
// 相对父对象的位置
cube.position.x = 100 || cube.position.set(100,100,100)
// 设置绕每个轴的旋转弧度
cube.rotation.x = 100 || cube.rotation.set(100,100,100)
// 设置沿着x,y,z轴的缩放对象
cube.scale.x = 100 || cube.scale.set(100,100,100)
// 沿各轴平移
translateX() || translateY() || translateZ()
// 设置网格对象是否渲染
cube.visible = true || false
// 添加阴影
cube.castShadow = true || false
```


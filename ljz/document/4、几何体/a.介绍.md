#### 几何体的基类1：THREE.Geometry
vertices(顶点)
+ 顶点数组，存储定义一个几何体所有顶点空间位置
faces(面)
+ 一个face3数组，每个元素定义一个面。每个面都通过索引指向vertices属性中三个顶点
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

#### 几何体的基类2：THREE.BufferGeometry
attributes(分量)
+ 存储信息被直接送往GPU处理。
+ 若要定一个几个形体，至少创建Float32Array数组，每三个数组元素指定坐标，每三个顶点确定一个面
```javascript
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
]);
// 创建属性缓冲区对象
// 3个为一组，表示一个顶点的xyz坐标
const attribue = new THREE.BufferAttribute(vertices, 3);
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;
```
index(索引)

#### THREE.Geometry和THREE.BufferGeometry之间的转换
+ 因为THREE.Geometry更好操作点和面，可能有的模型只能基于Geometry和THREE.BufferGeometry创建
+ THREE.Geometry
```javascript
const normalGeometry = new THREE.Geometry();
const bufferGeometry = new THREE.BufferGeometry()
normalGeometry.fromBufferGeometry(bufferGeometry);
bufferGeometry.fromGeometry(normalGeometry);


```

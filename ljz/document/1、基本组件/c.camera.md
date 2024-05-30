#### 透视相机:Perspective，近大远小，符合真实生活所见
```javascript
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
```
+ fov:视场，摄像机看到的部分场景。比如人类看到的接近180度，鸟类接近360度。对于游戏而言，通常建议60-90，推荐默认值50
+ aspect:长宽比，渲染结果横向尺寸和纵向尺寸的比，推荐默认值：window.innerWidth / window.innerHeight
+ near:近面距离，定义从距离摄像机多近的距离开始渲染，尽可能设置小从而看到所有物体，推荐默认值：0.1
+ far:远面距离，定义摄像机从它所处位置能够看到多远，设置小一部分不渲染，设置大会影响性能。推荐默认值：1000
+ camera.zoom = 1
+ zoom:变焦，可以放大和缩小场景。如果设置为负数，场景会上下颠倒，推荐默认值：1

#### 正交投影相机:OrthographicCamera,相机距离对渲染结果没有影响，比如《模拟人生》游戏
```javascript
const camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / -16, -200, 500);
```
+ left:左边界，渲染部分的左边界
+ right:有边界，渲染部分的右边界
+ top:上边界
+ bottom:下边界
+ near:近面距离，基于摄像机所处的位置，从这一点开始渲染
+ far:远面距离，基于摄像机所处的位置，渲染场景到这一点为止
+ camera.zoom = 1
+ zoom:变焦，可以放大和缩小场景。如果设置为负数，场景会上下颠倒，推荐默认值：1

#### 将摄像机聚焦在指定点上
```javascript
camera.lookAt(x,y,z)
```

>当使用lookAt方法时，可以在某个特定位置设置相机，可以通过改变某个mesh的坐标从而实现相机随着物体的移动而移动。


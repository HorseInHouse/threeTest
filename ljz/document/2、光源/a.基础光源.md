> 不仅要告诉光源生成阴影，还要配置每个几何体castShadow和receiveShadow属性告诉几何体是否接收或投射阴影
#### 环境光THREE.AmbientLight
+ 用于模拟间接照明或填充光，使场景中的阴影区域不会完全变暗，在没有直接光源的情况下也能被看到
+ 该光源的颜色会叠加到场景现有的物体的颜色上,没有特别来源向
+ 不会生成***阴影***
+ 通常，不能作为场景中唯一的光源，目的是弱化阴影或给场景添加一些额外的颜色
```javascript
// @params {string} color
// @params {number} intensity光照强度
const ambientLight = new THREE.AmbientLight("#606008", 1)
```

#### 聚光灯光源THREE.SpotLight
+ 用于聚焦在表演者或特定区域，模拟手电筒、汽车前灯，强调特定区域
+ 是一种锥形效果光源，该光源具有方向和角度
+ 可以生成***阴影***
+ target：光源目标指向，<u>聚光灯独有属性</u>，必须接受一个THREE.Object3D对象，比如THREE.Mesh，不同于Vectors3
+ shadow.mapSize.set当阴影看起来有锯齿不光滑的时候可以设置，场景渲染后无法更改。默认512*512
```javascript
// @params {string} color
// @params {number} intensity光照强度
const spotLight = new THREE.SpotLight("#606008", 1)
// 设置阴影
spotLight.castShadow = true
// 当spotLight.shadow设置为enable时
spotLight.shadow.mapSize.set(width,height)
```

#### 点光源THREE.PointLight
+ 强调场景中的特定区域或物体，创造更动态和真实的照明效果，用于模拟特定位置的光源，如路灯、蜡烛或手电筒。
+ 不会生成***阴影***
```javascript
// @params {string} color
// @params {number} intensity光照强度
const pointLight = new THREE.PointLight("#0c0c0c");
```

#### 平行光源THREE.DirectionalLight
+ 用于自然光模拟，大型场景照明，天文模拟
+ 距离很远的光，被平行光照亮的区域接收到的光强是一样的
```javascript
// @params {string} color
// @params {number} intensity光照强度
const dirLight = new THREE.DirectionalLight("#0c0c0c");
```


---
>THREE.Color对象
```javascript
// @params {Object} color可以是rgb、16进制、颜色字面量等
new THREE.Color(color)
```
----

#### 半球光光源THREE.HemisphereLight
+ 它为获得更自然的户外光照效果提供一种简单的方式
+ 模拟天空和地面方向来的环境光
+ 不会产生阴影
```javascript
// @params {string} groudColor 从地面发出的光线颜色
// @params {string} color 从天空发出的光线的颜色
// @params {number} intensity光照强度 0-1
const ambientLight = new THREE.HemisphereLight("#606008", "#606008", 1)
```

#### 区域光光源THREE.RectAreaLight
+ 用于模拟室内面光源，窗户，显示屏；展览和展示场景；模拟摄影棚中肉光灯
+ 光照比较柔和，能够产生阴影
```javascript
// @params {string} color 从天空发出的光线的颜色
// @params {number} intensity光照强度
// @params {number} 光照宽度
// @params {number} 光照高度
const areaLight = new THREE.RectAreaLight("#606008", 500, 4, 10)
```

#### 镜头光晕
+ 光晕一般会创建多个，主光晕和多个辅助光晕，主光晕会大一点
+ new THREE.LensflareElement：给光晕定义纹理(光晕图片)、尺寸(px)、距离(从光源0-相机1的距离)、颜色
```javascript
const spotLight = new THREE.DirectionalLight(pointColor);
const textureFlare0 = THREE.ImageUtils.loadTexture("../../assets/textures/flares/lensflare0.png");
const lensFlare = new THREE.Lensflare();
lensFlare.addElement(new THREE.LensflareElement(textureFlare0, 350, 0.0, flareColor));
lensFlare.addElement(new THREE.LensflareElement(textureFlare3, 60, 0.6, flareColor));
spotLight.add(lensFlare);
```

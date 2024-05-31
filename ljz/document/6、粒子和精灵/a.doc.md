#### new THREE.Sprite
```javascript
const material = new THREE.SpriteMaterial({
    color: Math.random() * 0xffffff
});
const sprite = new THREE.Sprite(material);
```


```javascript
// geom的创建
const geom = new THREE.Geometry();
for (var x = -15; x < 15; x++) {
    for (var y = -10; y < 10; y++) {
        var particle = new THREE.Vector3(x * 4, y * 4, 0);
        geom.vertices.push(particle);
        geom.colors.push(new THREE.Color(Math.random() * 0xffffff));
    }
}
```

#### THREE.points和THREE.PointsMaterial
+ 通过THREE.Geometry添加vertices
```javascript
const material = new THREE.PointsMaterial({
    color:0x000000, // 这里的color可以覆盖vertuces定义的color
    size: size,
    transparent: transparent,
    opacity: opacity, // 需和transparent配置使用
    vertexColors: vertexColors,
    sizeAttenuation: sizeAttenuation, // 设置成false,则粒子拥有相同尺寸，不随相机距离影响
    color: new THREE.Color(colorValue)
});
new THREE.Points(geom, material)
```

#### 在WebGLRenderer中使用html画布
+ 使用THREE.PointsMaterial并创建THREE.Points对象
+ 使用THREE.Sprite和THREE.SpriteMaterial的map属性


#### 使用纹理样式化粒子
```javascript
// 使用图片加载纹理
const texture = new THREE.TextureLoader().load("../../assets/textures/particles/raindrop-3.png");
const material = new THREE.PointsMaterial({
    size: size,
    transparent: transparent,
    opacity: opacity,
    map: texture,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: sizeAttenuation,
    color: color
});
new THREE.Points(geom, material);
```
+ 可以通过修改map.offset和map.repeat修改一张图取值逻辑


#### 使用精灵贴图
```javascript
const spriteMaterial = new THREE.SpriteMaterial({
      opacity: opacity,
      color: color,
      transparent: transparent,
      map: new THREE.TextureLoader().load("../../assets/textures/particles/test121.jpeg");
    });
spriteMaterial.blending = THREE.AdditiveBlending;
// 染复杂的 3D 场景、具有多个重叠对象的场景等
spriteMaterial.depthTest = false;
const sprite = new THREE.Sprite(spriteMaterial);
```

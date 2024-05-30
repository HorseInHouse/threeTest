向场景中添加对象
```javascript
scene.add()
```

移除向场景中添加对象
```javascript
scene.remove()
```

获取场景中所有子对象列表
```javascript
scene.children()
```

利用name属性，获取场景中特定对象
```javascript
scene.getObjectByName()
```

遍历调用者和调用者所有后代
```javascript
scene.traverse()
```

#### 给场景添加雾化效果
scene.fog = new THREE.FogEXP2(0xffffff,0.15,100) || scene.fog = new THREE.FogEXP2(0xffffff,0.1)

#### 强制场景中所有物体使用相同材质
scene.overrideMaterial = new THREE.MeshLambertMaterial({color:0xffffff})



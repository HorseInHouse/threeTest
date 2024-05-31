#### 轨迹球控制器
```javascript
const trackballControls = new THREE.TrackballControls(camera);
trackballControls.rotateSpeed = 1.0;
trackballControls.zoomSpeed = 1.0;
trackballControls.panSpeed = 1.0;
```

#### 飞行控制器
```javascript
const flyControls = new THREE.FlyControls(camera);
flyControls.movementSpeed = 25;
flyControls.domElement = document.querySelector("webgl-output");
flyControls.rollSpeed = Math.PI / 24;
flyControls.autoForward = true;
flyControls.dragToLook = false;
```

#### 第一视角控制器
```javascript
const fpControls = new THREE.FirstPersonControls(camera);
fpControls.lookSpeed = 0.4;
fpControls.movementSpeed = 20;
fpControls.lookVertical = true;
fpControls.constrainVertical = true;
fpControls.verticalMin = 1.0;
fpControls.verticalMax = 2.0;
fpControls.lon = -150;
fpControls.lat = 120;
```

#### 轨道控制器
```javascript
const orbitControls = new THREE.OrbitControls(camera);
orbitControls.autoRotate = true;
```


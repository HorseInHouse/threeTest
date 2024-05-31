function init() {

  // use the defaults
  var stats = initStats();
  var webGLRenderer = initRenderer();
  var scene = new THREE.Scene();
  var camera = initCamera(new THREE.Vector3(20, 0, 150));
  camera.lookAt(new THREE.Vector3(20, 30, 0));

  createSprites();
  render();

  var group;

  function getTexture() {
    // var texture = new THREE.TextureLoader().load("../../assets/textures/particles/test121.jpeg");
    var texture = new THREE.TextureLoader().load("../../assets/textures/particles/112233.png");
    return texture;
  }
  function getTexture1(){
    // var texture = new THREE.TextureLoader().load("../../assets/textures/particles/sj1.jpg");
    var texture = new THREE.TextureLoader().load("../../assets/textures/particles/11223344.png");
    return texture;
  };
  function createSprites() {
    group = new THREE.Object3D();
    var range = 200;
    for (var i = 0; i < 400; i++) {
      group.add(createSprite(8, false, 0.7, 0xffffff, i % 5, range));
    }
    scene.add(group);
  }

  function createSprite(size, transparent, opacity, color, spriteNumber, range) {

    var spriteMaterial = new THREE.SpriteMaterial({
      opacity: opacity,
      color: color,
      transparent: true,
      map: Math.round(Math.random()) + 1 === 1 ? getTexture() :getTexture1()
    });

    // we have 1 row, with five sprites
    // spriteMaterial.map.offset = new THREE.Vector2(0.2 * spriteNumber, 0);
    // spriteMaterial.map.repeat = new THREE.Vector2(1 / 5, 1);
    spriteMaterial.depthTest = false;

    spriteMaterial.blending = THREE.AdditiveBlending;

    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(size, size, size);
    sprite.position.set(
      Math.random() * range - range / 2,
      Math.random() * range - range / 2,
      Math.random() * range - range / 2);

    return sprite;
  }



  function render() {

    stats.update();
    group.rotation.x +=0.002;
    // group.rotation.z +=0.01;
    // group.rotation.y +=0.01;

    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }
}

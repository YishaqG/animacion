var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();
// scene.background = new THREE.CubeTextureLoader().setPath( '/assets/skybox/' ).load( [
//   '2.png',
//   '2.png',
//   '2.png',
//   '2.png',
//   '2.png',
//   '2.png'
// ] );
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
// camera.position.set( 0, 20, 100 );
controls.update();
camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();
  renderer.render( scene, camera );
}
animate();

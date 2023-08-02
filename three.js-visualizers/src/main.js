import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

window.addEventListener("load", function () {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    antialias: true,
  });
  document.body.appendChild(renderer.domElement);

  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  camera.position.z = 5;

  const controls = new OrbitControls(camera, renderer.domElement);

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();

  audioLoader.load("sounds/sound1.mp3", function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });

  const Boxgeometry = new THREE.BoxGeometry(2, 2, 2);
  const Boxmaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });

  const Boxmesh = new THREE.Mesh(Boxgeometry, Boxmaterial);
  scene.add(Boxmesh);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

  directionalLight.position.set(-1, 2, 3);

  scene.add(directionalLight);
  // create an AudioAnalyser, passing in the sound and desired fftSize
  const analyser = new THREE.AudioAnalyser(sound, 32);

  // get the average frequency of the sound

  const clock = new THREE.Clock();

  render();

  function render() {
    const elapsedTime = clock.getElapsedTime();
    renderer.render(scene, camera);
    const data = analyser.getAverageFrequency();
    // Boxmesh.rotation.x += data * 0.001;
    // Boxmesh.rotation.y += data * 0.001;
    // Boxmesh.rotation.z += data * 0.001;
    Boxmesh.scale.x = 1 + data * 0.01;
    Boxmesh.scale.y = 1 + data * 0.01;
    Boxmesh.scale.z = 1 + data * 0.01;
    requestAnimationFrame(render);
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", handleResize);
}

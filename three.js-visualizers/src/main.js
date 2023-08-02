import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

window.addEventListener("load", function () {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
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

  camera.position.z = 10;

  const controls = new OrbitControls(camera, renderer.domElement);

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();

  audioLoader.load(
    "sounds/Billy_Joel_-_Piano_Man_(Jesusful.com).mp3",
    function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    }
  );

  camera.position.set(0, 25, 150);
  const waveGeometry = new THREE.PlaneGeometry(1500, 1500, 150, 150);
  const waveMaterial = new THREE.MeshStandardMaterial({
    wireframe: true,
    color: 0x111111,
  });

  const wave = new THREE.Mesh(waveGeometry, waveMaterial);

  wave.rotation.x = -Math.PI / 2;
  wave.receiveShadow = true;
  const waveHeight = 1;

  const initialZPositions = [];

  for (let i = 0; i < waveGeometry.attributes.position.count; i++) {
    const z = waveGeometry.attributes.position.getZ(i);
    initialZPositions.push(z);
  }

  const clock = new THREE.Clock();
  let count = 0;
  wave.update = function (data) {
    const elaspedTime = clock.getElapsedTime();
    for (let i = 0; i < waveGeometry.attributes.position.count; i++) {
      let z =
        initialZPositions[i] +
        Math.sin(elaspedTime * 3 + i ** 2) * data[count] * 0.03;
      if (count < 9) {
        count++;
      } else {
        count = 0;
      }
      waveGeometry.attributes.position.setZ(i, z);
    }

    waveGeometry.attributes.position.needsUpdate = true;
  };

  scene.add(wave);

  // const Boxgeometry = new THREE.BoxGeometry(2, 2, 2);
  // const Boxmaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff });

  // const Boxmesh = new THREE.Mesh(Boxgeometry, Boxmaterial);
  // scene.add(Boxmesh);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

  directionalLight.position.set(3, 2, 2);

  scene.add(directionalLight);
  const analyser = new THREE.AudioAnalyser(sound, 32);

  render();

  function render() {
    renderer.render(scene, camera);
    const data = analyser.getAverageFrequency();
    const arr = [...analyser.data];
    // Boxmesh.rotation.x += data * 0.001;
    // Boxmesh.rotation.y += data * 0.001;
    // Boxmesh.rotation.z += data * 0.001;
    // console.log(analyser.data, data);
    // Boxmesh.scale.x = 1 + data * 0.01;
    // Boxmesh.scale.y = 1 + data * 0.01;
    // Boxmesh.scale.z = 1 + data * 0.01;
    wave.update(arr);
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

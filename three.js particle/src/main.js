import * as THREE from "three";

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

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color("#21282a"), 1);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  camera.position.z = 3;

  // Objects
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

  const particlesGeometry = new THREE.BufferGeometry();

  const count = 5000;

  const posArray = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  // Materials

  const material = new THREE.PointsMaterial({
    size: 0.005,
  });

  // Mesh
  const sphere = new THREE.Points(geometry, material);
  const particlesMesh = new THREE.Points(particlesGeometry, material);

  scene.add(sphere, particlesMesh);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  document.addEventListener("mousemove", animateParticle);

  let mouseX = 0;
  let mouseY = 0;

  function animateParticle(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  const clock = new THREE.Clock();

  render();

  function render() {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.rotation.y = 0.5 * elapsedTime;

    if (mouseX > 0) {
      particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00008);
      particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
    }

    renderer.render(scene, camera);

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

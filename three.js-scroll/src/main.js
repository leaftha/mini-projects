import * as THREE from "three";
import * as dat from "dat.gui";
import gsap from "gsap";

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

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;

  const img = [
    "angkor-thom-8096092",
    "bee-7963186",
    "mountain-8117525",
    "waterfall-7962263",
  ];

  const textureLoader = new THREE.TextureLoader();

  const geometry = new THREE.PlaneGeometry(1, 1.3);

  for (let i = 0; i < img.length; i++) {
    const material = new THREE.MeshBasicMaterial({
      map: textureLoader.load(`./img/${img[i]}.jpg`),
    });

    const image = new THREE.Mesh(geometry, material);
    image.position.set(Math.random(), i * -1.8);

    scene.add(image);
  }

  let objs = [];

  scene.traverse((object) => {
    if (object.isMesh) {
      objs.push(object);
    }
  });

  console.log(objs);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  const gui = new dat.GUI();

  //mouse

  window.addEventListener("wheel", onMouseWheel);

  let y = 0;
  let position = 0;

  function onMouseWheel(e) {
    y = e.deltaY * 0.0007 * -1;
  }

  const mouse = new THREE.Vector2();

  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  });

  const raycaster = new THREE.Raycaster();

  const clock = new THREE.Clock();

  render();

  function render() {
    const elapsedTime = clock.getElapsedTime();

    position += y;

    y *= 0.9;

    raycaster.setFromCamera(mouse, camera);

    camera.position.y = position;

    renderer.render(scene, camera);
    const intersects = raycaster.intersectObjects(objs);

    for (const intersect of intersects) {
      gsap.to(intersect.object.scale, { x: 1.7, y: 1.7 });
      gsap.to(intersect.object.rotation, { y: -0.5 });
      gsap.to(intersect.object.position, { z: -0.9 });
    }

    for (const object of objs) {
      if (!intersects.find((intersect) => intersect.object === object)) {
        gsap.to(object.scale, { x: 1, y: 1 });
        gsap.to(object.rotation, { y: 0 });
        gsap.to(object.position, { z: 0 });
      }
    }

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

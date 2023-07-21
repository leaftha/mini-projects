import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'lil-gui';

window.addEventListener('load', () => {
    init();
});

function init() {
    const gui = new GUI();
    const renderer = new THREE.WebGL1Renderer({
        antialias: true,
        alpha: true,
    });

    const Colors = ['#393E46', '#00ADB5', '#EEEEEE', '#FFC7C7', '#4A55A2', '#3F2305'];

    document.body.appendChild(renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.5;
    controls.rotateSpeed = 0.75;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 2 - Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 2 + Math.PI / 3;

    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const boxMaterial = new THREE.MeshLambertMaterial({ color: Colors[0] });

    const cube = new THREE.Mesh(boxGeometry, boxMaterial);

    cube.rotation.set(2, 2, 3);

    gui.add(cube.rotation, 'x').min(-100).max(100).step(1);
    gui.add(cube.rotation, 'y').min(-100).max(100).step(1);
    gui.add(cube.rotation, 'z').min(-100).max(100).step(1);

    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    directionalLight.position.set(3, 2, 2);

    // gui.add(directionalLight.position, 'x').min(-100).max(100).step(1);
    // gui.add(directionalLight.position, 'y').min(-100).max(100).step(1);
    // gui.add(directionalLight.position, 'z').min(-100).max(100).step(1);

    scene.add(directionalLight);

    render();

    function render() {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(render);
    }

    function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', handleResize);

    const container = document.querySelector('.container');

    Colors.forEach((color) => {
        const btn = document.createElement('button');

        btn.style.backgroundColor = color;

        btn.addEventListener('click', () => {
            console.log(color);
            cube.material.color = new THREE.Color(color);
        });

        container.appendChild(btn);
    });
}

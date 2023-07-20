import * as THREE from 'three';

window.addEventListener('load', () => {
    init();
});

function init() {
    const renderer = new THREE.WebGL1Renderer({
        antialias: true,
    });

    document.body.appendChild(renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);

    camera.position.z = 5;

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    const cube = new THREE.Mesh(boxGeometry, boxMaterial);

    scene.add(cube);

    render();

    function render() {
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', handleResize);
}

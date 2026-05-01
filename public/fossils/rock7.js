

import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 50;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 10;

const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

const controls = new OrbitControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

const loader = new GLTFLoader();

let rock;
let size = 60;

loader.load('assets/rock7.glb', (gltf) => {
    rock = gltf.scene;
    rock.scale.set(size, size, size);
    rock.position.set(0, 0, 0);
    rock.rotateX(0.5)
    scene.add(rock);

});

function animate() {
    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    // lets rotate the shapes each frame
    controls.update();

    rock.rotateY(0.01)
    renderer.setSize(window.innerWidth, window.innerHeight)

    renderer.render(scene, camera);

}

animate();

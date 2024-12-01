

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

camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

let rock1;
let rock2;
let rock3;
let rock4;
let rock5;
let rock6;
let rock7;
let rock8;

let size = 20;

loader.load('/rock1.glb', (gltf) => {
    rock1 = gltf.scene;
    rock1.scale.set(size, size, size);
    rock1.position.set(-1, 0, 0);
    scene.add(rock1);

});

loader.load('/rock2.glb', (gltf) => {
    rock2 = gltf.scene;
    rock2.scale.set(size, size, size);
    rock2.position.set(-1, -1, 0);

    scene.add(rock2);

});

loader.load('/rock3.glb', (gltf) => {
    rock3 = gltf.scene;
    rock3.scale.set(size, size, size);
    rock3.position.set(-1, -1, -2);

    scene.add(rock3);

});

loader.load('/rock4.glb', (gltf) => {
    rock4 = gltf.scene;
    rock4.scale.set(size, size, size);
    rock4.position.set(-1, -2, -1);
    scene.add(rock4);

});
loader.load('/rock5.glb', (gltf) => {
    rock5 = gltf.scene;
    rock5.scale.set(size, size, size);
    rock5.position.set(-2, 5, -1);
    scene.add(rock5);

});

loader.load('/rock6.glb', (gltf) => {
    rock6 = gltf.scene;
    rock6.scale.set(size, size, size);
    rock6.position.set(-5, 4, -5);
    scene.add(rock6);
});



// const shapes = [];

// const createShape = function (x, y) {
//     const objs = [
//         rock1,
//         rock2,
//         rock3,
//         rock4,
//         rock5,
//         rock6
//     ]
//     const randNumber = Math.floor(Math.random() * objs.length)
//     const shape = objs[randNumber].clone()
//     shape.position.set(
//         (window.innerWidth / 2) - x,
//         (window.innerHeight / 2) - y,
//         camera.position.z + 100)

//     // lets add it to the scene and the list of shapes
//     shapes.push(shape)
//     scene.add(shape)
// }

document.addEventListener("mousedown", function (event) {
    // createShape(event.pageX, event.pageY);
    console.log("CLICKED")
})




function animate() {
    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    // lets rotate the shapes each frame
    let rocks = [
        rock1,
        rock2,
        rock3,
        rock4,
        rock5,
        rock6
    ]

    rocks.forEach(x => {
        // x.rotateX(-0.005)
        x.rotateY(0.01)
    })

    renderer.render(scene, camera);

}

animate();

document.addEventListener("mousedown", function (event) {
    // createShape(event.pageX, event.pageY)
})

document.addEventListener("touchstart", function (event) {
    // createShape(event.pageX, event.pageY)
})

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})


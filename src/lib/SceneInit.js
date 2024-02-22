import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
	constructor(canvasId) {
		// NOTE: Core components to initialize Three.js app.
		this.scene = undefined;
		this.camera = undefined;
		this.renderer = undefined;

		// NOTE: Camera params;
		this.fov = 45;
		this.nearPlane = 1;
		this.farPlane = 1000;
		this.canvasId = canvasId;

		// NOTE: Additional components.
		this.clock = undefined;
		this.stats = undefined;
		this.controls = undefined;

		// NOTE: Lighting is basically required.
		this.ambientLight = undefined;
		this.directionalLight = undefined;
	}

	initialize() {
		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(
			this.fov,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		this.camera.position.z = 45;
		this.camera.position.x = 45;
		this.camera.position.y = 20;

		const canvas = document.getElementById(this.canvasId);
		this.renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
		});
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.shadowMap.enabled = true;
		document.body.appendChild(this.renderer.domElement);

		this.clock = new THREE.Clock();
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.stats = Stats();
		document.body.appendChild(this.stats.dom);

		// this.ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
		// this.ambientLight.castShadow = true;
		// this.scene.add(this.ambientLight);

		// directional light - parallel sun rays
		// this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		// this.directionalLight.castShadow = true;
		// this.directionalLight.position.set(0, 32, 64);
		// this.scene.add(this.directionalLight)
	}

	animate() {
		window.requestAnimationFrame(this.animate.bind(this));
		this.render();
		this.stats.update();
		this.controls.update();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}
}

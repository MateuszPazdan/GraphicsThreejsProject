import { useEffect } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import { GUI } from 'dat.gui';
import SceneInit from './lib/SceneInit';
import { environment } from './lib/room';
import {
	ambientLight,
	directionalLight,
	lamps,
	reflector,
} from './lib/lightning';
import { animation1 } from './lib/animation1';
import { animation2 } from './lib/animation2';
import { cartoon } from './lib/cartoon';
import { conveyor1 } from './lib/conveyor1';
import { robotTwo } from './lib/robotTwo';
import { robotOne } from './lib/robotOne';
import { mirror } from './lib/mirror';

function App() {
	useEffect(() => {
		const test = new SceneInit('myThreeJsCanvas');
		test.initialize();
		test.animate();
		const loader = new OBJLoader();
		// const axesHelper = new THREE.AxesHelper(16);
		// test.scene.add(axesHelper);

		//MIRROR
		const mirrorBox = mirror(50, 20);
		mirrorBox.rotation.y = Math.PI / 2;
		mirrorBox.position.x = -49.5;
		mirrorBox.position.y = 15;
		test.scene.add(mirrorBox);

		//OSWIETLENIE___________________________________________________________
		//ambient
		const oswietlenieAmbient = ambientLight(test);
		// kierunkowe
		const oswietlenieKierunkowe = directionalLight(test);
		// reflektor
		const { sl, pl } = reflector(test);
		// swiatla
		const { swiatla1, swiatla2, swiatla3, swiatla4 } = lamps(test);

		//GUI______________________________________________________
		const gui = new GUI();
		const animationState = {
			isPlaying: false,
			isFirst: true,
			playAnimation: function () {
				if (!animationState.isPlaying && this.isFirst) {
					animationState.isPlaying = true;
					animationState.isFirst = false;
					tween1.start();
					tween11.onComplete(() => {
						animationState.isPlaying = false;
					});
				}
				if (!animationState.isPlaying && !this.isFirst) {
					animationState.isPlaying = true;
					reverse1.start();
					reverse12.onComplete(() => {
						this.isFirst = true;
						animationState.isPlaying = false;
					});
				}
			},
		};

		// animacje
		const animacjeFolder = gui.addFolder('Animacje');
		animacjeFolder
			.add(animationState, 'playAnimation')
			.name('wywolaj animacje');

		// kamery
		const kameraFolder = gui.addFolder('Kamery');
		kameraFolder
			.add(
				{
					toggleCamera: () => {
						test.camera.position.x = 45;
						test.camera.position.z = 45;
					},
				},
				'toggleCamera'
			)
			.name('kamera1');
		kameraFolder
			.add(
				{
					toggleCamera: () => {
						test.camera.position.x = -45;
						test.camera.position.z = 45;
					},
				},
				'toggleCamera'
			)
			.name('kamera2');
		kameraFolder
			.add(
				{
					toggleCamera: () => {
						test.camera.position.x = 45;
						test.camera.position.z = -45;
					},
				},
				'toggleCamera'
			)
			.name('kamera3');
		kameraFolder
			.add(
				{
					toggleCamera: () => {
						test.camera.position.x = -45;
						test.camera.position.z = -45;
					},
				},
				'toggleCamera'
			)
			.name('kamera4');

		// oswietlenie
		const oswietlenieFolder = gui.addFolder('Oswietlenie');
		const ambientFolder = oswietlenieFolder.addFolder('ambient');
		const ustawieniaAmbient = { color: oswietlenieAmbient.color.getHex() };
		ambientFolder.add(oswietlenieAmbient, 'visible');
		ambientFolder.add(oswietlenieAmbient, 'intensity', 0, 1, 0.1);
		ambientFolder
			.addColor(ustawieniaAmbient, 'color')
			.onChange((value) => oswietlenieAmbient.color.set(value));

		const KierunkoweFolder = oswietlenieFolder.addFolder(
			'oswietlenie kierunkowe'
		);
		const ustawieniaKierunkowe = {
			visible: true,
			color: oswietlenieKierunkowe.color.getHex(),
		};
		KierunkoweFolder.add(oswietlenieKierunkowe, 'visible');
		KierunkoweFolder.add(oswietlenieKierunkowe, 'intensity', 0, 1, 0.1);
		KierunkoweFolder.add(oswietlenieKierunkowe, 'castShadow');
		KierunkoweFolder.addColor(ustawieniaKierunkowe, 'color').onChange((value) =>
			oswietlenieKierunkowe.color.set(value)
		);
		const reflektorFolder = oswietlenieFolder.addFolder('reflektor');
		reflektorFolder
			.add(
				{
					toggleLights: () => {
						sl.visible = !sl.visible;
						pl.visible = !pl.visible;
					},
				},
				'toggleLights'
			)
			.name('wlacz/wylacz');

		const swiatlaFolder = oswietlenieFolder.addFolder('lampy');
		swiatlaFolder
			.add(
				{
					toggleLights: () => {
						swiatla1.visible = !swiatla1.visible;
						swiatla2.visible = !swiatla2.visible;
						swiatla3.visible = !swiatla3.visible;
						swiatla4.visible = !swiatla4.visible;
					},
				},
				'toggleLights'
			)
			.name('wlacz/wylacz');

		//OTOCZENIE________________________________________________________________
		const texture = new THREE.TextureLoader().load('./assets/metal.jpg');
		const otoczenie = environment(loader);
		test.scene.add(otoczenie);

		//TASMOCIAG______________________________________________________________
		const textureMetalTasmociag = new THREE.TextureLoader().load(
			'./assets/metalTasmociag.jpg'
		);
		const { tasmociag, textureTasma, tamsociagMaterial } = conveyor1(
			textureMetalTasmociag,
			loader
		);
		test.scene.add(tasmociag);

		//ROBOTY________________________________________________________
		const robotMaterial = new THREE.MeshStandardMaterial({
			map: texture,
			roughness: 0.2,
			metalness: 0,
			fog: false,
			receiveShadow: true,
			castShadow: true,
		});
		//ROBOT 1
		const { robot, osObrotuWiezy, osObrotuRamienia, chwytak } = robotOne(
			robotMaterial,
			loader
		);
		test.scene.add(robot);

		//ROBOT 2
		const {
			robot2,
			textureTasma2,
			ramie1Robot2,
			ramie2Robot2,
			chwytakRobot2,
			cialoRobot2,
		} = robotTwo(loader, tamsociagMaterial, robotMaterial);
		test.scene.add(robot2);

		//KARTON
		const karton = cartoon();
		test.scene.add(karton);

		//ANIMACJE______________________________________________________
		const animate = (t) => {
			TWEEN.update(t);
			window.requestAnimationFrame(animate);
		};
		animate();

		const { tween1, tween11 } = animation1(
			test,
			osObrotuWiezy,
			osObrotuRamienia,
			chwytak,
			karton,
			tasmociag,
			textureTasma,
			textureTasma2,
			ramie1Robot2,
			ramie2Robot2,
			chwytakRobot2,
			cialoRobot2
		);
		const { reverse1, reverse12 } = animation2(
			test,
			osObrotuWiezy,
			osObrotuRamienia,
			chwytak,
			karton,
			tasmociag,
			textureTasma,
			textureTasma2,
			ramie1Robot2,
			ramie2Robot2,
			chwytakRobot2,
			cialoRobot2
		);

		return () => {
			gui.destroy();
		};
	}, []);

	return (
		<div>
			<canvas id='myThreeJsCanvas' />
		</div>
	);
}

export default App;

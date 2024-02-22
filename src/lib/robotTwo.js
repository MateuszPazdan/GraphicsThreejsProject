import * as THREE from 'three';
export function robotTwo(loader, tamsociagMaterial, robotMaterial) {
	const robot2 = new THREE.Group();
	robot2.position.x = -9;
	robot2.position.z = -22;
	robot2.position.y = 1.2;

	// podstawa
	const podstawaRobot2 = new THREE.Group();
	podstawaRobot2.position.y = -8;
	robot2.add(podstawaRobot2);

	loader.load('./stolik.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = tamsociagMaterial;
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		object.scale.set(0.2, 0.1, 0.1);
		podstawaRobot2.add(object);
	});
	const textureTasma2 = new THREE.TextureLoader().load('./test.jpg');
	textureTasma2.wrapS = THREE.RepeatWrapping;
	textureTasma2.wrapT = THREE.RepeatWrapping;
	textureTasma2.repeat.set(1, 5);
	const tasmaKsztalt2 = new THREE.PlaneGeometry(10, 42.5);
	tasmaKsztalt2.rotateX(Math.PI / 2);
	const tasmaMaterial2 = new THREE.MeshStandardMaterial({
		map: textureTasma2,
		side: THREE.DoubleSide,
	});
	const tasma2Mesh = new THREE.Mesh(tasmaKsztalt2, tasmaMaterial2);

	tasma2Mesh.castShadow = true;
	tasma2Mesh.receiveShadow = true;
	tasma2Mesh.position.x = 14.9;
	tasma2Mesh.position.y = 8.5;
	tasma2Mesh.rotation.y = Math.PI / 2;
	podstawaRobot2.add(tasma2Mesh);

	const cialoRobot2 = new THREE.Group();
	cialoRobot2.position.z = 1;
	robot2.add(cialoRobot2);
	loader.load('./robot2.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = robotMaterial;
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		object.scale.set(0.05, 0.05, 0.05);
		cialoRobot2.add(object);
	});

	const os1Robot2 = new THREE.Group();
	os1Robot2.position.y = 13;
	cialoRobot2.add(os1Robot2);

	//ramie1
	const ramie1Robot2 = new THREE.Group();
	os1Robot2.add(ramie1Robot2);

	loader.load('./ramieRobot2.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = robotMaterial;
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		object.scale.set(0.1, 0.1, 0.1);
		ramie1Robot2.add(object);
	});

	const os2Robot2 = new THREE.Group();
	os2Robot2.position.y = 8.2;
	ramie1Robot2.add(os2Robot2);

	const ramie2Robot2 = new THREE.Group();
	os2Robot2.add(ramie2Robot2);

	loader.load('./ramieRobot2.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = robotMaterial;
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		object.scale.set(0.1, 0.1, 0.1);
		ramie2Robot2.add(object);
	});
	ramie2Robot2.rotation.x = Math.PI / 2;

	const chwytakRobot2 = new THREE.Group();
	ramie2Robot2.add(chwytakRobot2);
	loader.load('./chwytak.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = robotMaterial;
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		object.rotation.x = Math.PI;
		object.position.y = 10;
		object.scale.set(0.05, 0.07, 0.05);
		chwytakRobot2.add(object);
	});
	return {
		robot2,
		textureTasma2,
		ramie1Robot2,
		ramie2Robot2,
		chwytakRobot2,
		cialoRobot2,
	};
}

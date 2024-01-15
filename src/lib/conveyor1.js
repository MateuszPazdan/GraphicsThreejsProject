import * as THREE from 'three';
export function conveyor1(textureMetalTasmociag, loader) {
	const tasmociag = new THREE.Group();
	tasmociag.position.x = -9;
	tasmociag.position.y = -9;
	tasmociag.position.z = 23;
	tasmociag.rotation.y = Math.PI / 2;
	const tamsociagMaterial = new THREE.MeshStandardMaterial({
		map: textureMetalTasmociag,
	});
	// podstawa tasmociagu
	loader.load('./stolik.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = tamsociagMaterial;
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
		object.scale.set(0.2, 0.1, 0.1);
		object.position.x = 4;
		object.position.y = 3;
		tasmociag.add(object);
	});
	// tasma
	const textureTasma = new THREE.TextureLoader().load('./assets/test.jpg');
	textureTasma.wrapS = THREE.RepeatWrapping;
	textureTasma.wrapT = THREE.RepeatWrapping;
	textureTasma.repeat.set(1, 5);
	const tasmaKsztalt = new THREE.PlaneGeometry(10, 42.5);
	tasmaKsztalt.rotateX(Math.PI / 2);
	const tasmaMaterial = new THREE.MeshPhongMaterial({
		map: textureTasma,
		side: THREE.DoubleSide,
	});
	const tasmaMesh = new THREE.Mesh(tasmaKsztalt, tasmaMaterial);
	tasmaMesh.receiveShadow = true;
	tasmaMesh.castShadow = true;
	tasmaMesh.position.y = 11.5;
	tasmaMesh.position.x = 18.9;
	tasmaMesh.rotation.y = Math.PI / 2;
	tasmociag.add(tasmaMesh);

	return {tasmociag, tamsociagMaterial, textureTasma};
}

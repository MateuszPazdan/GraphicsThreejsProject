import * as THREE from 'three';
import { mainDoor } from './mainDoor';
export function environment(loader) {
	const otoczenie = new THREE.Group();

	const textureFloor = new THREE.TextureLoader().load('./assets/podloga.jpg');
	textureFloor.wrapT = THREE.RepeatWrapping;
	textureFloor.wrapS = THREE.RepeatWrapping;
	textureFloor.repeat.set(4, 4);
	const textureWall = new THREE.TextureLoader().load('./assets/sciana.jpg');
    const texture = new THREE.TextureLoader().load('./assets/metal.jpg');
    const materialLamp = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0,
        fog: false,
        receiveShadow: true,
        castShadow: true,
    });

	// podloga
	const podlogaKsztalt = new THREE.PlaneGeometry(100, 100);
	podlogaKsztalt.rotateX(-Math.PI / 2);
	const podlogaMaterial = new THREE.MeshPhongMaterial({
		map: textureFloor,
		side: THREE.DoubleSide,
	});
	const podlogaMesh = new THREE.Mesh(podlogaKsztalt, podlogaMaterial);
	podlogaMesh.receiveShadow = true;
	// sciany
	const scianaKsztalt = new THREE.PlaneGeometry(100, 30);
	const scianaMaterial = new THREE.MeshPhongMaterial({
		map: textureWall,
		castShadow: true,
	});
	const sciana1Mesh = new THREE.Mesh(scianaKsztalt, scianaMaterial);
	sciana1Mesh.receiveShadow = true;
	sciana1Mesh.position.y = 15;
	sciana1Mesh.position.z = -50;
	const sciana2Mesh = new THREE.Mesh(scianaKsztalt, scianaMaterial);
	sciana2Mesh.receiveShadow = true;
	sciana2Mesh.position.y = 15;
	sciana2Mesh.position.z = 50;
	sciana2Mesh.rotation.y = Math.PI;
	const sciana3Mesh = new THREE.Mesh(scianaKsztalt, scianaMaterial);
	sciana3Mesh.receiveShadow = true;
	sciana3Mesh.position.y = 15;
	sciana3Mesh.position.x = 50;
	sciana3Mesh.rotation.y = -Math.PI / 2;
	const sciana4Mesh = new THREE.Mesh(scianaKsztalt, scianaMaterial);
	sciana4Mesh.receiveShadow = true;
	sciana4Mesh.position.y = 15;
	sciana4Mesh.position.x = -50;
	sciana4Mesh.rotation.y = Math.PI / 2;

	//drzwi
	const drzwi = new THREE.Group();
	otoczenie.add(drzwi);
	drzwi.add(mainDoor());
	drzwi.position.y = 13;
	drzwi.position.z = -49.5;

	//reflektor
	loader.load('./reflektor.obj', (object) => {
		object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material = materialLamp;
				child.receiveShadow = true;
				child.castShadow = true;
			}
		});
		object.scale.set(0.03, 0.03, 0.03);
		object.position.y = 20;
		object.position.z = 49.5;
		object.rotateY(Math.PI / 2);
		otoczenie.add(object);
	});

	otoczenie.add(podlogaMesh);
	otoczenie.add(sciana1Mesh);
	otoczenie.add(sciana2Mesh);
	otoczenie.add(sciana3Mesh);
	otoczenie.add(sciana4Mesh);
	return otoczenie;
}

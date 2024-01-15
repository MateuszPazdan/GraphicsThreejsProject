import * as THREE from 'three';
export function cartoon() {
	const textureKarton = new THREE.TextureLoader().load('./assets/karton.jpg');
	const karton = new THREE.Group();
	karton.position.x = -19.3;
	karton.position.y = 1;
	karton.position.z = 33.5;
	const kartonKsztalt = new THREE.BoxGeometry(5, 2, 5);
	const kartonMaterial = new THREE.MeshPhongMaterial({
		map: textureKarton,
	});
	const kartonMesh = new THREE.Mesh(kartonKsztalt, kartonMaterial);
	karton.add(kartonMesh);
	kartonMesh.castShadow = true;
	kartonMesh.receiveShadow = true;
	return karton;
}

import * as THREE from 'three';
export function mainDoor() {
	const mainDoor = new THREE.Group();
	const textureBrama = new THREE.TextureLoader().load('./brama.jpg');
	const materialBrama = new THREE.MeshStandardMaterial({
		map: textureBrama,
		side: THREE.FrontSide,
	});
	const shapeBrama = new THREE.PlaneGeometry(40, 25);
	const meshBrama = new THREE.Mesh(shapeBrama, materialBrama);
	meshBrama.receiveShadow = true;
	mainDoor.add(meshBrama);

	const textureRama = new THREE.TextureLoader().load('./metal.jpg');
	const materialRama = new THREE.MeshStandardMaterial({
		map: textureRama,
		side: THREE.DoubleSide,
	});
	const shapeRama = new THREE.BoxGeometry(1, 25, 1);
	const meshRama1 = new THREE.Mesh(shapeRama, materialRama);
	meshRama1.position.x = 20;
    meshRama1.receiveShadow = true;
	mainDoor.add(meshRama1);
	const meshRama2 = new THREE.Mesh(shapeRama, materialRama);
	meshRama2.position.x = -20;
    meshRama2.receiveShadow = true;
	mainDoor.add(meshRama2);

	const shapeRama2 = new THREE.BoxGeometry(41, 1, 1);
	const meshRama3 = new THREE.Mesh(shapeRama2, materialRama);
	meshRama3.position.y = 12;
    meshRama3.receiveShadow = true;
	mainDoor.add(meshRama3);
	

	return mainDoor;
}

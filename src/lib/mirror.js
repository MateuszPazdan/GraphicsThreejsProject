import * as THREE from 'three';
import { Reflector } from './Reflector';

export function mirror(width,height) {
	const mirrorBox = new THREE.Group();
	const mirrorOptions = {
		clipBias: 0.0,
		textureWidth: window.innerWidth * window.devicePixelRatio,
		textureHeight: window.innerHeight * window.devicePixelRatio,
		color: 0x808080,
		multisample: 4,
	};
	const mirrorGeometry = new THREE.PlaneGeometry(width, height);
	const mirror = new Reflector(mirrorGeometry, mirrorOptions);
	mirrorBox.add(mirror);

    const textureRama = new THREE.TextureLoader().load('./assets/metal.jpg');
	const materialRama = new THREE.MeshStandardMaterial({
		map: textureRama,
		side: THREE.DoubleSide,
	});
	const shapeRama = new THREE.BoxGeometry(width+1, 1, 1);
	const meshRama1 = new THREE.Mesh(shapeRama, materialRama);
	meshRama1.position.y = height/2;
    meshRama1.receiveShadow = true;
	mirrorBox.add(meshRama1);
    const meshRama2 = new THREE.Mesh(shapeRama, materialRama);
	meshRama2.position.y = -height/2;
    meshRama2.receiveShadow = true;
	mirrorBox.add(meshRama2);
    const shapeRama2 = new THREE.BoxGeometry(1, height, 1);
    const meshRama3 = new THREE.Mesh(shapeRama2, materialRama);
    meshRama3.position.x = width/2;
    meshRama3.receiveShadow = true;
	mirrorBox.add(meshRama3);
    const meshRama4 = new THREE.Mesh(shapeRama2, materialRama);
    meshRama4.position.x = -width/2;
    meshRama4.receiveShadow = true;
	mirrorBox.add(meshRama4);

	return mirrorBox;
}

import * as THREE from 'three';
export function robotOne(robotMaterial, loader){
    const robot = new THREE.Group();
		robot.position.y = 0.3;
		robot.position.x = -25;
		robot.position.z = 20;
		const podstawa = new THREE.Group();
		robot.add(podstawa);

		//PODNOZKA
		const podnozkaKsztalt = new THREE.BoxGeometry(5, 0.5, 5);
		const podnozkaPodstawaMesh = new THREE.Mesh(podnozkaKsztalt, robotMaterial);
		podnozkaPodstawaMesh.castShadow = true;
		podnozkaPodstawaMesh.receiveShadow = true;
		podnozkaPodstawaMesh.position.y = 0;
		podstawa.add(podnozkaPodstawaMesh);
		//WALEC PODSTAWY
		const podstawaKsztalt = new THREE.CylinderGeometry(2, 2, 5, 32);
		const podstawaMesh = new THREE.Mesh(podstawaKsztalt, robotMaterial);
		podstawaMesh.castShadow = true;
		podstawaMesh.receiveShadow = true;
		podstawaMesh.position.y = 2.7;
		podstawa.add(podstawaMesh);
		//OSLONA PODSTAWA
		const oslonaKsztalt = new THREE.BoxGeometry(1, 4, 2);
		const oslonaMesh = new THREE.Mesh(oslonaKsztalt, robotMaterial);
		oslonaMesh.castShadow = true;
		oslonaMesh.receiveShadow = true;
		oslonaMesh.position.y = 2.2;
		oslonaMesh.position.x = 2;
		podstawa.add(oslonaMesh);

		const osObrotuWiezy = new THREE.Group();
		osObrotuWiezy.position.y = 2.2;
		robot.add(osObrotuWiezy);

		//pierwsze ramie
		loader.load('./pierwszeRamie.obj', (object) => {
			object.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material = robotMaterial;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			object.scale.set(0.05, 0.05, 0.05);
			object.position.x = 4;
			object.position.y = 3;
			osObrotuWiezy.add(object);
		});

		//drugie ramie
		const osObrotuRamienia = new THREE.Group();
		osObrotuWiezy.add(osObrotuRamienia);
		osObrotuRamienia.position.y = 4.5;
		osObrotuRamienia.position.x = 8;
		loader.load('./drugieRamie.obj', (object) => {
			object.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material = robotMaterial;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			object.position.x = 4;
			object.scale.set(0.05, 0.05, 0.05);
			osObrotuRamienia.add(object);
		});

		//chwytak
		const chwytak = new THREE.Group();
		chwytak.position.x = 4;
		chwytak.position.y = -1;
		osObrotuRamienia.add(chwytak);
		loader.load('./chwytak.obj', (object) => {
			object.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material = robotMaterial;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			object.position.x = 4;
			object.scale.set(0.05, 0.07, 0.05);
			chwytak.add(object);
		});

        return {robot,osObrotuWiezy,osObrotuRamienia,chwytak}
}
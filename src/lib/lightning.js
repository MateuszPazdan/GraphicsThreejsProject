import * as THREE from 'three';

export function ambientLight(test) {
	const oswietlenieAmbient = new THREE.AmbientLight(0xffffff, 0.1);
	test.scene.add(oswietlenieAmbient);
	return oswietlenieAmbient;
}

export function directionalLight(test) {
	const oswietlenieKierunkowe = new THREE.DirectionalLight(0xffffff, 0.1);
	oswietlenieKierunkowe.position.set(0, 28, 0);
	oswietlenieKierunkowe.shadow.camera.left = -50;
	oswietlenieKierunkowe.shadow.camera.right = 50;
	oswietlenieKierunkowe.shadow.camera.top = 50;
	oswietlenieKierunkowe.shadow.camera.bottom = -50;
	oswietlenieKierunkowe.castShadow = true;
	// const dlhelper = new THREE.DirectionalLightHelper(oswietlenieKierunkowe, 3);
	test.scene.add(oswietlenieKierunkowe);
	oswietlenieKierunkowe.visible = false;
	return oswietlenieKierunkowe;
}

export function reflector(test) {
	const sl = new THREE.SpotLight(0xffffff, 1000, 150, Math.PI / 8, 0);
	sl.position.set(0, 19, 47);
	sl.castShadow = true;
	// const slHelper = new THREE.SpotLightHelper(sl);
	test.scene.add(sl);
	const pl = new THREE.PointLight(0xffffff, 100, 3, 2);
	pl.position.set(0, 19, 46);
	// const plHelper = new THREE.PointLightHelper(pl, 0.5);
	test.scene.add(pl);
	sl.visible = false;
	pl.visible = false;
	return { sl, pl };
}

export function lamps(test) {
	const swiatla1 = new THREE.PointLight(0xffffff, 1000, 60, 2);
	swiatla1.position.set(20, 30, 20);
	swiatla1.castShadow = true;
	const plHelper1 = new THREE.PointLightHelper(swiatla1, 0.5);
	test.scene.add(swiatla1, plHelper1);
	const swiatla2 = new THREE.PointLight(0xffffff, 1000, 60, 2);
	swiatla2.position.set(-20, 30, 20);
	swiatla2.castShadow = true;
	const plHelper2 = new THREE.PointLightHelper(swiatla2, 0.5);
	test.scene.add(swiatla2, plHelper2);
	const swiatla3 = new THREE.PointLight(0xffffff, 1000, 60, 2);
	swiatla3.position.set(20, 30, -20);
	swiatla3.castShadow = true;
	const plHelper3 = new THREE.PointLightHelper(swiatla3, 0.5);
	test.scene.add(swiatla3, plHelper3);
	const swiatla4 = new THREE.PointLight(0xffffff, 1000, 60, 2);
	swiatla4.position.set(-20, 30, -20);
	swiatla4.castShadow = true;
	const plHelper4 = new THREE.PointLightHelper(swiatla4, 0.5);
	test.scene.add(swiatla4, plHelper4);
	return { swiatla1, swiatla2, swiatla3, swiatla4 };
}

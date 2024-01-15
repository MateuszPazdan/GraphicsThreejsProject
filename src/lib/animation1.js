import * as TWEEN from '@tweenjs/tween.js';

export function animation1(test, osObrotuWiezy,osObrotuRamienia,chwytak,karton,tasmociag,textureTasma,textureTasma2,ramie1Robot2,ramie2Robot2,chwytakRobot2,cialoRobot2){
    const tween1 = new TWEEN.Tween({ yRotation: 0 })
			.to({ yRotation: -Math.PI / 4 }, 2000)
			.onUpdate((coords) => {
				osObrotuWiezy.rotation.y = coords.yRotation;
				osObrotuRamienia.rotation.y = coords.yRotation;
			})
			.delay(1000);

		const tween2 = new TWEEN.Tween({ y: -1 })
			.to({ y: -4.9 }, 1800)
			.onUpdate((coords) => {
				chwytak.position.y = coords.y;
			});

		const tweenKarton1 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
			test.scene.remove(karton);
			karton.position.x = 4;
			karton.position.y = -1;
			karton.position.z = 0;
			chwytak.add(karton);
		});

		const tween3 = new TWEEN.Tween({ y: -4.9 })
			.to({ y: -1 }, 1000)
			.onUpdate((coords) => {
				chwytak.position.y = coords.y;
			});
		const tween4 = new TWEEN.Tween({ yRotation: -Math.PI / 4 })
			.to({ yRotation: 0 }, 2000)
			.onUpdate((coords) => {
				osObrotuWiezy.rotation.y = coords.yRotation;
				osObrotuRamienia.rotation.y = coords.yRotation;
			});
		const tween5 = new TWEEN.Tween({ y: -1 })
			.to({ y: -2.5 }, 1000)
			.onUpdate((coords) => {
				chwytak.position.y = coords.y;
			});
		const tweenKarton2 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
			chwytak.remove(karton);
			karton.position.x = 3;
			karton.position.y = 12.5;
			karton.position.z = 0;
			tasmociag.add(karton);
		});
		const tween6 = new TWEEN.Tween({ y: -2.5 })
			.to({ y: -1 }, 1000)
			.onUpdate((coords) => {
				chwytak.position.y = coords.y;
			});
		const tweenKarton3 = new TWEEN.Tween({ x: 3 })
			.to({ x: 35 }, 3000)
			.onUpdate((coords) => {
				karton.position.x = coords.x;
				textureTasma.offset.y -= 0.015;
			});
		const tween7 = new TWEEN.Tween({ ramie1: 0, ramie2: Math.PI / 2 })
			.to({ ramie1: (9.7 * Math.PI) / 20, ramie2: (10.3 * Math.PI) / 20 }, 2000)
			.onUpdate((coords) => {
				ramie1Robot2.rotation.x = coords.ramie1;
				ramie2Robot2.rotation.x = coords.ramie2;
			});
		const tweenKarton4 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
			tasmociag.remove(karton);
			karton.position.x = 0;
			karton.position.y = 11.1;
			karton.position.z = -0.8;
			chwytakRobot2.add(karton);
		});
		const tween8 = new TWEEN.Tween({
			ramie1: (9.7 * Math.PI) / 20,
			ramie2: (10.3 * Math.PI) / 20,
		})
			.to({ ramie1: Math.PI / 4, ramie2: Math.PI / 2 }, 2000)
			.onUpdate((coords) => {
				ramie1Robot2.rotation.x = coords.ramie1;
				ramie2Robot2.rotation.x = coords.ramie2;
			});
		const tween9 = new TWEEN.Tween({ x: 0 })
			.to({ x: 30 }, 3000)
			.onUpdate((coords) => {
				cialoRobot2.position.x = coords.x;
				textureTasma2.offset.y -= 0.015;
			});
		const tween10 = new TWEEN.Tween({
			ramie1: Math.PI / 4,
			ramie2: Math.PI / 2,
		})
			.to({ ramie1: (11.6 * Math.PI) / 20, ramie2: (8.4 * Math.PI) / 20 }, 1000)
			.onUpdate((coords) => {
				ramie1Robot2.rotation.x = coords.ramie1;
				ramie2Robot2.rotation.x = coords.ramie2;
			});
		const tweenKarton5 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
			chwytakRobot2.remove(karton);
			karton.position.x = 21;
			karton.position.y = 1;
			karton.position.z = -12;
			test.scene.add(karton);
		});
		const tween11 = new TWEEN.Tween({
			ramie1: (11.6 * Math.PI) / 20,
			ramie2: (8.4 * Math.PI) / 20,
		})
			.to({ ramie1: Math.PI / 4, ramie2: Math.PI / 2 }, 1000)
			.onUpdate((coords) => {
				ramie1Robot2.rotation.x = coords.ramie1;
				ramie2Robot2.rotation.x = coords.ramie2;
			});

		tween1.chain(tween2);
		tween2.chain(tweenKarton1);
		tweenKarton1.chain(tween3);
		tween3.chain(tween4);
		tween4.chain(tween5);
		tween5.chain(tweenKarton2);
		tweenKarton2.chain(tween6);
		tween6.chain(tweenKarton3);
		tweenKarton3.chain(tween7);
		tween7.chain(tweenKarton4);
		tweenKarton4.chain(tween8);
		tween8.chain(tween9);
		tween9.chain(tween10);
		tween10.chain(tweenKarton5);
		tweenKarton5.chain(tween11);

        return {tween1,tween11}
}
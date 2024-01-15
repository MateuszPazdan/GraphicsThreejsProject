import * as TWEEN from '@tweenjs/tween.js';
export function animation2(test, osObrotuWiezy,osObrotuRamienia,chwytak,karton,tasmociag,textureTasma,textureTasma2,ramie1Robot2,ramie2Robot2,chwytakRobot2,cialoRobot2){
    const reverse1 = new TWEEN.Tween({
        ramie1: Math.PI / 4,
        ramie2: Math.PI / 2,
    })
        .to({ ramie1: (11.6 * Math.PI) / 20, ramie2: (8.4 * Math.PI) / 20 }, 1000)
        .onUpdate((coords) => {
            ramie1Robot2.rotation.x = coords.ramie1;
            ramie2Robot2.rotation.x = coords.ramie2;
        })
        .delay(1000);
    const kartonReverse1 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
        test.scene.remove(karton);
        karton.position.x = 0;
        karton.position.y = 11.1;
        karton.position.z = -0.8;
        chwytakRobot2.add(karton);
    });
    const reverse2 = new TWEEN.Tween({
        ramie1: (11.6 * Math.PI) / 20,
        ramie2: (8.4 * Math.PI) / 20,
    })
        .to({ ramie1: Math.PI / 4, ramie2: Math.PI / 2 }, 1000)
        .onUpdate((coords) => {
            ramie1Robot2.rotation.x = coords.ramie1;
            ramie2Robot2.rotation.x = coords.ramie2;
        });
    const reverse3 = new TWEEN.Tween({ x: 30 })
        .to({ x: 0 }, 3000)
        .onUpdate((coords) => {
            cialoRobot2.position.x = coords.x;
            textureTasma2.offset.y += 0.015;
        });
    const reverse4 = new TWEEN.Tween({
        ramie1: Math.PI / 4,
        ramie2: Math.PI / 2,
    })
        .to(
            {
                ramie1: (9.7 * Math.PI) / 20,
                ramie2: (10.3 * Math.PI) / 20,
            },
            1500
        )
        .onUpdate((coords) => {
            ramie1Robot2.rotation.x = coords.ramie1;
            ramie2Robot2.rotation.x = coords.ramie2;
        });
    const kartonReverse2 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
        chwytakRobot2.remove(karton);
        karton.position.x = 35;
        karton.position.y = 12.5;
        karton.position.z = 0;
        tasmociag.add(karton);
    });
    const reverse5 = new TWEEN.Tween({
        ramie1: (9.7 * Math.PI) / 20,
        ramie2: (10.3 * Math.PI) / 20,
    })
        .to({ ramie1: 0, ramie2: Math.PI / 2 }, 2000)
        .onUpdate((coords) => {
            ramie1Robot2.rotation.x = coords.ramie1;
            ramie2Robot2.rotation.x = coords.ramie2;
        });
    const reverse6 = new TWEEN.Tween({ x: 35 })
        .to({ x: 3 }, 3000)
        .onUpdate((coords) => {
            karton.position.x = coords.x;
            textureTasma.offset.y += 0.015;
        });
    const reverse7 = new TWEEN.Tween({ y: -1 })
        .to({ y: -2.5 }, 1000)
        .onUpdate((coords) => {
            chwytak.position.y = coords.y;
        });
    const kartonReverse3 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
        tasmociag.remove(karton);
        karton.position.x = 4;
        karton.position.y = -1;
        karton.position.z = 0;
        chwytak.add(karton);
    });
    const reverse8 = new TWEEN.Tween({ y: -2.5 })
        .to({ y: -1 }, 1000)
        .onUpdate((coords) => {
            chwytak.position.y = coords.y;
        });
    const reverse9 = new TWEEN.Tween({ yRotation: 0 })
        .to({ yRotation: -Math.PI / 4 }, 2000)
        .onUpdate((coords) => {
            osObrotuWiezy.rotation.y = coords.yRotation;
            osObrotuRamienia.rotation.y = coords.yRotation;
        });

    const reverse10 = new TWEEN.Tween({ y: -1 })
        .to({ y: -4.9 }, 1500)
        .onUpdate((coords) => {
            chwytak.position.y = coords.y;
        });
    const kartonReverse4 = new TWEEN.Tween().to({}, 100).onUpdate(() => {
        chwytak.remove(karton);
        karton.position.y = 1;
        karton.position.x = -19.3;
        karton.position.z = 33.5;
        test.scene.add(karton);
    });
    const reverse11 = new TWEEN.Tween({ y: -4.9 })
        .to({ y: -1 }, 1500)
        .onUpdate((coords) => {
            chwytak.position.y = coords.y;
        });
    const reverse12 = new TWEEN.Tween({ yRotation: -Math.PI / 4 })
        .to({ yRotation: 0 }, 2000)
        .onUpdate((coords) => {
            osObrotuWiezy.rotation.y = coords.yRotation;
            osObrotuRamienia.rotation.y = coords.yRotation;
        });

    reverse1.chain(kartonReverse1);
    kartonReverse1.chain(reverse2);
    reverse2.chain(reverse3);
    reverse3.chain(reverse4);
    reverse4.chain(kartonReverse2);
    kartonReverse2.chain(reverse5);
    reverse5.chain(reverse6);
    reverse6.chain(reverse7);
    reverse7.chain(kartonReverse3);
    kartonReverse3.chain(reverse8);
    reverse8.chain(reverse9);
    reverse9.chain(reverse10);
    reverse10.chain(kartonReverse4);
    kartonReverse4.chain(reverse11);
    reverse11.chain(reverse12);

    return {reverse1,reverse12}
}
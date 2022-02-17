import ShapeType from './ShapeType';
import aquarelle from "./assets/textures/aquarelle.jpg";
import basket from "./assets/textures/basket.jpg";
import bricks from "./assets/textures/bricks.jpg";
import carrelage from "./assets/textures/carrelage.jpg";
import chess from "./assets/textures/chess.jpg";
import danger from "./assets/textures/danger.jpg";
import danger2 from "./assets/textures/danger2.jpg";
import earth from "./assets/textures/earth.jpg";
import eye from "./assets/textures/eye.jpg";
import mario from "./assets/textures/mario.jpg";
import metal from "./assets/textures/metal.jpg";
import metal2 from "./assets/textures/metal2.jpg";
import moon from "./assets/textures/moon.jpg";
import sand from "./assets/textures/sand.jpg";
import sealedbox from "./assets/textures/sealedbox.jpg";
import stars from "./assets/textures/stars.jpg";
import wood from "./assets/textures/wood.jpg";

import woody from "./assets/textures/woody.jpg";

const getTexture = ( type, prez ) => {

    switch (type) {
        case ShapeType.SQUARE:
            return prez ? chess : aquarelle;
        case ShapeType.CUBE:
            return prez ? sealedbox : mario;
        case ShapeType.CIRCLE:
            return prez ? eye : moon;
        case ShapeType.SPHERE:
            return prez ? basket : earth;
        case ShapeType.CYLINDER:
            return prez ? metal : metal2;
        case ShapeType.TRIANGLE:
            return prez ? stars : wood;
        case ShapeType.CONE:
            return prez ? sand : carrelage;
        case ShapeType.PYRAMIDE:
            return prez ? woody : bricks;
    }
}

export default getTexture;
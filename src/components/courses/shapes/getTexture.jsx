import ShapeType from './ShapeType';
import aquarelle from "./assets/textures/aquarelle.jpg";
import bricks from "./assets/textures/bricks.jpg";
import carrelage from "./assets/textures/carrelage.jpg";
import chess from "./assets/textures/chess.jpg";
import earth from "./assets/textures/earth.jpg";
import earth2 from "./assets/textures/earth2.jpg";
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

const getTexture = ( type) => {

    switch (type) {
        case ShapeType.CUBE:
            return mario;
        case ShapeType.CIRCLE:
            return eye;
        case ShapeType.SPHERE:
            return earth2;
        case ShapeType.CYLINDER:
            return metal;
        case ShapeType.TRIANGLE:
            return stars ;
        case ShapeType.CONE:
            return sand;
        case ShapeType.PYRAMIDE:
            return woody;
    }
}

export default getTexture;
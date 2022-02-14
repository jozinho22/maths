import ShapeType from './ShapeType';

import marioBox from "./assets/marioBox.png";
import terra from "./assets/terra.jpeg";

const getTexture = ( type ) => {

    switch (type) {
        case ShapeType.SQUARE:
            return marioBox;
        case ShapeType.CUBE:
            return marioBox;
        case ShapeType.CIRCLE:
            return terra;
        case ShapeType.SPHERE:
            return terra;
    }
}

export default getTexture;
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import ImageZoom from '../../ImageZoom';

import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import squareVolCalculus from '../assets/squareVolCalculus.png';

const LeCarreLeCube = () => {

    var n = 0;
    var cVolume = "\\(V_{cube} = c^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var cDoubleVolume = "\\(V_{cube} = (2c)^3\\)";
    var cDoubleVolumeDev = "\\(V_{cube} = 8c^3\\)";

    var sCarre = "\\(S_{carre} = c^2\\)";
    var vCube = "\\(V_{cube(p)} = \\int_0^c c^2 dp\\)";
    var vCube2 = "\\(V_{cube(p)} = c^2 \\left[ p \\right]_0^c \\)";
    var vCube3 = "\\(V_{cube(p)} = c^2 (c - 0) \\)";
    var vCube4 = "\\(V_{cube(p)} = c^2 c \\)";
    var vCube5 = "\\(V_{cube(p)} = c^3 \\)";

    var sCube = "\\(S_{cube} = 6 c^2 \\)";

    return (
        <>
            <p>
                La formule du volume du cube est :
            </p> 
            <Container className="Focus">
                <MathJaxDisplay toShow={cVolume}/>
            </Container>
            <p>
                Si alors on double seulement le côté, le volume sera 8 fois plus grand.
            </p>
            <MathJaxDisplay toShow={rTo2r}/>
            <MathJaxDisplay toShow={cDoubleVolume}/>
            <MathJaxDisplay toShow={cDoubleVolumeDev}/>

            <p className="Title1">Calcul de la surface </p>
            <p>
                Étant donné que le cube est un volume, on obtient cinq carrés de plus.
                {"\n"}Un derrière et quatre sur les côtés, on a donc :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sCube}/>
            </Container>
        </>
    )
}

export default LeCarreLeCube;
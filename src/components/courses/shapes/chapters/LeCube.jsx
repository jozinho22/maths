import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import squareVolCalculus from '../assets/squareVolCalculus.png';

const LeCube = () => {

    var sqrVolume = "\\(V_{carre} = c^3\\)";
    var rTo2r = "\\(r \\to 2r\\)";
    var sqrDoubleVolume = "\\(V_{carre} = (2c)^3\\)";
    var sqrDoubleVolumeDev = "\\(V_{carre} = 8c^3\\)";

    var sCarre = "\\(S_{carre} = c^2\\)";
    var vCarre = "\\(V_{carre(p)} = \\int_0^c c^2 dp\\)";
    var vCarre2 = "\\(V_{carre(p)} = c^2 \\left[ p \\right]_0^c \\)";
    var vCarre3 = "\\(V_{carre(p)} = c^2 (c - 0) \\)";
    var vCarre4 = "\\(V_{carre(p)} = c^2 c \\)";
    var vCarre5 = "\\(V_{carre(p)} = c^3 \\)";

    return (
        <>
            <p className="Title1">Le cube</p>
            <p>
                La formule du volume du cube est :
            </p> 
            <MathJaxDisplay toShow={sqrVolume}/>
            <p>
                Si alors on double seulement le côté, le volume sera 8 fois plus grand.
            </p>
            <MathJaxDisplay toShow={rTo2r}/>
            <MathJaxDisplay toShow={sqrDoubleVolume}/>
            <MathJaxDisplay toShow={sqrDoubleVolumeDev}/>
            <p>
                Cliquez sur l'image ci-dessous pour illlustrer ce propos.           
            </p> 
            <Container className="ShapesContainer">
                <GenericShape 
                    className="ShapesContainer"
                    type={ShapeType.CUBE}
                    dimensions={1.5} /> 
            </Container>

            <p>Intégrons notre volume à partir d'un côté pour voir si nosu retombons bien sur nos pattes</p>
            <img src={squareVolCalculus} alt="Logo" />
            <MathJaxDisplay toShow={sCarre}/>
            <MathJaxDisplay toShow={vCarre}/>
            <p>
                Comme on intégre sur p, la surface c² est une constante, donc on peut la sortir.
            </p>
            <MathJaxDisplay toShow={vCarre2}/>
            <MathJaxDisplay toShow={vCarre3}/>
            <MathJaxDisplay toShow={vCarre4}/>
            <MathJaxDisplay toShow={vCarre5}/>
            <p>
                Tout est OK !
            </p>
        </>
    )
}

export default LeCube;
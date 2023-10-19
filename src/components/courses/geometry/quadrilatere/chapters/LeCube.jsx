import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../../mathjax-display/MathJaxDisplay';

import Title1 from '../../../helpers/Title1';

const LeCube = () => {

    var cVolume = "\\(V_{cube} = c^3\\)";
    var cDoubleVolume = "\\(V_{cube(2c)} = (2c)^3\\)";
    var cDoubleVolumeDev = "\\(V_{cube(2c)} = 8c^3\\)";

    var sCube = "\\(S_{cube} = 6 c^2 \\)";
    var cTo2c = "\\(c \\to 2c\\)";

    return (
        <>
            <Title1 title={"La surface du cube"} />
            <p>
                Étant donné que le cube est un volume, on obtient cinq carrés de plus.
                {"\n"}Un derrière et quatre sur les côtés, on a donc :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sCube}/>
            </Container>

            <Title1 title={"Le volume du cube"} />
            <p>
                La formule du volume du cube est :
            </p> 
            <Container className="Focus">
                <MathJaxDisplay toShow={cVolume}/>
            </Container>
            <p>
                Si alors on double seulement le côté, le volume sera 8 fois plus grand.
            </p>
            <MathJaxDisplay toShow={cTo2c} demo/>
            <MathJaxDisplay toShow={cDoubleVolume} demo/>
            <MathJaxDisplay toShow={cDoubleVolumeDev} demo/>
        </>
    )
}

export default LeCube;
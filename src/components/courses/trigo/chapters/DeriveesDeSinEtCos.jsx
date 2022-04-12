import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const DeriveesDeSinEtCos = () => {

    var dSinX = "\\( d(sin(x)) = sin(x + dx) - sin(x) \\)";
    var dCosX = "\\( d(cos(x)) = cos(x + dx) - cos(x) \\)";

    var sinXPlusDx = "\\(sin(x + dx) - sin(x) = sin(x) cos(dx) + sin(dx) cos(x) - sin(x) \\)";
    var sinXPlusDx2 = "\\(sin(x + dx) - sin(x) = sin(x)(cos(dx) - 1) + sin(dx) cos(x)  \\)";

    var cosXPlusDx = "\\(cos(x + dx) - cos(x) = cos(x) cos(dx) - sin(x) cos(dx) - cos(x) \\)";
    var cosXPlusDx2 = "\\(cos(x + dx) - cos(x) = cos(x)(cos(dx) - 1) - sin(x) cos(dx)  \\)";

    var sin0 = "\\(sin(0) = 0 \\)";
    var cos0 = "\\(cos(0) = 1 \\)";

    var sinDx = "\\(sin(dx) = dx \\)";
    var cosDx = "\\(cos(dx) = 1 \\)";

    var dSinXR = "\\( d(sin(x)) = cos(x).dx \\)";
    var dCosXR = "\\( d(cos(x)) = -sin(x).dx \\)";

    var dSinXOverDx = "\\( \\frac{d(sin(x))}{dx}  = cos(x) \\)";
    var dCosXOverDx = "\\( \\frac{d(cos(x))}{dx}  = -sin(x) \\)";

    var sinXPrim = "\\( sin(x)'  = cos(x) \\)";
    var cosXPrim = "\\( cos(x)'  = -sin(x) \\)";

    return (
        <>   
            <p>
                Nous admettrons que <MathJaxInline toShow={"$dx$"} /> est une portion infinitésimale de <MathJaxInline toShow={"$x$"} />.
                {"\n"}La définition même de la différentielle.
            </p>
            <p>On a alors le couple : </p>
            <MathJaxDisplay toShow={dSinX} demo />
            <MathJaxDisplay toShow={dCosX} demo />
            <p>Avec la formule <MathJaxInline toShow={"$(2)$"} /> vue dans les formules d'addition, on a :</p>   
            <MathJaxDisplay toShow={sinXPlusDx} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={sinXPlusDx2} demo />
            <p>Et avec la formule <MathJaxInline toShow={"$(3)$"} />, on a :</p>   
            <MathJaxDisplay toShow={cosXPlusDx} demo />
            <p>Soit</p>
            <MathJaxDisplay toShow={cosXPlusDx2} demo />
            <p>De plus, on sait que :</p>
            <MathJaxDisplay toShow={sin0} demo />
            <MathJaxDisplay toShow={cos0} demo />
            <p>On admettra alors que : </p>
            <MathJaxDisplay toShow={sinDx} demo />
            <MathJaxDisplay toShow={cosDx} demo />
            <p>D'où les deux expressions suivantes : </p>
            <MathJaxDisplay toShow={dSinXR} demo />
            <MathJaxDisplay toShow={dCosXR} demo />
            <p>En divisant par <MathJaxInline toShow={"$dx$"} /> chaque membre, on obtient : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={dSinXOverDx} />
                <MathJaxDisplay toShow={dCosXOverDx} />
            </Container> 
            <p>L'expression <MathJaxInline toShow={"$\\frac{d(f(x))}{dx}$"} /> est la définition même de la dérivée (utilisée par Leibniz) d'une fonction <MathJaxInline toShow={"$f(x)$"} /> par rapport à <MathJaxInline toShow={"$x$"} />, donc on a alors le couple d'expressions :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sinXPrim} />
                <MathJaxDisplay toShow={cosXPrim} />
            </Container> 
        </>
    )
}

export default DeriveesDeSinEtCos;
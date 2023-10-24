import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const DeriveesDeSinEtCos = () => {

    var sinX = "\\( \\forall x \\in [0; 2\\pi] \\enspace (modulo \\enspace 2\\pi), f(x)= sin(x) \\)";
    var cosX = "\\( \\forall x \\in [0; 2\\pi] \\enspace (modulo \\enspace 2\\pi), f(x)= cos(x) \\)";

    var dSinX = "\\( d(sin(x)) = sin(x + dx) - sin(x) \\)";
    var dCosX = "\\( d(cos(x)) = cos(x + dx) - cos(x) \\)";

    var sinXPlusDx = "\\(sin(x + dx) - sin(x) = sin(x) cos(dx) + sin(dx) cos(x) - sin(x) \\)";
    var sinXPlusDx2 = "\\(sin(x + dx) - sin(x) = sin(x)(cos(dx) - 1) + sin(dx) cos(x)  \\)";

    var cosXPlusDx = "\\(cos(x + dx) - cos(x) = cos(x) cos(dx) - sin(x) sin(dx) - cos(x) \\)";
    var cosXPlusDx2 = "\\(cos(x + dx) - cos(x) = cos(x)(cos(dx) - 1) - sin(x) sin(dx)  \\)";

    var dSinXR = "\\( d(sin(x)) = cos(x).dx \\)";
    var dCosXR = "\\( d(cos(x)) = -sin(x).dx \\)";

    var dSinXOverDx = "\\( \\frac{d(sin(x))}{dx}  = cos(x) \\)";
    var dCosXOverDx = "\\( \\frac{d(cos(x))}{dx}  = -sin(x) \\)";

    var sinXPrim = "\\( (sin(x))'  = cos(x) \\)";
    var cosXPrim = "\\( (cos(x))'  = -sin(x) \\)";

    return (
        <>   
            <p>Les fonction <MathJaxInline toShow={"$ sin(x) $"} /> et <MathJaxInline toShow={"$ cos(x) $"} /> sont définies comme ceci :</p>
               <MathJaxDisplay toShow={sinX} demo /> 
               <MathJaxDisplay toShow={cosX} demo /> 
            <p>Nous allons démontrer leur dérivée à l'aide du calcul différentiel.</p> 
            <p>
                Nous admettrons que <MathJaxInline toShow={"$dx$"} /> est une portion infinitésimale de <MathJaxInline toShow={"$x$"} />.
                {"\n"}La définition même de la différentielle.
                {"\n"} C'est une autre façon de noter le concept d'une portion <MathJaxInline toShow={"$h$"} /> qui tend vers <MathJaxInline toShow={"$0$"} />.
            </p>
            <p>On a alors le couple : </p>
            <MathJaxDisplay toShow={dSinX} demo />
            <MathJaxDisplay toShow={dCosX} demo />

            <Title1 title={"Démonstration"} />
            <Title2 title={"Pour le sinus"} />
            <p>Avec la formule <MathJaxInline toShow={"$(2)$"} /> vue dans <Link url={`${PagesConstants.COURS}${PagesConstants.PREFIX}${CoursesConstants.TRIGO}/formules-d-addition`} external>les formules d'addition</Link>, on a :</p>   
            <MathJaxDisplay toShow={sinXPlusDx} demo />
            <p>On factorise par <MathJaxInline toShow={"$ sin(x)$"} />:</p>
            <MathJaxDisplay toShow={sinXPlusDx2} demo />
            <p>Étant donné que <MathJaxInline toShow={"$ sin(0) = 0$"} />, on admettra alors que <MathJaxInline toShow={"$ sin(dx) = dx$"} />.</p>
            <p>De même, étant donné que <MathJaxInline toShow={"$ cos(0) = 1$"} />, on admettra alors que <MathJaxInline toShow={"$ cos(dx) = 1$"} />.</p>
            <p>D'où l'expression suivante : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={dSinXR} />
            </Container> 
            
            <Title2 title={"Pour le cosinus"} />
            <p>Idem que précédemment, toujours dans <Link url={`${PagesConstants.COURS}${PagesConstants.PREFIX}${CoursesConstants.TRIGO}/formules-d-addition`} external>les formules d'addition</Link>, avec la formule <MathJaxInline toShow={"$(3)$"} />, on a :</p>   
            <MathJaxDisplay toShow={cosXPlusDx} demo />
            <MathJaxDisplay toShow={cosXPlusDx2} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={dCosXR} />
            </Container> 

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
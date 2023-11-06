import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const PrincipeDeSuperpositionDemo = () => {

    var edl1 = "\\( y'(x) + a(x).y(x) = f(x) \\)";

    var fEqualsFiX = "\\( f(x) = \\lambda_1. f_1(x) + \\lambda_2 .f_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .f_n(x)  \\enspace (avec  \\enspace n \\in \\mathbb{N}, \\enspace \\{ \\lambda_1,   \\lambda_2, ... ,  \\lambda_n \\} \\in \\mathbb{R} ) \\)";
   
    var edl1FiXSolutions = "\\( y_k(x) \\enspace solution \\enspace de \\enspace (E_k) \\Longleftrightarrow \\lambda_1. y_1(x) + \\lambda_2. y_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .y_n(x)  \\enspace solution  \\enspace de \\enspace (E) \\)";
    
    var edl1FiX = "\\( y'(x) + a(x)y(x) = \\lambda_1. f_1(x) + \\lambda_2. f_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n. f_n(x) \\)";

    var edl1F1X = "\\( y_1'(x) + a(x).y_1(x) = f_1(x) \\)";
    var edl1F2X = "\\( y_2'(x) + a(x).y_2(x) = f_2(x) \\)";
    var edl1FKX_ = "\\( .............................. \\)";
    var edl1FKX = "\\( y_k'(x) + a(x).y_k(x) = f_k(x) \\)";
    var edl1FNX = "\\( y_n'(x) + a(x).y_n(x) = f_n(x) \\)";

    var verifE1withLambda = "\\( \\lambda_1. y'_1(x) +  a(x) .\\lambda_1. y_1(x) =  \\lambda_1 f_1(x) \\)";

    var verifE2withLambda = "\\( \\lambda_2. y'_2(x) +  a(x) .\\lambda_2. y_2(x) = \\lambda_2. f_2(x) \\)";

    var verifEnwithLambda = "\\( \\lambda_n. y'_n (x)+  a(x) .\\lambda_n .y_n(x) = \\lambda_n. f_n(x) \\)";

    var verifEnY = "\\( \\lambda_1.y_1'(x) + a(x).\\lambda_1.y_1(x)  + \\lambda_2.y_2'(x) + a(x).\\lambda_2.y_2(x)  \\enspace  + \\enspace ... + \\enspace  \\lambda_n.y_n'(x) + a(x).\\lambda_n.y_n(x)  = \\lambda_1 f_1(x) + \\lambda_2 f_2(x) \\enspace  + \\enspace ... + \\enspace \\lambda_n f_n(x) \\)";
    var verifEnYBis = "\\( \\underbrace{ \\Bigl[\\lambda_1.y_1'(x) + \\lambda_2.y_2'(x) \\enspace + \\enspace ... + \\enspace \\lambda_n.y_n'(x) \\Bigl] } _\\text{y't} + a(x) \\underbrace{ \\Bigl [\\lambda_1.y_1(x) + \\lambda_2.y_2(x) \\enspace + \\enspace ... + \\enspace \\lambda_n.y_n(x)\\Bigr] } _\\text{yt} = f(x)  \\)";

    var yt = "\\(  y_t(x) = \\lambda_1.y_1(x) + \\lambda_2.y_2(x) \\enspace + \\enspace ... + \\enspace \\lambda_n.y_n(x) \\)";

    var linyyPrim = "\\(  \\Biggl\\{ \\begin{gather*} y_t(x) = \\lambda_1.y_1(x) + \\lambda_2.y_2(x) \\enspace + \\enspace ... + \\enspace \\lambda_n.y_n(x)  \\\\  y_t'(x) = \\lambda_1.y_1'(x) + \\lambda_2.y_2'(x) \\enspace + \\enspace ... + \\enspace \\lambda_n.y_n'(x)  \\end{gather*} \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ y(x) $"} />, une fonction et <MathJaxInline toShow={"$ y'(x) $"} /> sa dérivée.</p>
                <p><MathJaxInline toShow={"$ a(x) $"} /> et <MathJaxInline toShow={"$f(x) $"} /> deux fonctions.</p>
                <p>On a comme hypothèse une équation différentielle linéaire du premier ordre est de la forme :</p>
                <MathJaxDisplay toShow={edl1} fRef={"E"} demo  />
                <p>Avec <MathJaxInline toShow={"$ f(x) $"} /> une combinaison linéaire telle que :</p>
                <MathJaxDisplay toShow={fEqualsFiX} fRef={"E"} demo />
                
                <Title1 title={"Démonstration"} />
                <p>On peut alors écrire un équivalent de notre équation <MathJaxInline toShow={"$ (E) $"} /> sous la forme : </p>
                <MathJaxDisplay toShow={edl1FiX} fRef={"\\tilde{E}"} demo />

                <p>Nous avons alors une série d'équations suivantes :</p>
                <MathJaxDisplay toShow={edl1F1X} fRef={"\\tilde{E_1}"} demo />
                <MathJaxDisplay toShow={edl1F2X} fRef={"\\tilde{E_2}"} demo />
                <MathJaxDisplay toShow={edl1FKX_} demo />
                <MathJaxDisplay toShow={edl1FKX} fRef={"\\tilde{E_k}"} demo />
                <MathJaxDisplay toShow={edl1FKX_} demo />
                <MathJaxDisplay toShow={edl1FNX} fRef={"\\tilde{E_n}"} demo />
                <p>Où chaque fonction <MathJaxInline toShow={"$ y_k(x) $"} /> est respectivement une solution particulière de chacune des équations <MathJaxInline toShow={"$ (\\tilde{E_k}) $"} />.</p>
                
                <Title2 title={"Solution particulière y1"} />
                <p>Si <MathJaxInline toShow={"$ y_1 $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\overset{~}{E_1}) $"} />, <MathJaxInline toShow={"$ y_1 $"} /> vérifie :</p>
                <MathJaxDisplay toShow={edl1F1X} fRef={"\\tilde{E_1}"} demo />
                <p>Alors, <MathJaxInline toShow={"$  (\\lambda_1. y_1) $"} />  vérifie : </p>
                <MathJaxDisplay toShow={verifE1withLambda} fRef={"\\lambda_1 \\tilde{E_1}"} demo />
                <p>Alors, <MathJaxInline toShow={"$(\\lambda_1. y_1) $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\lambda_1 E_1) $"} />.</p>

                <Title2 title={"Solution particulière y2"} />
                <p>En suivant le même raisonnement, <MathJaxInline toShow={"$  (\\lambda_2. y_2) $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\lambda_2 \\overset{~}{E_2}) $"} />.</p>
                <MathJaxDisplay toShow={verifE2withLambda} fRef={"\\lambda_2 \\tilde{E_2}"} demo />

                <Title2 title={"Solution particulière yn"} />
                <p>Enfin, de de manière générale, pour tout <MathJaxInline toShow={"$ n \\in \\mathbb{N} $"} />, <MathJaxInline toShow={"$ (\\lambda_n. y_n) $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\lambda_n \\tilde{E_n}) $"} />.</p>
                <MathJaxDisplay toShow={verifEnwithLambda} fRef={"\\lambda_n \\tilde{E_k}"} demo />

                <Title2 title={"Solution particulière totale yt"} />
                <p>On additionne alors toutes les équations <MathJaxInline toShow={"$ (\\lambda_k \\tilde{E_k}) $"} /> pour <MathJaxInline toShow={"$ k =  0$"} /> jusque <MathJaxInline toShow={"$ n $"} />, et cela donne :</p>
                <MathJaxDisplay toShow={verifEnY} demo />
                <MathJaxDisplay toShow={verifEnYBis} demo />
                <p>On aura alors comme solution totale particulière de <MathJaxInline toShow={"$ (\\tilde{E}) $"} />, soit aussi de <MathJaxInline toShow={"$ (E) $"} />, la fonction :</p>
               
                <MathJaxDisplay toShow={yt} demo />
                
                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1FiXSolutions} />
                </Container>

                <p>Lorsque l'on voudra vérifier si notre fonction <MathJaxInline toShow={"$ y_t(x) $"} /> est bien une solution particulière de l'équation <MathJaxInline toShow={"$ (E) $"} />, avec la linéarité on aura simplement : </p>
                <MathJaxDisplay toShow={linyyPrim} demo />
            </>
}

export default PrincipeDeSuperpositionDemo;
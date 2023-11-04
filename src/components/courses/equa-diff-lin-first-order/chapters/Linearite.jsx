import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const Linearite = () => {

    var edl1 = "\\( y'(x) + a(x).y(x) = f(x) \\)";
    var fEqualsFiX = "\\( f(x) = \\lambda_1. f_1(x) + \\lambda_2 .f_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .f_n(x)  \\enspace (avec  \\enspace n \\in \\mathbb{N}, \\enspace \\{ \\lambda_1,  \\enspace \\lambda_2, \\enspace ... ,  \\enspace \\lambda_n \\} \\in \\mathbb{R} ) \\)";
    var fEqualsFiXSum = "\\( \\Longleftrightarrow f(x) = \\sum_{k=1}^{n} \\lambda_k f_k(x) \\enspace \\)";
    
    var edl1FiX = "\\( y'(x) + a(x)y(x) = \\lambda_1. f_1(x) + \\lambda_2. f_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n. f_n(x) \\)";

    var edl1FiXSolutions = "\\( y_k(x) \\enspace solution \\enspace de \\enspace (E_k) \\Longleftrightarrow \\lambda_1. y_1(x) + \\lambda_2. y_2(x) \\enspace + \\enspace ... \\enspace + \\enspace \\lambda_n .y_n(x)  \\enspace solution  \\enspace de \\enspace (E) \\)";

    var edl1F1X = "\\( y_1'(x) + a(x).y_1(x) = f_1(x) \\)";
    var edl1F2X = "\\( y_2'(x) + a(x).y_2(x) = f_2(x) \\)";
    var edl1FKX_ = "\\( .............................. \\)";
    var edl1FKX = "\\( y_k'(x) + a(x).y_k(x) = f_k(x) \\)";
    var edl1FNX = "\\( y_n'(x)' + a(x).y_n(x) = f_n(x) \\)";

    var verifE1withLambda = "\\( \\lambda_1. y'_1(x) +  a(x) .\\lambda_1. y_1(x) =  \\lambda_1 f_1(x) \\)";
    var verifE1withLambdaBis = "\\( Y_1'(x) +  a(x). Y_1(x) =  \\lambda_1 .f_1(x) \\)";

    var verifE2withLambda = "\\( \\lambda_2. y'_2(x) +  a(x) .\\lambda_2. y_2(x) = \\lambda_2. f_2(x) \\)";
    var verifE2withLambdaBis = "\\( Y_2'(x) +  a(x). Y_2(x) =  \\lambda_2 .f_2(x) \\)";

    var verifEkwithLambda = "\\( \\lambda_k. y'_k (x)+  a(x) .\\lambda_k .y_k(x) = \\lambda_k. f_k(x) \\)";
    var verifEkwithLambdaBis = "\\(  Y_k'(x) +  a(x). Y_k(x) =  \\lambda_2 .f_2(x) \\)";

    var verifEnY = "\\(  \\underbrace{ Y'_1(x) + a(x).Y1(x) } _\\text{Y1 solution part.} + \\underbrace{ Y'_2(x) + a(x).Y_2(x) } _\\text{Y2 solution part.} \\enspace  + \\enspace ... + \\enspace  \\underbrace{ Y'_n(x) + a(x).Y_n(x) } _\\text{Yn solution part.} = \\lambda_1 f_1(x) + \\lambda_2 f_2(x) \\enspace  + \\enspace ... + \\enspace \\lambda_n f_n(x) \\)";

    var verifEn = "\\( \\lambda_1.y'_1(x) + a(x).\\lambda_1.y_1(x) + \\lambda_2.y'_2(x) + a(x).\\lambda_2.y_2(x) \\enspace  + \\enspace ... + \\enspace  \\lambda_n. y'_n(x) + a(x).\\lambda_n.y_n(x) = f(x) \\)";

    return  <>
                <p>Avant de passer à la résolution, un point sur la linéarité des équations différentielles.</p>
                <p>On démarre de l'équation <MathJaxInline toShow={"$ (E) $"} /> suivante.</p>
                
                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1} fRef={"E"} />
                </Container>

                <p>Admettons que <MathJaxInline toShow={"$ f(x) $"} /> se décompose en une somme de fonctions <MathJaxInline toShow={"$ \\lambda_k f_k(x) $"} /> telles que : </p>
                <MathJaxDisplay toShow={fEqualsFiX} demo />
                <MathJaxDisplay toShow={fEqualsFiXSum} demo />
                <p>On peut alors réécrire notre équation <MathJaxInline toShow={"$ (E) $"} /> sous la forme : </p>
                <MathJaxDisplay toShow={edl1FiX} demo />

                <p>Nous avons alors une série d'équations suivantes :</p>
                <MathJaxDisplay toShow={edl1F1X} fRef={"E_1"} demo />
                <MathJaxDisplay toShow={edl1F2X} fRef={"E_2"} demo />
                <MathJaxDisplay toShow={edl1FKX_} demo />
                <MathJaxDisplay toShow={edl1FKX} fRef={"E_k"} demo />
                <MathJaxDisplay toShow={edl1FKX_} demo />
                <MathJaxDisplay toShow={edl1FNX} fRef={"E_n"} demo />
                <p>Où chaque fonction <MathJaxInline toShow={"$ y_k(x) $"} /> est respectivement une solution particulière de chacune des équations <MathJaxInline toShow={"$ (E_k) $"} />.</p>

                <p>Alors, la linéarité nous dit que la solution particulière totale de <MathJaxInline toShow={"$ (E) $"} /> est une combinaison linéaire de ces solutions, en adéquation avec les coefficients relatifs <MathJaxInline toShow={"$ \\lambda_1, \\enspace \\lambda_2, \\enspace ..., \\enspace \\lambda_n  $"} /> .</p>
                
                <Container className="Focus">
                    <MathJaxDisplay toShow={"\\( Si \\)"} demo />
                    <MathJaxDisplay toShow={fEqualsFiX} />
                    <MathJaxDisplay toShow={"\\( alors, \\)"} demo />
                    <MathJaxDisplay toShow={edl1FiXSolutions} />
                </Container>

                <Title1 title={"Démonstration"} />

                <Title2 title={"Solution particulière y1"} />
                <p>Si <MathJaxInline toShow={"$ y_1 $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (E_1) $"} />, <MathJaxInline toShow={"$ y_1 $"} /> vérifie :</p>
                <MathJaxDisplay toShow={edl1F1X} fRef={"E_1"} demo />
                <p>Alors, <MathJaxInline toShow={"$ \\lambda_1. y_1 $"} />  vérifie : </p>
                <MathJaxDisplay toShow={verifE1withLambda} fRef={"\\lambda_1 E_1"} demo />
                <p>En posant <MathJaxInline toShow={"$ Y_1 = \\lambda_1. y_1 $"} />, on a :</p>
                <MathJaxDisplay toShow={verifE1withLambdaBis} demo />
                <p>Alors, <MathJaxInline toShow={"$ Y_1 = \\lambda_1. y_1 $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\lambda_1 E_1) $"} />.</p>

                <Title2 title={"Solution particulière y2"} />
                <p>De même, si <MathJaxInline toShow={"$ y_2 $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (E_2) $"} />, <MathJaxInline toShow={"$ y_2 $"} /> vérifie :</p>
                <MathJaxDisplay toShow={edl1F2X} fRef={"E_2"} demo />
                <p>Alors, <MathJaxInline toShow={"$ \\lambda_2. y_2 $"} />  vérifie : </p>
                <MathJaxDisplay toShow={verifE2withLambda}  fRef={"\\lambda_2 E_2"} demo />
                <p>En posant <MathJaxInline toShow={"$ Y_2 = \\lambda_2. y_2 $"} />, on a :</p>
                <MathJaxDisplay toShow={verifE2withLambdaBis} demo />
                <p>Alors, <MathJaxInline toShow={"$ Y_2 = \\lambda_2. y_2 $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\lambda_2 E_2) $"} />.</p>

                <Title2 title={"Solution particulière yk"} />
                <p>Et de manière générale, pour tout <MathJaxInline toShow={"$ k \\in \\mathbb{N} $"} /> :</p>
                <p>Si <MathJaxInline toShow={"$ y_k $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (E_k) $"} />, <MathJaxInline toShow={"$ y_k $"} /> vérifie :</p>
                <MathJaxDisplay toShow={edl1FKX} fRef={"E_k"} demo />
                <p>Alors, <MathJaxInline toShow={"$ \\lambda_k. y_k $"} />  vérifie : </p>
                <MathJaxDisplay toShow={verifEkwithLambda} fRef={"\\lambda_k E_k"}  demo />
                <p>En posant <MathJaxInline toShow={"$ Y_k = \\lambda_k. y_k $"} />, on a :</p>
                <MathJaxDisplay toShow={verifEkwithLambdaBis} demo />
                <p>Alors, <MathJaxInline toShow={"$ Y_k = \\lambda_k. y_k $"} /> est une solution particulière de l'équation <MathJaxInline toShow={"$ (\\lambda_k E_k) $"} />.</p>

                <Title2 title={"Somme des solutions particulières Yk = λk.yk"} />
                <p>On additionne alors toutes les équations <MathJaxInline toShow={"$ (\\lambda_k E_k) $"} /> pour <MathJaxInline toShow={"$ k =  0$"} /> jusque <MathJaxInline toShow={"$ n $"} />, et cela donne :</p>
                <MathJaxDisplay toShow={verifEnY} demo />
                <p>Soit en rédécomposant <MathJaxInline toShow={"$ Y_k = \\lambda_k. y_k $"} /> : </p>
                <MathJaxDisplay toShow={verifEn} demo />

                <Title2 title={"Conclusion"} />
                <p>Si <MathJaxInline toShow={"$ (E) $"} />, une équation différentielle linéaire d'ordre <MathJaxInline toShow={"$ 1 $"} />, est de la forme : </p>
                <MathJaxDisplay toShow={fEqualsFiX} demo />
                <p>Alors, </p>
                <MathJaxDisplay toShow={edl1FiXSolutions} demo />
            </>
}

export default Linearite;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const EDL1CoefficientContinuEquGenerale = () => {

    var EDL1 = "\\( y'(x) + a(x)y(x) = f(x) \\)";

    var EDL1HDemo6 = "\\( y_h(x) = \\pm \\enspace e^{C} e^{- A(x)} \\)";

    var EDL1HDemo9 = "\\( y(x) = K(x). e^{- A(x)} \\)";

    var EDL1EyPrim = "\\( y'(x) = K'(x). e^{- A(x)} -a(x) .K(x)e^{-A(x)} \\)";
    var EDL1EInj = "\\( y'(x) + a(x).y(x) = K'(x). e^{- A(x)} -a(x) K(x)e^{-A(x)} + a(x).K(x). e^{- A(x)}  \\)";
    var EDL1EInj2 = "\\( y'(x) + a(x).y(x) = K'(x) .e^{- A(x)}  \\)";

    var EDL1E2 = "\\( f(x) = K'(x) .e^{- A(x)}  \\)";
    var EDL1E2bis = "\\( \\Longleftrightarrow K'(x) = f(x). e^{A(x)}  \\)";

    var EDL1EK = "\\( K(x) = \\int^x K'(t).dt = \\int^x \\left ( f(t) .e^{A(t)} \\right).dt \\)";

    var EDL1EY0 = "\\(  y_0(x) = e^{-A(x)}.\\int^x \\left ( f(t) .e^{A(t)} \\right) .dt \\)";

    var EDL1EYg = "\\(  y_g(x) = y_h(x) + y_0(x) \\)";
    var EDL1EYg2 = "\\(  y_g(x) =  K. e^{- A(x)} + e^{-A(x)}. \\int^x \\left (f(t). e^{A(t)}\\right) .dt \\)";

    return  <>
                <p>Dans cette partie, nous allons résoudre l'équation générale <MathJaxInline toShow={"$ (E) $"} /> :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1} fRef={"E"}  />
                </Container>
                
                <Title1 title={"2) Résolution de l'équation (E)"} />
                <p>Nous allons conserver la solution <MathJaxInline toShow={"$ y_h $"} /> sous sa forme : </p>
                <MathJaxDisplay toShow={EDL1HDemo6} demo />
                <p>Comme nous ne connaissons ni la valeur de <MathJaxInline toShow={"$ C $"} /> ni son signe, nous allons considérer cette fonction <MathJaxInline toShow={"$ (\\pm \\enspace e^{C}) $"} /> comme une fonction encore à déterminer <MathJaxInline toShow={"$ K(x) $"} />.</p>
                <MathJaxDisplay toShow={EDL1HDemo9} demo fRef={1} />

                <Title2 title={"2-a) Méthode de Lagrange"} />
                <p>Pour la résolution de <MathJaxInline toShow={"$ (E) $"} />, nous allons utiliser la méthode de Lagrange, aussi appellée la méthode de la variation de la constante. </p>
                <p>On démarre de l'équation :</p>
                <MathJaxDisplay toShow={EDL1HDemo9} demo />
                <p>On calcule la différentielle (ou dérivée) de <MathJaxInline toShow={"$ y $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EyPrim} demo />
                <p>On réinjecte <MathJaxInline toShow={"$ y' $"} /> et <MathJaxInline toShow={"$ y $"} /> dans le premier membre de <MathJaxInline toShow={"$ (E) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EInj} demo />
                <MathJaxDisplay toShow={EDL1EInj2} fRef={"E_2"} demo />
                <p>On récupère les deux membres de droite de <MathJaxInline toShow={"$ (E) $"} /> et <MathJaxInline toShow={"$ (E_2) $"} />, puisqu'ils sont égaux entre eux, soit l'égalité :</p>
                <MathJaxDisplay toShow={EDL1E2} demo />
                <MathJaxDisplay toShow={EDL1E2bis} demo />

                <Title2 title={"2-b) Intégration pour déterminer K(x)"} />
                <p>Pour une déterminer une expression de <MathJaxInline toShow={"$ K(x) $"} />, intégrons les deux membres de cette équation :</p>
                <MathJaxDisplay toShow={EDL1EK} demo />
                <p>Le résultat de l'intégration va dépendre des deux fonctions de départ <MathJaxInline toShow={"$ a(x) $"} /> et <MathJaxInline toShow={"$ f(x) $"} />.</p>
                <p>Quoiqu'il en soit, de manière générale, on pourra alors réinjecter <MathJaxInline toShow={"$ K(x) $"} /> dans l'équation <MathJaxInline toShow={"$ (1) $"} />, et ainsi obtenir une solution particulière de <MathJaxInline toShow={"$ (E) $"} />: </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1EY0} />
                </Container>

                <Title1 title={"3) Solution générale"} />
                <p>Nous avons comme solution générale, la somme de la solution de l'équation homogène <MathJaxInline toShow={"$ (H) $"} /> et de la solution particulière de <MathJaxInline toShow={"$ (E) $"} />, soit :</p>
                <MathJaxDisplay toShow={EDL1EYg} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1EYg2} />
                </Container>
                <p>La constante <MathJaxInline toShow={"$ K$"} /> pourra alors être déterminée à l'aide d'une condition initiale pour <MathJaxInline toShow={"$ y_g $"} />, par exemple <MathJaxInline toShow={"$ y_g(0) = 0 $"} />.  </p>
                <p>Comme nous l'avons vu au chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_DIFF_LIN_ORDRE_1}/principe-de-superposition`} external>le principe de superposition</Link>, la solution <MathJaxInline toShow={"$ y_0$"} /> elle-même peut être la somme de plusieurs solutions.</p>
            </>
}

export default EDL1CoefficientContinuEquGenerale;
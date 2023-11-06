import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const EDL1CoefficientContinu = () => {

    var EDL1 = "\\( y'(x) + a(x)y(x) = f(x) \\)";

    var EDL1H = "\\( y'(x) + a(x)y(x) = 0 \\)";
    var EDL1HDemo = "\\( y'(x) = - a(x)y(x) \\)";
    var EDL1HDemo2 = "\\( \\frac{y'(x)}{y(x)} = - a(x) \\)";
    var EDL1HDemo3 = "\\( \\int^x \\frac{y'(t)}{y(t)}dt = \\int^x - a(t)dt \\)";

    var EDL1HDemo4 = "\\( ln|y(x)| = - A(x) + C, \\enspace (avec \\enspace C \\in \\mathbb{R}) \\)";
    var EDL1HDemo5 = "\\( y(x) = \\pm e^{- A(x) + C} \\)";
    var EDL1HDemo6 = "\\( y_h(x) = \\pm e^{C} e^{- A(x)} \\)";

    var EDL1HDemo7 = "\\( \\Biggl\\{ \\begin{gather*}  y_{h^+}(x) = K e^{- A(x)} \\\\ y_{h^-}(x) = -K e^{- A(x)}  \\end{gather*} \\)";
    
    var EDL1HDemo7bis = "\\( y_h(x) = K_h. e^{- A(x)} \\enspace  (avec \\enspace  K_h \\in \\mathbb{R}) \\)";

    var EDL1HDemo8yKplusOrMinus = "\\(\\Biggl\\{ \\begin{gather*} y_{h^+}'(x) + a(x)y_{h^+}(x) = -a(x).K e^{- A(x)} + a(x)K e^{- A(x)} = 0 \\\\ y_{h^-}'(x) + a(x)y_{h^+}(x) = a(x).K e^{- A(x)} - a(x)K e^{- A(x)} = 0 \\end{gather*} \\)";

    var EDL1HDemo9 = "\\( y(x) = K(x). e^{- A(x)} \\)";

    var EDL1EyPrim = "\\( y'(x) = K'(x). e^{- A(x)} -a(x) K(x)e^{-A(x)} \\)";
    var EDL1EInj = "\\( y'(x) + a(x)y(x) = K'(x) e^{- A(x)} -a(x) K(x)e^{-A(x)} + a(x)K(x) e^{- A(x)}  \\)";
    var EDL1EInj2 = "\\( y'(x) + a(x)y(x) = K'(x) e^{- A(x)}  \\)";

    var EDL1E2 = "\\( f(x) = K'(x) e^{- A(x)}  \\)";
    var EDL1E2bis = "\\( \\Longleftrightarrow K'(x) = f(x) e^{A(x)}  \\)";

    var EDL1EK = "\\( K(x) = \\int^x K'(t)dt = \\int^x f(t) e^{A(t)}dt \\)";

    var EDL1EY0 = "\\(  y_0(x) = e^{-A(x)}.\\int^x f(t) e^{A(t)}dt \\)";

    var EDL1EYg = "\\(  y_g(x) = y_h(x) + y_0(x) \\)";
    var EDL1EYg2 = "\\(  y_g(x) =  K_h. e^{- A(x)} + e^{-A(x)}. \\int^x f(t) e^{A(t)}dt \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ y(x) $"} />, une fonction et <MathJaxInline toShow={"$ y'(x) $"} /> sa dérivée.</p>
                <p><MathJaxInline toShow={"$ a(x) $"} /> et <MathJaxInline toShow={"$  f(x) $"} /> deux fonctions.</p>
                <p>Nous allons tenter de résoudre l'équation <MathJaxInline toShow={"$ (E) $"} /> ci-dessous :</p>
                <MathJaxDisplay toShow={EDL1} fRef={"E"} demo />

                <Title1 title={"1) Résolution de l'équation homogène (H)"} />
                <p>Pour résoudre cette équation, nous allons d'abord résoudre son équation homogène associée <MathJaxInline toShow={"$ (H) $"} />, à savoir :</p>
                <MathJaxDisplay toShow={EDL1H} fRef={"H"} demo />
                <p>Soit en arrangeant l'expression :</p>
                <MathJaxDisplay toShow={EDL1HDemo} demo />
                <MathJaxDisplay toShow={EDL1HDemo2} demo />
                <p>On intègre des deux côtés :</p>
                <MathJaxDisplay toShow={EDL1HDemo3} demo />
                <MathJaxDisplay toShow={EDL1HDemo4} demo />
                <MathJaxDisplay toShow={EDL1HDemo5} demo />
                <MathJaxDisplay toShow={EDL1HDemo6} demo fRef={1} />
                <p>On distingue alors deux possibilités pour <MathJaxInline toShow={"$ y_h $"} /> : </p>
                <MathJaxDisplay toShow={EDL1HDemo7} demo />
                <p>Mais dans le cas de l'équation homogène seulement, cela revient au même et on peut écrire que <MathJaxInline toShow={"$ y_h $"} /> est une solution de l'équation <MathJaxInline toShow={"$ (H) $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1HDemo7bis}  />
                </Container>

                <p>Car en effet, que <MathJaxInline toShow={"$ K $"} /> soit positif ou négatif, on aura, y_h sera solution de <MathJaxInline toShow={"$ (H) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1HDemo8yKplusOrMinus} demo />

                <Title1 title={"2) Résolution de l'équation (E)"} />
                <p>Nous allons pour cette partie conserver la solution <MathJaxInline toShow={"$ y_h $"} /> sous sa forme <MathJaxInline toShow={"$ (1) $"} />, et considérer <MathJaxInline toShow={"$ \\pm e^{C} $"} /> comme une fonction encore à déterminer <MathJaxInline toShow={"$ K(x) $"} />.</p>
                <MathJaxDisplay toShow={EDL1HDemo9} demo />

                <Title2 title={"2-a) Méthode de Lagrange"} />
                <p>Pour la résolution de <MathJaxInline toShow={"$ (E) $"} />, nous allons utiliser la méthode de Lagrange, aussi appellée la méthode de la variation de la constante. </p>
                <p>On démarre de l'équation :</p>
                <MathJaxDisplay toShow={EDL1HDemo9} demo />
                <p>On calcule la différentielle de <MathJaxInline toShow={"$ y $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EyPrim} demo />
                <p>On réinjecte <MathJaxInline toShow={"$ y' $"} /> et <MathJaxInline toShow={"$ y $"} /> dans <MathJaxInline toShow={"$ (E) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1EInj} demo />
                <MathJaxDisplay toShow={EDL1EInj2} fRef={"E_2"} demo />
                <p>On récupère les deux membres de droite de <MathJaxInline toShow={"$ (E) $"} /> et <MathJaxInline toShow={"$ (E_2) $"} />, puisqu'ils sont égaux entre eux, soit l'égalité :</p>
                <MathJaxDisplay toShow={EDL1E2} demo />
                <MathJaxDisplay toShow={EDL1E2bis} demo />

                <Title2 title={"2-b) Intégration pour déterminer K(x)"} />
                <p>Intégrons maintenant les deux membres de cette équation, et ainsi déterminer une expression de la fonction <MathJaxInline toShow={"$ K(x) $"} />.</p>
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
                <p>La constante <MathJaxInline toShow={"$ K_h $"} /> pourra alors être déterminée à l'aide d'une condition initiale pour <MathJaxInline toShow={"$ y_g $"} />, par exemple <MathJaxInline toShow={"$ y_g(0) = 0 $"} />.  </p>
            </>
}

export default EDL1CoefficientContinu;
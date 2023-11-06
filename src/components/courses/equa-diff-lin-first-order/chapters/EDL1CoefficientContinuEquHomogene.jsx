import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const EDL1CoefficientContinuEquHomogene = () => {

    var EDL1 = "\\( y'(x) + a(x)y(x) = f(x) \\)";

    var EDL1H = "\\( y'(x) + a(x)y(x) = 0 \\)";
    var EDL1HDemo = "\\( y'(x) = - a(x)y(x) \\)";
    var EDL1HDemo2 = "\\( \\frac{y'(x)}{y(x)} = - a(x) \\)";
    var EDL1HDemo3 = "\\( \\int^x \\frac{y'(t)}{y(t)}dt = \\int^x - a(t)dt \\)";

    var EDL1HDemo4 = "\\( ln|y(x)| = - A(x) + C, \\enspace (avec \\enspace C \\in \\mathbb{R}) \\)";
    var EDL1HDemo5 = "\\( y(x) = \\pm \\enspace e^{- A(x) + C} \\)";
    var EDL1HDemo6 = "\\( y_h(x) = \\pm \\enspace e^{C} e^{- A(x)} \\)";

    var EDL1HDemo7 = "\\( \\Biggl\\{ \\begin{gather*}  y_{h^+}(x) = e^C. e^{- A(x)} \\\\ y_{h^-}(x) = -e^C. e^{- A(x)}  \\end{gather*} \\)";
    
    var EDL1HDemo7bis = "\\( y_h(x) = K. e^{- A(x)} \\enspace  (avec \\enspace  K \\in \\mathbb{R}) \\)";

    var EDL1HDemo8yKplusOrMinus = "\\(\\Biggl\\{ \\begin{gather*} y_{h^+}'(x) + a(x).y_{h^+}(x) = -a(x).e^C. e^{- A(x)} + a(x).e^C. e^{- A(x)} = 0 \\\\ y_{h^-}'(x) + a(x).y_{h^+}(x) = a(x).e^C. e^{- A(x)} - a(x).e^C. e^{- A(x)} = 0 \\end{gather*} \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ y(x) $"} />, une fonction et <MathJaxInline toShow={"$ y'(x) $"} /> sa dérivée.</p>
                <p><MathJaxInline toShow={"$ a(x) $"} /> et <MathJaxInline toShow={"$  f(x) $"} /> deux fonctions.</p>
                <p>Nous allons tenter de résoudre l'équation <MathJaxInline toShow={"$ (E) $"} /> ci-dessous :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1} fRef={"E"}  />
                </Container>
                <Title1 title={"1) Résolution de l'équation homogène (H)"} />
                <p>Pour résoudre cette équation, nous allons d'abord résoudre son équation homogène associée <MathJaxInline toShow={"$ (H) $"} />, à savoir sans second membre :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1H} fRef={"H"} />
                </Container>
                <p>Soit en arrangeant l'expression :</p>
                <MathJaxDisplay toShow={EDL1HDemo} demo />
                <MathJaxDisplay toShow={EDL1HDemo2} demo />
                <p>On intègre des deux côtés :</p>
                <MathJaxDisplay toShow={EDL1HDemo3} demo />
                <MathJaxDisplay toShow={EDL1HDemo4} demo />
                <p>Avec <MathJaxInline toShow={"$ A(x) + C $"} /> une primitive de <MathJaxInline toShow={"$ a(x) + C $"} />.</p>
                <MathJaxDisplay toShow={EDL1HDemo5} demo />
                <MathJaxDisplay toShow={EDL1HDemo6} demo />
                <p>On distingue alors deux possibilités pour <MathJaxInline toShow={"$ y_h $"} /> : </p>
                <MathJaxDisplay toShow={EDL1HDemo7} demo />
                <p>Mais dans le cas de l'équation homogène seulement, cela revient au même et on peut écrire que <MathJaxInline toShow={"$ y_h $"} /> est une solution de l'équation <MathJaxInline toShow={"$ (H) $"} /> sous la forme :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={EDL1HDemo7bis}  />
                </Container>

                <p>Car en effet, que <MathJaxInline toShow={"$ K $"} /> soit positif ou négatif, les deux conviennts car on aura dans tous les cas <MathJaxInline toShow={"$ y_h $"} /> sera solution de <MathJaxInline toShow={"$ (H) $"} /> :</p>
                <MathJaxDisplay toShow={EDL1HDemo8yKplusOrMinus} demo />
            </>
}

export default EDL1CoefficientContinuEquHomogene;
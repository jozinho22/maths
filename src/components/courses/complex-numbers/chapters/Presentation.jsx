import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const Presentation = () => {

    var complex = "\\( z = x + iy, \\enspace (avec \\enspace (x, y) \\in  \\mathbb{R}) \\)";
    var iRule = "\\( i^2 = -1 \\)";
    var reIm = "\\( \\Biggl\\{ \\begin{gather*} x = \\mathcal{Re}(z) \\\\ y = \\mathcal{Im}(z) \\end{gather*} \\)";

    return  <>
                <p>On appelle ensemblde des nombres complexes l'ensemble noté <MathJaxInline toShow={"$ \\mathbb{C} $"} />.</p>
                <p>Il est formé de nombres qui s'écrivent sous la forme :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={complex} />
                </Container>
                <p>On appelle cette forme la forme algébrique des complexes.</p>
                <p>La particularité de cette ensemble et qu'il suit la règle suivante : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={iRule} />
                </Container>

                <Title1 title={"Exemple"} />
                <p>
                    <MathJaxInline toShow={"$ z = 2 + 3i $"} />, <MathJaxInline toShow={"$ z = 1 - \\frac{5}{2}i $"} /> ...etc.
                </p>
                
                <Title1 title={"Notation"} /> 
                <p>On appelle <MathJaxInline toShow={"$ x $"} /> la partie réelle de <MathJaxInline toShow={"$ z $"} /> et <MathJaxInline toShow={"$ y $"} /> sa partie imaginaire.</p>
                <p>Si <MathJaxInline toShow={"$ z = x + iy $"} />, on note :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={reIm} />
                </Container>
                <p>Si <MathJaxInline toShow={"$ x = 0 $"} />, <MathJaxInline toShow={"$ z $"} /> est imaginaire pur. L'ensemble de ces nombres est noté <MathJaxInline toShow={"$ i \\mathbb{R} $"} />.</p>
                <p>Si <MathJaxInline toShow={"$ y = 0 $"} />, <MathJaxInline toShow={"$ z $"} /> est un réel.</p>
            </>
}

export default Presentation;
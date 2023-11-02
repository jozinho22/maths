import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const ModuleDUnComplexe = () => {

    var moduleZ = "\\( |z| = z \\overline{z } = x^2 + y^2 \\)";
    var absInR = "\\( |a| = |b| \\Longleftrightarrow a = -b \\)";

    var prop1 = "\\( \\forall z \\in \\mathbb{C}, \\enspace |z| \\in \\mathbb{R}^+ \\)";

    var prop2 = "\\( |z| = 0 \\Longleftrightarrow \\sqrt{x^2 + y^2} = 0 \\Longrightarrow x = 0, y = 0 \\)";
    var prop3 = "\\( |z| = |-z| = | \\overline{z} |\\)";
    var prop3Demo = "\\( |-z| = \\sqrt{(-x)^2 + (-y)^2} = |z| \\)";
    var prop3Demo2 = "\\( |\\overline{z}| = \\sqrt{(x)^2 + (-y)^2} = |z| \\)";

    var prop4 = "\\( |zz'| = |z|.|z'| \\)";
    var prop4Demo = "\\( zz' = (xx' - yy') + i (xy' + x'y) \\)";
    var prop4Demo2 = "\\( | zz' | = \\sqrt{ (xx' - yy')^2 +  (xy' + x'y)^2} \\)";
    var prop4Demo3 = "\\( | zz' | = \\sqrt{ (xx')^2 - 2xx'yy' + (yy')^2 + (xy')^2 + 2xy'x'y + (x'y)^2 } \\)";
    var prop4Demo4 = "\\( | zz' | = \\sqrt{ (xx')^2 + (yy')^2 + (xy')^2 + (x'y)^2 } \\)";
    var prop4Demo5 = "\\( | z|.|z' | = \\sqrt{ (x^2 + y ^2)(x'^2 + y'^2) } \\)";
    var prop4Demo6 = "\\( | z|.|z' | = \\sqrt{ x^2x'^2 + x^2y'^2 + x'^2y ^2 + y ^2y'^2 } \\)";
    var prop4Demo7 = "\\( | z|.|z' | = \\sqrt{ (xx')^2 + (yy')^2 + (xy')^2 + (x'y)^2 } = | zz' | \\)";

    var prop4Bis = "\\( \\left| \\frac{z}{z'} \\right| = \\frac{|z|}{|z'|}, \\enspace (avec \\enspace z' \\neq 0) \\)";
    var prop4Ter = "\\( \\left| \\frac{1}{z} \\right| = \\frac{1}{|z|}, \\enspace (avec \\enspace z \\neq 0) \\)";

    var prop5 = "\\( |z^n| = |z|^n \\enspace avec \\enspace(n \\in \\mathbb{Z})\\)";

    var aCarre = "\\( |a|^2 = a^2 \\enspace (si \\enspace a \\in \\mathbb{R}) \\)";
    var zCarre = "\\( |z|^2 = x^2 + y^2 \\)";
    var zCarre2 = "\\( z^2 = x^2 - y^2 + 2ixy \\)";

    var prop6 = "\\( |z + z'| \\leqslant |z | + |z'| \\)";


    return  <>
                <p>Soit un nombre commplexe <MathJaxInline toShow={"$ z = x +iy \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) $"} />.</p>
                <p>On appelle <MathJaxInline toShow={"$ |z| $"} /> le module de <MathJaxInline toShow={"$ z $"} /> et on note : </p>
                 <Container className="Focus">
                    <MathJaxDisplay toShow={moduleZ} />
                </Container>

                <p>Lorsque que <MathJaxInline toShow={"$ z \\in \\mathbb{R} $"} />, on note que son module est égale à sa valeur absolue.</p>
                <p>Dans <MathJaxInline toShow={"$ \\mathbb{R} $"} />, on a : </p>
                <MathJaxDisplay toShow={absInR} demo />
                <p>C'est faux dans <MathJaxInline toShow={"$ \\mathbb{C} $"} /> !</p>

                <Title1 title={"Propriétés du module"} />
                <Title2 title={"Propriété 1"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop1} />
                </Container>
                
                <Title2 title={"Propriété 2"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop2} />
                </Container>
                
                <Title2 title={"Propriété 3"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop3} />
                </Container>
                <p>Démonstration :</p>
                <MathJaxDisplay toShow={prop3Demo} demo />
                <MathJaxDisplay toShow={prop3Demo2} demo />
                
                <Title2 title={"Propriété 4"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop4} />
                </Container>
                <p>Démonstration :</p>
                <MathJaxDisplay toShow={prop4Demo} demo />
                <MathJaxDisplay toShow={prop4Demo2} demo />
                <MathJaxDisplay toShow={prop4Demo3} demo />
                <MathJaxDisplay toShow={prop4Demo4} demo />
                <MathJaxDisplay toShow={prop4Demo5} demo />
                <MathJaxDisplay toShow={prop4Demo6} demo />
                <MathJaxDisplay toShow={prop4Demo7} demo />
                <p>De même</p>
                <MathJaxDisplay toShow={prop4Bis} demo />
                <MathJaxDisplay toShow={prop4Ter} demo />

                <Title2 title={"Propriété 5"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop5} />
                </Container>

                <Title2 title={"Remarque"} />
                <MathJaxDisplay toShow={aCarre} demo />
                <p>C'est faux dans <MathJaxInline toShow={"$ \\mathbb{C} $"} /> ! </p>
                <MathJaxDisplay toShow={zCarre} demo />
                <MathJaxDisplay toShow={zCarre2} demo />

                <Title2 title={"Propriété 6 : inégalité triangulaire"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop6} />
                </Container>
                <p>C'est la même formule que pour les valeurs absolues</p>
            </>
}

export default ModuleDUnComplexe;
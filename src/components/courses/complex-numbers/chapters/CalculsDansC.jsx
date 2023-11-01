import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const CalculsDansC = () => {

    var zAndZPrim = "\\(  \\Biggl\\{ \\begin{gather*} z = x + iy, \\enspace (avec \\enspace (x, y) \\in  \\mathbb{R}) \\\\ \\enspace z' = x' + iy', \\enspace (avec  \\enspace (x', y') \\in  \\mathbb{R}) \\end{gather*} \\)";
    var zEqzPrim = "\\( z = z' \\Longleftrightarrow x = x',  \\enspace y = y' \\)";
    var zEq0 = "\\( z =0 \\Longleftrightarrow x = 0,  \\enspace y = 0  \\)";
    var zNeq0 = "\\( z \\neq 0 \\Longleftrightarrow x \\neq 0,  \\enspace y \\neq 0  \\)";

    var exemple1 = "\\( (2 + 3i) + (-5 + 8i) = - 3 + 11i \\)";
    var exemple2 = "\\( 1 - 5i -(7 + 2i) = -6-7i \\)";
    var exemple3 = "\\( (2 + 3i)(4 - i) = 11 + 10i \\)";

    var idRem1 = "\\( (x + iy)^2 = x^2 + 2ixy -y^2  \\)";
    var idRem2 = "\\( (x - iy)^2 = x^2 - 2ixy -y^2  \\)";
    var idRem3 = "\\( (x + iy)(x - iy) = x^2 + y^2  \\)";

    var equ2deg = "\\(  x^2 = -1 \\Longleftrightarrow  S = \\left\\{x_1 = i\\sqrt{2}, \\enspace x_2 = -i\\sqrt{2} \\right\\} \\)";
    var fact = "\\(  x^2 + 9 = (x + 3i)(x - 3i) \\)";

    var i4k = "\\(  i^{4k} = 1 \\)";
    var i4kPlus1 = "\\(  i^{4k + 1} = i \\)";
    var i4kPlus2 = "\\(  i^{4k + 2} = -1 \\)";
    var i4kPlus3 = "\\(  i^{4k + 3} = -i \\)";

    return  <>
                <p>Dans ce chapitre, on notera <MathJaxInline toShow={"$ z $"} /> et <MathJaxInline toShow={"$ z' $"} /> tels que : </p>
                <MathJaxDisplay toShow={zAndZPrim} demo />
                
                <Title1 title={"Propriétés générales"} />
                <MathJaxDisplay toShow={zEqzPrim} demo />
                <MathJaxDisplay toShow={zEq0} demo />
                <MathJaxDisplay toShow={zNeq0} demo />

                <p>Toutes les règles de calcul dans <MathJaxInline toShow={"$ \\mathbb{R} $"} /> sont valables dans <MathJaxInline toShow={"$ \\mathbb{C} $"} /> avec en plus, <MathJaxInline toShow={"$ i^2 = -1 $"} />.</p>

                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={exemple1} demo />
                <MathJaxDisplay toShow={exemple2} demo />
                <MathJaxDisplay toShow={exemple3} demo />

                <Title1 title={"Identités remarquables"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={idRem1} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={idRem2} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={idRem3} />
                </Container>

                <Title1 title={"Équations simples du second degré"} />
                <p><MathJaxInline toShow={"$ x^2 = -1 $"} /> n'a pas de solutions dans <MathJaxInline toShow={"$ \\mathbb{R} $"} />.</p>
                <p>En revanche, dans <MathJaxInline toShow={"$ \\mathbb{C} $"} /> :</p>
                <MathJaxDisplay toShow={equ2deg} demo />

                <Title1 title={"Factorisation"} />
                <p><MathJaxInline toShow={"$ x^2+ 9  $"} /> ne se factorise pas dans <MathJaxInline toShow={"$ \\mathbb{R} $"} />.</p>
                <p>En revanche, dans <MathJaxInline toShow={"$ \\mathbb{C} $"} /> :</p>
                <MathJaxDisplay toShow={fact} demo />

                <Title1 title={"Racine carrée"} />
                <p>La notation <MathJaxInline toShow={"$ \\sqrt{x} $"} /> ne s'utilise que pour un réel <MathJaxInline toShow={"$ x \\geqslant 0 $"} />.</p>
                <p>On ne peut pas écrire <MathJaxInline toShow={"$ \\sqrt{-1} $"} /> ou <MathJaxInline toShow={"$ \\sqrt{i} $"} />.</p>
            
                <Title1 title={"Comparaison de complexes"} />
                <p>Dans l'ensemble des complexes, il n'a pas de sens de comparer deux nombres, sous réserve que <MathJaxInline toShow={"$ \\mathcal{Im}(z) \\neq 0 $"} />.</p>
                <p>On ne peut pas dire q'un complexe est plus grand qu'un autre. Il n'y a donc pas d'inéquation.</p>

                <Title1 title={"Périodicité"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={i4k} />
                    <MathJaxDisplay toShow={i4kPlus1} />
                    <MathJaxDisplay toShow={i4kPlus2} />
                    <MathJaxDisplay toShow={i4kPlus3} />
                </Container>
            </>
}

export default CalculsDansC;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const ConjugueDUnComplexe = () => {

    var conjugue = "\\( \\overline{z} = x - iy, \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) \\)";
    var exemple1 = "\\( \\overline{2 + 3i} = 2 - 3i \\)";
    var exemple2 = "\\( \\overline{i} = -i \\)";
    var exemple3 = "\\( \\overline{-3} = -3 \\)";

    var zEqZbar = "\\( z \\in \\mathbb{R} \\Longleftrightarrow z = \\overline{z} \\)";
    var zPlusZbar = "\\( z + \\overline{z} = 2x \\)";
    var zMinusZbar = "\\( z - \\overline{z} = 2iy \\)";
    var zBarbar = "\\( \\overline{\\overline{z}} = z \\)";

    var zPlusZPrimBar = "\\( \\overline{z + z'} = \\overline{z} + \\overline{z'}  \\)";
    var zPlusZPrimBarDemo = "\\( z = x +iy, z' = x' + iy' \\)";
    var zPlusZPrimBarDemo2 = "\\( z + z' = (x + x') + i(y +y') \\)";
    var zPlusZPrimBarDemo3 = "\\( \\overline{z + z'} = (x + x') - i(y +y') \\)";
    var zPlusZPrimBarDemo4 = "\\( \\overline{z + z'} = (x - iy) + (x' - iy') = \\overline{z} + \\overline{z'} \\)";
    
    var zMinusZPrimBar = "\\( \\overline{z - z'} = \\overline{z} - \\overline{z'}  \\)";

    var zTimesZPrimBar = "\\( \\overline{z z'} = \\overline{z}  \\overline{z'}  \\)";
    var zTimesZPrimBarDemo = "\\( z = x +iy, \\enspace  z' = x' + iy' \\)";
    var zTimesZPrimBarDemo2 = "\\( z z' = (x + iy) (x' + iy') \\)";
    var zTimesZPrimBarDemo3 = "\\(  z z' = (xx' - yy') + i(xy' + x'y) \\)";
    var zTimesZPrimBarDemo4 = "\\( \\overline{z z'} = (xx' - yy') - i(xy' + x'y) \\)";

    var zTimesZPrimBarDemo5 = "\\( \\overline{z} \\overline{z'}= (x - iy) (x' - iy') \\)";
    var zTimesZPrimBarDemo6 = "\\( \\overline{z} \\overline{z'}= xx' - yy' - i(xy' + x'y) = \\overline{z z'}\\)";

    var zDivZPrimBar = "\\( \\overline{ \\left(\\frac{z}{z'}\\right)  } = \\frac{ \\overline{z} }{\\overline{z'}}  \\)";

    var zCarreBar = "\\( \\overline{ z^2  } = (\\overline{ z  })^2 \\)";
    var zPowerNBar = "\\( \\overline{ z^n  } = (\\overline{ z  })^n \\)";
    var zInv = "\\( \\overline{ \\left(\\frac{1}{z}\\right)  } = \\frac{1}{\\overline{z}} \\)";

    var zzBar = "\\( z \\overline{z } = x^2 + y^2 \\)";

    return  <>
                <p>Soit un nombre commplexe <MathJaxInline toShow={"$ z = x +iy \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) $"} />.</p>
                <p>On appelle <MathJaxInline toShow={"$ \\overline{z}$"} /> le conjugué de <MathJaxInline toShow={"$ z $"} /> et on note : </p>
                 <Container className="Focus">
                    <MathJaxDisplay toShow={conjugue} />
                </Container>

                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={exemple1} demo />
                <MathJaxDisplay toShow={exemple2} demo />
                <MathJaxDisplay toShow={exemple3} demo />

                <Title1 title={"Propriétés"} />
                <Title2 title={"Propriété 1"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zEqZbar} />
                </Container>

                <Title2 title={"Propriété 2"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zPlusZbar} />
                </Container>

                <Title2 title={"Propriété 3"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zMinusZbar} />
                </Container>

                <Title2 title={"Propriété 4"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zBarbar} />
                </Container>

                <Title2 title={"Propriété 5 : Conjugué d'une somme"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zPlusZPrimBar} />
                </Container>
                <p>Le conjugué de la somme est la somme des conjugués.</p>
                <p>Démonstration : </p>
                <MathJaxDisplay toShow={zPlusZPrimBarDemo} demo />
                <MathJaxDisplay toShow={zPlusZPrimBarDemo2} demo />
                <MathJaxDisplay toShow={zPlusZPrimBarDemo3} demo />
                <MathJaxDisplay toShow={zPlusZPrimBarDemo4} demo />
                <p>De même :</p>
                <MathJaxDisplay toShow={zMinusZPrimBar} demo />

                <Title2 title={"Propriété 6 : Conjugué d'un produit"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zTimesZPrimBar} />
                </Container>
                <p>Le conjugué d'un produit est le produit des conjugués.</p>
                <p>Démonstration : </p>
                <MathJaxDisplay toShow={zTimesZPrimBarDemo} demo />
                <MathJaxDisplay toShow={zTimesZPrimBarDemo2} demo />
                <MathJaxDisplay toShow={zTimesZPrimBarDemo3} demo />
                <MathJaxDisplay toShow={zTimesZPrimBarDemo4} demo />
                <MathJaxDisplay toShow={zTimesZPrimBarDemo5} demo />
                <MathJaxDisplay toShow={zTimesZPrimBarDemo6} demo />

                <p>De même :</p>
                <MathJaxDisplay toShow={zDivZPrimBar} demo />

                <Title2 title={"Propriété 7 : Puissances d'un conjugué"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zCarreBar} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zPowerNBar} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zInv} />
                </Container>

                <Title2 title={"Propriété 8 : Multiplication d'un nombre avec son conjugué"} />
                 <Container className="Focus">
                    <MathJaxDisplay toShow={zzBar} />
                </Container>
            </>
}

export default ConjugueDUnComplexe;
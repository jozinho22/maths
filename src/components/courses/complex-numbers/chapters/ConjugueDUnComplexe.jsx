import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const ConjugueDUnComplexe = () => {

    var conjugue = "\\( \\bar{z} = x - iy, \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) \\)";
    var exemple1 = "\\( \\bar{2 + 3i} = 2 - 3i \\)";
    var exemple2 = "\\( \\bar{i} = -i \\)";
    var exemple3 = "\\( \\bar{-3} = -3 \\)";

    var zEqZbar = "\\( z \\in \\mathbb{R} \\Longleftrightarrow z = \\bar{z} \\)";
    var zPlusZbar = "\\( z + \\bar{z} = 2x \\)";
    var zMinusZbar = "\\( z - \\bar{z} = 2iy \\)";
    var zBarbar = "\\( \\bar{\\bar{z}} = z \\)";

    var zPlusZPrimBar = "\\( \\bar{z + z'} = \\bar{z} + \\bar{z'}  \\)";
    var zPlusZPrimBarDemo = "\\( z = x +iy, z' = x' + iy' \\)";
    var zPlusZPrimBarDemo2 = "\\( z + z' = (x + x') + i(y +y') \\)";
    var zPlusZPrimBarDemo3 = "\\( \\bar{z + z'} = (x + x') - i(y +y') \\)";
    var zPlusZPrimBarDemo4 = "\\( \\bar{z + z'} = (x - iy) + (x' - iy') = \\bar{z} + \\bar{z'} \\)";
    
    var zMinusZPrimBar = "\\( \\bar{z - z'} = \\bar{z} - \\bar{z'}  \\)";

    var zTimesZPrimBar = "\\( \\bar{z z'} = \\bar{z}  \\bar{z'}  \\)";
    var zTimesZPrimBarDemo = "\\( z = x +iy, \\enspace  z' = x' + iy' \\)";
    var zTimesZPrimBarDemo2 = "\\( z z' = (x + iy) (x' + iy') \\)";
    var zTimesZPrimBarDemo3 = "\\(  z z' = (xx' - yy') + i(xy' + x'y) \\)";
    var zTimesZPrimBarDemo4 = "\\( \\bar{z z'} = (xx' - yy') - i(xy' + x'y) \\)";

    var zTimesZPrimBarDemo5 = "\\( \\bar{z} \\bar{z'}= (x - iy) (x' - iy') \\)";
    var zTimesZPrimBarDemo6 = "\\( \\bar{z} \\bar{z'}= xx' - yy' - i(xy' + x'y) = \\bar{z z'}\\)";

    var zDivZPrimBar = "\\( \\bar{ \\frac{z}{z'}  } = \\frac{ \\bar{z} }{\\bar{z'}}  \\)";

    var zCarreBar = "\\( \\bar{ z^2  } = (\\bar{ z  })^2 \\)";
    var zPowerNBar = "\\( \\bar{ z^n  } = (\\bar{ z  })^n \\)";
    var zInv = "\\( \\bar{ \\frac{1}{z}  } = \\frac{1}{\\bar{z}} \\)";

    return  <>
                <p>On appelle conjugué d'un nombre complexe <MathJaxInline toShow={"$ z = x +iy \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) $"} />, le complexe : </p>
                 <Container className="Focus">
                    <MathJaxDisplay toShow={conjugue} />
                </Container>

                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={exemple1} demo />
                <MathJaxDisplay toShow={exemple2} demo />
                <MathJaxDisplay toShow={exemple3} demo />

                <Title1 title={"Propriétés"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zEqZbar} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zPlusZbar} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zMinusZbar} />
                </Container>

                <Container className="Focus">
                    <MathJaxDisplay toShow={zBarbar} />
                </Container>

                <Title2 title={"Conjugué d'une somme"} />
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

                <Title2 title={"Conjugué d'un produit"} />
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

                <Title2 title={"Puissances d'un conjugué"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={zCarreBar} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zPowerNBar} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zInv} />
                </Container>
            </>
}

export default ConjugueDUnComplexe;
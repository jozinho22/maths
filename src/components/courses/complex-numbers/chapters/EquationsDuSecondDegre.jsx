import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const EquationsDuSecondDegre = () => {

    var polynome = "\\(P(z) = az^2 + bz + c \\enspace (avec \\enspace a \\in \\mathbb{R^*}, \\enspace (b, c) \\in \\mathbb{R}^2) \\)";

    var equSecondDegCanonique = "\\( a \\Biggl( \\biggl(z + \\frac{b}{2a} \\biggr)^2 - \\frac{\\Delta}{4a^2} \\Biggr) , \\enspace (avec  \\enspace \\Delta = b^2 - 4ac) \\)";
    var equSecondDegFact = "\\( a \\Biggl( \\biggl(z + \\frac{b}{2a} + \\frac{i \\sqrt{|\\Delta|}}{2a} \\biggr) \\biggl( \\biggl(z + \\frac{b}{2a} - \\frac{i \\sqrt{|\\Delta|}}{2a} \\Biggr) \\)";

    var racinesComplexes = "\\( \\Biggl\\{ x_1 = \\frac{ - b + i \\sqrt{|\\Delta|}}{2a}, \\enspace  x_2\\frac{ - b + i \\sqrt{|\\Delta|}}{2a} \\Biggr\\} \\)";

    return  <>
                <p>Soit un nombre commplexe <MathJaxInline toShow={"$ z = x +iy \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) $"} />.</p>
                <p>Soit <MathJaxInline toShow={"$ P(z) $"} /> un polynôme complexe du second degré tel que :</p>
                <MathJaxDisplay toShow={polynome} demo />
                <p>On sait que <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_2_DEG}/resolution`} external>la forme canonique</Link> s'écrit : </p>
                <MathJaxDisplay toShow={equSecondDegCanonique} demo />

                <p>Nous avons vu <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_2_DEG}/resolution`} external>la résolution des équations du second dégré</Link>, mais seulement pour <MathJaxInline toShow={"$  \\Delta = b^2 - 4ac \\geqslant 0 $"} />. On a alors une factorisation pour le troisième cas, celui où <MathJaxInline toShow={"$  \\Delta < 0 $"} /> :</p>
                
                <Container className="Focus">
                    <MathJaxDisplay toShow={equSecondDegFact} />
                </Container>

                <p>Avec les deux racines distinctes dans <MathJaxInline toShow={"$  \\mathbb{C} $"} /> : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={racinesComplexes} />
                </Container>
                
                
            </>
}

export default EquationsDuSecondDegre;
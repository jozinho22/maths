import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const RacinesDUnComplexe = () => {

    var racineUnite = "\\( z^n = 1 \\)";
    var racineUnite2 = "\\( z^n = 1^n \\)";
    var racineUnite3 = "\\( \\left( R.e^{i(\\theta + 2k\\pi)} \\right)^n = \\left( e^{i(2k\\pi)} \\right)^n \\)";
    var racineUnite4 = "\\( \\Biggl( R.\\left(e^{i(\\theta + 2k\\pi)}\\right)^n \\Biggr)^{\\frac{1}{n}} = \\Biggl( \\left(e^{i(2k\\pi)}\\right)^n \\Biggr)^{\\frac{1}{n}} \\)";

    var racineUniteRes = "\\( z = e^{i \\left(2k\\pi \\right)} \\Longrightarrow \\{ R = 1, \\enspace \\theta = 0 \\} \\)";
    var racineUniteGen = "\\( z^n = 1 \\Longleftrightarrow z = e^{i \\left(2k\\pi \\right)} \\)";

    var racineNieme = "\\( z^n = z_0 \\)";
    var racineNieme2 = "\\( \\left( R.e^{i(\\theta + 2k\\pi)} \\right)^n = R_0.e^{i(\\alpha + 2k\\pi)} \\)";
    var racineNieme3 = "\\( \\Biggl( \\left( R.e^{i(\\theta + 2k\\pi)} \\right)^n \\Biggr)^{\\frac{1}{n}} = \\Biggl( R_0.e^{i(\\alpha + 2k\\pi)} \\Biggr)^{\\frac{1}{n}} \\)";
    var racineNieme4 = "\\( z =  \\sqrt[n]{R_0}.e^{i(\\frac{\\alpha + 2k\\pi}{n} )} \\)";
    var racineNiemeGen = "\\( z^n = z_0 \\Longleftrightarrow  = \\sqrt[n]{R_0}.e^{i(\\frac{\\alpha + 2k\\pi}{n} )} \\)";

    return  <>
                <p>Soit un complexe sous <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.COMPLEXES}/forme-exponentielle`} external>forme exponentielle</Link> <MathJaxInline toShow={"$ z = R.e^{i \\left(\\theta + 2k\\pi \\right)}, \\enspace (avec \\enspace k  \\in \\mathbb{Z}) $"} />.</p>
                <p><MathJaxInline toShow={"$n  \\in \\mathbb{N} $"} />.</p>

                <Title1 title={"Racine de l'unité"} />
                <p>
                    On cherche à déterminer une solution de l'équation :
                </p>
                <MathJaxDisplay toShow={racineUnite} demo />
                <p>Soit : </p>
                <MathJaxDisplay toShow={racineUnite2} demo />
                <p>On réécrit tout sous <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.COMPLEXES}/forme-exponentielle`} external>forme exponentielle</Link> :</p>
                <MathJaxDisplay toShow={racineUnite3} demo />
                <p>On retire la puissance :</p>
                <MathJaxDisplay toShow={racineUnite4} demo />
                <MathJaxDisplay toShow={racineUniteRes} demo />

                <p>Soit comme résultat :</p>

                <Container className="Focus">
                    <MathJaxDisplay toShow={racineUniteGen} />
                </Container>

                <Title1 title={"Racines n-ième"} /> 
                <p>Soit un deuxième complexe sous forme exponentielle <MathJaxInline toShow={"$ z_0 = R_0.e^{i \\left(\\alpha + 2k\\pi \\right)}, \\enspace (avec \\enspace k  \\in \\mathbb{Z}) $"} />.</p>
                <p>Résolvons maintenant :</p>
                <MathJaxDisplay toShow={racineNieme} demo />
                <MathJaxDisplay toShow={racineNieme2} demo />
                <MathJaxDisplay toShow={racineNieme3} demo />
                <MathJaxDisplay toShow={racineNieme4} demo />
                
                <p>Soit comme résultat :</p>

                <Container className="Focus">
                    <MathJaxDisplay toShow={racineNiemeGen} />
                </Container>
                
            </>
}

export default RacinesDUnComplexe;
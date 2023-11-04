import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const Presentation = () => {

    var edl1 = "\\( y(x)' + a(x) y(x) = f(x)  \\)";

    return  <>
                <p>Avant d'entamer ce chapitre, il est conseillé de connaître les chapitres sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}`} external> la dérivation</Link> et <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PRIMITIVES_INTEGRATION}`} external> l'intégration</Link>.</p>
                
                <Title1 title={"Équations différentielles linéaires d'ordre 1"} />
                <p>Soit <MathJaxInline toShow={"$ y(x) $"} />, une fonction et <MathJaxInline toShow={"$ y'(x) $"} /> sa dérivée.</p>
                <p><MathJaxInline toShow={"$ a(x), \\enspace f(x) $"} /> deux fonctions.</p>
                <p>On se propose de résoudre une équation de la forme :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={edl1} fRef={"E"} />
                </Container>
                
                <p>On verra alors le cas général où <MathJaxInline toShow={"$ a(x) $"} /> est une fonction, et par la suite le cas particulier où <MathJaxInline toShow={"$ a(x)=a, \\enspace avec \\enspace a \\in \\mathbb{K} $"} />.</p>
            </>
}

export default Presentation;
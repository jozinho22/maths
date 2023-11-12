import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import pythagore from '../../pythagore/assets/pythagore.png';
import alKashi from '../../pythagore/assets/alKashi.png';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

import Link from '../../../immutable/nav/Link';

const LoiDesCosinus = () => {

    var n = 0;
    
    var pyth = "\\(a^2 + b^2 = c^2\\)";

    var alKashiA = "\\( a^2  = b^2 + c^2 -2bc.cos(\\alpha) \\)";
    var alKashiB = "\\( b^2  = a^2 + c^2 -2ac.cos(\\beta) \\)";
    var alKashiC = "\\( c^2  = a^2 + b^2 -2ab.cos(\\gamma) \\)";

    return (
        <>
            <p>
                La loi des cosinus, ou théorème d'Al-Kashi est la généralisation du <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link>.
                Là où dans un triangle <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pyth}/>
            </Container>
            
            <ImageZoom src={pythagore} name="Théorème de pythagore" n={++n}/>
            <p>Dans le cas d'un triangle quelconque :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={alKashiA}/>
                <MathJaxDisplay toShow={alKashiB}/>
                <MathJaxDisplay toShow={alKashiC}/>
            </Container>
            <ImageZoom src={alKashi} name="Théorème d'Al-Kashi" n={++n}/>
            <p>La démonstration de ce deux théorèmes se trouve dans le chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link>.</p>
        </>
    )
}

export default LoiDesCosinus;
import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../helpers/ImageZoom';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

import thalesInv from '../assets/thalesInv.png';
import Link from '../../../immutable/nav/Link';

const TheoremeTrianglesConcomitants = () => {

    var n = 0;
    var thalesTheoremConc = "\\( \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC} \\)";

    return (
        <>
            <p>Le <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.THALES}/presentation`} external>théorème de Thalès</Link> s'applique aussi dans le cas de deux triangles concomitants en un point, tel que la figure suivante :</p>
            
            <ImageZoom src={thalesInv} name="Le théorème de Thalès avec deux triangles concomitants" n={++n} />

            <p>On aura alors de la même manière les relations suivantes :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={thalesTheoremConc} />
            </Container>
        </>
    );

}

export default TheoremeTrianglesConcomitants;
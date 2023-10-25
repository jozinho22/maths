import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Link  from '../../../immutable/nav/Link';
import CoursesConstants from '../../helpers/CoursesConstants';
import PhiPuissanceNPlus2Table from '../helpers/PhiPuissanceNPlus2Table';
import PagesConstants from '../../../immutable/nav/PagesConstants';

const FormulesDePhiPuissanceNPlus2 = () => {

    var phiGen2 =  "\\(\\phi^{n+2} =  \\phi^{n+1} +  \\phi^{n} \\)";

    return (
        <>
            <p>Voici un aperçu de la première formule que nous avons vues dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.NB_OR}/caracteristiques`} external> les caractéristiques du nombre d'or</Link> :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiGen2} />
            </Container>
            <PhiPuissanceNPlus2Table />
        </>
    );
}

export default FormulesDePhiPuissanceNPlus2;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Link  from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import PhiPuissanceNPlus1Table from '../helpers/PhiPuissanceNPlus1Table';

const FormulesDePhiPuissanceNPlus1 = () => {

    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";

    return (
        <>
            <p>Voici un aperçu de la première formule que nous avons vues dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.NB_OR}/caracteristiques`} external> les caractéristiques du nombre d'or</Link> :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiGen} />
            </Container>
            <PhiPuissanceNPlus1Table />
        </>
    );
}

export default FormulesDePhiPuissanceNPlus1;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Link  from '../../../immutable/nav/Link';
import CoursesConstants from '../../helpers/CoursesConstants';
import PhiFormula2Table from '../helpers/PhiFormula2Table';
import PagesConstants from '../../../immutable/nav/PagesConstants';

const FormuleDePhi2 = () => {

    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";

    return (
        <>
            <p>Voici un aperçu de la seconde formule que nous avons vues dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.NB_OR}/caracteristiques`} external> le chapitre sur les caractéristiques du nombre d'or</Link> :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiGen} />
            </Container>
            <PhiFormula2Table />
        </>
    );
}

export default FormuleDePhi2;
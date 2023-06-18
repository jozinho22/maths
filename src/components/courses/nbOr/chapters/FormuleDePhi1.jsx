import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Link  from '../../../immutable/nav/Link';
import CoursesConstants from '../../helpers/CoursesConstants';
import pathBuilder from '../../../helpers/pathBuilder';
import PhiFormula1Table from '../helpers/PhiFormula1Table';

const FormuleDePhi1 = () => {

    var phiGen2 =  "\\(\\phi^{n+2} =  \\phi^{n+1} +  \\phi^{n} \\)";

    return (
        <>
            <p>Voici un aperçu de la première formule que nous avons vues dans <Link url={pathBuilder(`${CoursesConstants.NB_OR}/caracteristiques`)} external> le chapitre sur les caractéristiques du nombre d'or</Link> :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiGen2} />
            </Container>
            <PhiFormula1Table />
        </>
    );
}

export default FormuleDePhi1;
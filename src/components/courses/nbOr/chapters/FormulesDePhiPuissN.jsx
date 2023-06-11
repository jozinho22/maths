import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import FibonacciFormulasTable from '../helpers/FibonacciFormulasTable';
import Link  from '../../../immutable/nav/Link';
import CoursesConstants from '../../CoursesConstants';
import pathBuilder from '../../../helpers/pathBuilder';

const FormulesDePhiPuissN = () => {

    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";

    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";
    var phiGen2 =  "\\(\\phi^{n+2} =  \\phi^{n+1} +  \\phi^{n} \\)";

    return (
        <>
            <p>Voici un aperçu des formules que nous avons vues dans <Link url={pathBuilder(`${CoursesConstants.NB_OR}/evolutions-de-lapins`)} external> le chapitre sur les évolutions de lapins</Link> et <Link url={pathBuilder(`${CoursesConstants.NB_OR}/caracteristiques`)} external> le chapitre sur les caractéristiques du nombre d'or</Link> :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiMain} />
                <MathJaxDisplay toShow={phiGen} />
                <MathJaxDisplay toShow={phiGen2} />
            </Container>
            <FibonacciFormulasTable />
        </>
    );
}

export default FormulesDePhiPuissN;
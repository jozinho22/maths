import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Link  from '../../../immutable/nav/Link';
import CoursesConstants from '../../CoursesConstants';
import pathBuilder from '../../../helpers/pathBuilder';
import FibonacciSequenceFormulaTable from '../helpers/FibonacciSequenceFormulaTable';

const FormuleDeLaSuiteDeFibonacci = () => {

    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";

    return (
        <>
            <p>Voici un aperçu de la formule que nous avons vues dans <Link url={pathBuilder(`${CoursesConstants.NB_OR}/evolutions-de-lapins`)} external> le chapitre sur les évolutions de lapins</Link> :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiMain} />
            </Container>
            <FibonacciSequenceFormulaTable />
        </>
    );
}

export default FormuleDeLaSuiteDeFibonacci;
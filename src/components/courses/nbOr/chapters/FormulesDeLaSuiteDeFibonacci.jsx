import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import Link  from '../../../immutable/nav/Link';
import CoursesConstants from '../../helpers/CoursesConstants';
import FibonacciSequenceFormulaTable from '../helpers/FibonacciSequenceFormulasTable';
import PagesConstants from '../../../immutable/nav/PagesConstants';

const FormulesDeLaSuiteDeFibonacci = () => {

    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";

    return (
        <>
            <p>Voici un aperçu de la formule que nous avons vues dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.NB_OR}/evolutions-de-lapins`} external> la présentation du nombre d'or</Link> :</p>
            <p>Nous avons ici affaire à <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/differentes-facons-de-definir-une-suite`} external>une suite récurrente</Link> d'ordre 2.</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiMain} />
            </Container>
            <FibonacciSequenceFormulaTable />
        </>
    );
}

export default FormulesDeLaSuiteDeFibonacci;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import FibonacciFormulasTable from '../FibonacciFormulasTable';

const FormulesDePhiPuissN = () => {

    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";
    var phiGen2 =  "\\(\\phi^{n+1} =  \\phi^{n} +  \\phi^{n - 1} \\)";

    return (
        <>
            <p className="Title2">Résumé des <MathJaxInline toShow={"$\\phi^{-n}$"} /> </p>
            <p>Voici un aperçu des deux formules que nous avons vues dans le chapitre précédent :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={phiGen} />
                <MathJaxDisplay toShow={phiGen2} />
            </Container>
            <FibonacciFormulasTable />
        </>
    );
}

export default FormulesDePhiPuissN;
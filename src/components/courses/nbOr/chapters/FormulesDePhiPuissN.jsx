import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import FibonacciFormulasTable from '../FibonacciFormulasTable';

const FormulesDePhiPuissN = () => {
    return (
        <>
            <p className="Title2">Résumé des <MathJaxInline toShow={"$\\phi^{-n}$"} /> </p>
            <FibonacciFormulasTable />
        </>
    );
}

export default FormulesDePhiPuissN;
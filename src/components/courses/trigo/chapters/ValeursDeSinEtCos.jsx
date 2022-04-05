import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import CosSinValuesTable from '../CosSinValuesTable';
import CosSinFormulasTable from '../CosSinFormulasTable';

const ValeursDeSinEtCos = () => {

    return (
            <>
                <p className="Title1">Valeurs de cos(α) et sin(α)</p>
                <p>On voit que certaines valeurs se répètent : <MathJaxInline toShow={"$\\frac{1}{2}$"} />, <MathJaxInline toShow={"$\\frac{\\sqrt2}{2}$"} /> et <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} /> </p>
                <CosSinValuesTable />
                <p className="Title1">Formules de cos(α) et sin(α) en fonction de π </p>
                <p>On observant la figure 2, on voit que certaines valeurs se répétent, voici un tableau récapitulatif du comportement : </p>
                <CosSinFormulasTable />
            </>
    )

}

export default ValeursDeSinEtCos;
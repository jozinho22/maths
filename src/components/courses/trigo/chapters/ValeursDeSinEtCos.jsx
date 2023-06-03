import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import SinCosValuesTable from '../SinCosValuesTable';
import SinCosFormulasTable from '../SinCosFormulasTable';
import circleTrigoValues from '../assets/circleTrigoValues.png';
import ImageZoom from '../../ImageZoom';

const ValeursDeSinEtCos = () => {

    return (
            <>
                <p>On voit que certaines valeurs se répètent : <MathJaxInline toShow={"$\\frac{1}{2}$"} />, <MathJaxInline toShow={"$\\frac{\\sqrt2}{2}$"} /> et <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} /> </p>
                <SinCosValuesTable />
                <p className="Title1">Formules de sin(α) et cos(α) en fonction de π </p>
                <p>On observant la figure 2, on voit que certaines valeurs se répétent, voici un tableau récapitulatif du comportement : </p>
                <SinCosFormulasTable />
                <ImageZoom src={circleTrigoValues} name="Les angles remarquables sur le cercle" n={3} />
            </>
    )

}

export default ValeursDeSinEtCos;
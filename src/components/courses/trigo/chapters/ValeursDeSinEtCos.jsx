import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import SinCosValuesTable from '../helpers/SinCosValuesTable';
import SinCosFormulasTable from '../helpers/SinCosFormulasTable';
import circleTrigoValues from '../assets/circleTrigoValues.png';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';

const ValeursDeSinEtCos = () => {

    var n = 0;

    return (
            <>
                <p>Voici les différentes valeurs de <MathJaxInline toShow={"$sin(\\alpha)$"} /> et <MathJaxInline toShow={"$cos(\\alpha)$"} /> en fonction d'angles remarquables.</p>
                <p>On voit que certaines valeurs se répètent : <MathJaxInline toShow={"$\\frac{1}{2}$"} />, <MathJaxInline toShow={"$\\frac{\\sqrt2}{2}$"} /> et <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} /> </p>
                <SinCosValuesTable />
                <ImageZoom src={circleTrigoValues} name="Les angles remarquables sur le cercle" n={++n} />

                <Title1 title={"Formules de sin(α) et cos(α) en fonction de π"} />
                <p>On observant la figure 1, on voit que certaines valeurs se répétent, voici un tableau récapitulatif du comportement : </p>
                <SinCosFormulasTable />
                
            </>
    )

}

export default ValeursDeSinEtCos;
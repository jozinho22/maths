import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import triangles from '../assets/triangles.png'

import Title1 from '../../helpers/Title1';

const PresentationDuTriangle = () => {

    var n = 0;

    return (
        <>
            <p>
                Le triangle est caractérisé par deux aspects :
                {"\n"} - ses angles
                {"\n"} - ses longueurs
            </p>

            <Title1 title={"Les différents types de triangles"} />
            <p>Il existe quatre triangles remarquables :</p>
            <ImageZoom src={triangles} name="Les différents triangles" n={++n}/>
            <p>
                {"\n"} - rectangle : un angle droit
                {"\n"} - équilatéral : tous les angles égaux à <MathJaxInline toShow={"$\\frac{\\pi}{3}$"}/> (ou 60°) et toutes les longueurs égales
                {"\n"} - isocèle : deux angles égaux et deux longueurs égales
                {"\n"} - scalène : un angle obtus (supérieur à <MathJaxInline toShow={"$\\frac{\\pi}{2}$"}/> ou 90°)
            </p>
        </>
    )
}

export default PresentationDuTriangle;
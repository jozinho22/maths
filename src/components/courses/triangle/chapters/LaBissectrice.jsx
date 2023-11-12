import React from 'react';

import ImageZoom from '../../helpers/ImageZoom';

import bissectrices from '../assets/bissectrices.png'

const LaBissectrice = () => {

    var n = 0;

    return (
        <>
            <p>La bissectrice est la droite qui coupe un sommet en deux angles égaux.</p>
            <ImageZoom src={bissectrices} name="Les bissectrices dans un triangle" n={++n}/>
            <p>Son intersection est le centre du cercle inscrit au triangle.</p>
            <p>
                Elle s'obtient de la manière suivante :
                {"\n"}- prendre un écart de compas (n'importe lequel)
                {"\n"}- faire une marque sur chaque côté adjacent l'angle
                {"\n"}- reporter le compas sur chacune des marques et tracer un cercle
                {"\n"}{"\n"}L'intersection des cercle indique le chemin pour tracer la bissectrice.
            </p>     
        </>
    )
}

export default LaBissectrice;
import React from 'react';

import ImageZoom from '../../../helpers/ImageZoom';

import mediatrices from '../assets/mediatrices.png'

const LaMediatrice = () => {

    var n = 0;

    return (
        <>
            <p>La médiatrice est la droite qui passe par le centre d'un côté de manière orthogonale.</p>
            <ImageZoom src={mediatrices} name="Les médiatrices dans un triangle" n={++n}/>
            <p>Son intersection est le centre du cercle circonscrit au triangle.</p>
        </>
    )
}

export default LaMediatrice;
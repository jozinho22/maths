import React from 'react';

import MathJaxInline from '../../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../../helpers/ImageZoom';

import heights from './assets/heights.png'
import heights2 from './assets/heights2.png'
import PagesConstants from '../../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../../helpers/CoursesConstants';
import Link from '../../../../immutable/nav/Link';

const LaHauteur = () => {

    var n = 0;

    return (
        <>
            <p>
                La <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>hauteur</Link> est le segment de droite projeté orthogonalement (à angle droit) à partir d'un sommet sur la longueur opposée.
                Il y a donc trois hauteurs à projeter.
            </p>
            <ImageZoom src={heights} name="Les trois hauteurs dans un triangle classique" n={++n}/>
            <p>Le point de concourance <MathJaxInline toShow={"$H$"}/> s'appelle l'orthocentre.</p>
            <p>Dans un triangle scalène, les trois <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>hauteurs</Link> se trouvent à l'extérieur.</p>
            <ImageZoom src={heights2} name="Les trois hauteurs dans un triangle scalène" n={++n}/>
            <p>On les a représentées respectivement <MathJaxInline toShow={"$h_a, \\; h_b, \\; h_c$"}/>.</p>
        </>
    )
}

export default LaHauteur;
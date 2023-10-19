import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../../mathjax-display/MathJaxDisplay';
import ImageZoom from '../../../helpers/ImageZoom';

import circleTurnAround from '../assets/circleTurnAround.png'
import Link from '../../../../immutable/nav/Link';
import PagesConstants from '../../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../../helpers/CoursesConstants';
import pathBuilder from '../../../../helpers/pathBuilder';

const LePerimetre = () => {

    var n = 0;
    var pOverD = "\\(\\pi = \\frac{P_{cercle}}  {D_{cercle}} \\)"
    var pCercle = "\\( P_{cercle} = \\pi D_{cercle} \\)"
    var pCercle2 = "\\( P_{cercle} = 2\\pi R_{cercle} \\)"

    var pCercle3 = "\\( P = 2\\pi R \\)"

    var pCercle4 = "\\( P = R.\\alpha \\)"

    return (
        <>
            <p>
                Le cercle est caractérisé par sa relation avec <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PI}`)} external>le nombre π (Pi)</Link>.
                π n'est autre que la rapport de la circonférence (périmètre) sur le diamètre.
                {"\n"}Cette valeur vaut environ 3,14. Mais c'est une valeur approchée...
            </p>

            <p>π se caractérise par le rapport du périmètre sur le diamètre comme ceci :</p>
            <MathJaxDisplay toShow={pOverD} demo />
             <p>Soit</p>
            <MathJaxDisplay toShow={pCercle} demo />
            <p>Étant donné que le rayon est la moitié du diamètre</p>
            <MathJaxDisplay toShow={pCercle2} demo />
            <p>Soit</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle3} />
            </Container>

            <p>2π est un tour complet du cercle. Mais la distance parcourue sur le cercle sera proportionnelle à l'angle créé par cette distance radiale.  </p>
            <ImageZoom src={circleTurnAround} name="Distance parcourue sur le cercle" n={++n} />
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle4} />
            </Container>
        </>
    )
}

export default LePerimetre;
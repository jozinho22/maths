import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../../helpers/ImageZoom';

import triangleSinusRelation from './assets/triangleSinusRelation.png'
import triangleSinusRelationDemo from './assets/triangleSinusRelationDemo.png'

import PagesConstants from '../../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../../helpers/CoursesConstants';

import Link from '../../../../immutable/nav/Link';

const LoiDesSinus = () => {

    var n = 0;
    var sinusRelation = "\\( \\frac{sin\\alpha}{a} = \\frac{sin\\beta}{b} = \\frac{sin\\gamma}{c} \\)"
    var sinusAlpha = "\\( sin(\\alpha) = \\frac{h_b}{c} \\)"
    var sinusGamma = "\\( sin(\\gamma) = \\frac{h_b}{a} \\)"
    var sinusAlpha2 = "\\( \\frac{sin(\\alpha)}{a}  = \\frac{h_b}{ac} \\)"
    var sinusGamma2 = "\\( \\frac{sin(\\gamma)}{c} = \\frac{h_b}{ac} \\)"

    var sinAlphaAsinGammaC = "\\( \\frac{sin(\\alpha)}{a} = \\frac{sin(\\gamma)}{c} \\)"
    var sinAlphaAsinBetaB = "\\( \\frac{sin(\\alpha)}{a} = \\frac{sin(\\beta)}{b} \\)"
    var sinBetaBsinGammaC = "\\( \\frac{sin(\\beta)}{b} = \\frac{sin(\\gamma)}{c} \\)"

    return (
        <>
            <p>La loi des sinus s'exprime de la manière suivante :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sinusRelation}/> 
            </Container>
            <ImageZoom src={triangleSinusRelation} name="Loi des sinus" n={++n}/>
            <p>Au cas où vous ne seriez pas familier avec les sinus et cosinus, se référer au chapitre sur <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIGO}`} external>la trigonométrie</Link>.</p>
            <p>
                Ce théorème se démontre simplement.
                {"\n"}Prenons le même triangle et projetons une hauteur <MathJaxInline toShow={"$h_b$"}/> sur une des longueurs, la longueur <MathJaxInline toShow={"$b$"}/>.
            </p>
            <ImageZoom src={triangleSinusRelationDemo} name="Démonstration de la loi des sinus" n={++n}/>
            <p>Immédiatement, il vient les relations suivantes :</p>
            <MathJaxDisplay toShow={sinusAlpha} demo /> 
            <MathJaxDisplay toShow={sinusGamma} demo /> 
            <p>En divisant la première par <MathJaxInline toShow={"$a$"}/>, on a : </p>
            <MathJaxDisplay toShow={sinusAlpha2} demo /> 
            <p>De même, en divisant la seconde par <MathJaxInline toShow={"$c$"}/>, on a : </p>
            <MathJaxDisplay toShow={sinusGamma2} demo />
            <p>On voit alors l'égalité :</p>
            <MathJaxDisplay toShow={sinAlphaAsinGammaC} demo />
            <p>En reproduisant cette opération sur les deux autres longueurs du triangle, on aura les autres équations :</p>
            <MathJaxDisplay toShow={sinAlphaAsinBetaB}  demo />
            <MathJaxDisplay toShow={sinBetaBsinGammaC} demo />
            <p>On en déduit alors que :</p>
            <MathJaxDisplay toShow={sinusRelation} demo/> 
        </>
    )
}

export default LoiDesSinus;
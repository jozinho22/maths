import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import triangles from '../assets/triangles.png'
import heights from '../assets/heights.png'
import heights2 from '../assets/heights2.png'
import medianes from '../assets/medianes.png'
import bissectrices from '../assets/bissectrices.png'
import mediatrices from '../assets/mediatrices.png'

import triangleSinusRelation from '../assets/triangleSinusRelation.png'
import triangleSinusRelationDemo from '../assets/triangleSinusRelationDemo.png'
import pythagore from '../../pythagore/assets/pythagore.png';
import alKashi from '../../pythagore/assets/alKashi.png';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

import pathBuilder from '../../../helpers/pathBuilder';
import Link from '../../../immutable/nav/Link';
import Title1 from '../../helpers/Title1';

const LeTriangle = () => {

    var n = 0;
    var sinusRelation = "\\( \\frac{sin\\alpha}{a} = \\frac{sin\\beta}{b} = \\frac{sin\\gamma}{c} \\)"
    var sinusAlpha = "\\( sin(\\alpha) = \\frac{h_b}{c} \\)"
    var sinusGamma = "\\( sin(\\gamma) = \\frac{h_b}{a} \\)"
    var sinusAlpha2 = "\\( \\frac{sin(\\alpha)}{a}  = \\frac{h_b}{ac} \\)"
    var sinusGamma2 = "\\( \\frac{sin(\\gamma)}{c} = \\frac{h_b}{ac} \\)"

    var sinAlphaAsinGammaC = "\\( \\frac{sin(\\alpha)}{a} = \\frac{sin(\\gamma)}{c} \\)"
    var sinAlphaAsinBetaB = "\\( \\frac{sin(\\alpha)}{a} = \\frac{sin(\\beta)}{b} \\)"
    var sinBetaBsinGammaC = "\\( \\frac{sin(\\beta)}{b} = \\frac{sin(\\gamma)}{c} \\)"

    var ag = "\\( AG = \\frac{2}{3}.AI \\)"
    var bg = "\\( BG = \\frac{2}{3}.BJ \\)"
    var cg = "\\( CG = \\frac{2}{3}.CK \\)"

    var appolonius = "\\( {AB}^2 + {AC}^2 = 2.{BI}^2 + {AI}^2 \\)"
    var appolonius2 = "\\( {AB}^2 + {BC}^2 = 2.{CJ}^2 + {BJ}^2 \\)"
    var appolonius3 = "\\( {BC}^2 + {AC}^2 = 2.{AK}^2 + {CK}^2 \\)"
    
    var pyth = "\\(a^2 + b^2 = c^2\\)";

    var alKashiA = "\\( a^2  = b^2 + c^2 -2bc.cos(\\alpha) \\)";
    var alKashiB = "\\( b^2  = a^2 + c^2 -2ac.cos(\\beta) \\)";
    var alKashiC = "\\( c^2  = a^2 + b^2 -2ab.cos(\\gamma) \\)";

    return (
        <>
            <p>
                Le triangle est caractérisé par deux aspects :
                {"\n"} - ses angles
                {"\n"} - ses longueurs
            </p>

            <Title1 title={"a) Les différents types de triangles"} />
            <p>Il existe quatre triangles remarquables :</p>
            <ImageZoom src={triangles} name="Les différents triangles" n={++n}/>
            <p>
                {"\n"} - rectangle : un angle droit
                {"\n"} - équilatéral : tous les angles égaux à <MathJaxInline toShow={"$\\frac{\\pi}{3}$"}/> (ou 60°) et toutes les longueurs égales
                {"\n"} - isocèle : deux angles égaux et deux longueurs égales
                {"\n"} - scalène : un angle obtus (supérieur à <MathJaxInline toShow={"$\\frac{\\pi}{2}$"}/> ou 90°)
            </p>

            <Title1 title={"b) La hauteur"} />
            <p>
                La hauteur est le segment de droite projeté orthogonalement (à angle droit) à partir d'un sommet sur la longueur opposée.
                Il y a donc trois hauteurs à projeter.
            </p>
            <ImageZoom src={heights} name="Les trois hauteurs dans un triangle classique" n={++n}/>
            <p>Le point de concourance <MathJaxInline toShow={"$H$"}/> s'appelle l'orthocentre.</p>
            <p>Dans un triangle scalène, les trois hauteurs se trouvent à l'extérieur.</p>
            <ImageZoom src={heights2} name="Les trois hauteurs dans un triangle scalène" n={++n}/>
            <p>On les a représentées respectivement <MathJaxInline toShow={"$h_a, \\; h_b, \\; h_c$"}/>.</p>

            <Title1 title={"c) La médiane"} />
            <p>La médiane d'un triangle est le segment de droite projeté à partir d'un sommet sur la longueur opposée, et coupant cette longueur en deux.</p>
            <ImageZoom src={medianes} name="Les trois médianes dans un triangle" n={++n}/>
            <p>
                La concourance de ces trois médianes est appelée <MathJaxInline toShow={"$G$"}/>.
                {"\n"}C'est le centre de gravité du triangle. C'est-à-dire que si on le découpe sur une feuille de papier, c'est là où il faudrait planter la pointe d'un compas pour qu'il tienne droit.
            </p>
            <p>
                Les trois médianes se coupent respectivement à <MathJaxInline toShow={"$\\frac{2}{3}$"}/> du chemin en partant du sommet
                {"\n"}
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={ag}/> 
                <MathJaxDisplay toShow={bg}/> 
                <MathJaxDisplay toShow={cg}/> 
            </Container>
            <p>On a de même la relation d'Appolonius qui nous dit : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={appolonius}/> 
                <MathJaxDisplay toShow={appolonius2}/> 
                <MathJaxDisplay toShow={appolonius3}/> 
            </Container>

            <Title1 title={"d) La bissectrice"} />
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

            <Title1 title={"e) La médiatrice"} />
            <p>La médiatrice est la droite qui passe par le centre d'un côté de manière orthogonale.</p>
            <ImageZoom src={mediatrices} name="Les médiatrices dans un triangle" n={++n}/>
            <p>Son intersection est le centre du cercle circonscrit au triangle.</p>

            <Title1 title={"f) Loi des sinus"} />
            <p>La loi des sinus s'exprime de la manière suivante :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={sinusRelation}/> 
            </Container>
            <ImageZoom src={triangleSinusRelation} name="Loi des sinus" n={++n}/>
            <p>Au cas où vous ne seriez pas familier avec les sinus et cosinus, se référer au chapitre sur <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.TRIGO}`)} external>la trigonométrie</Link>.</p>
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

            <Title1 title={"g) Loi des cosinus"} />
            <p>
                La loi des cosinus, ou théorème d'Al-Kashi est la généralisation du <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`)} external>théorème de Pythagore</Link>.
                Là où dans un triangle <MathJaxInline toShow={"$\\{a, \\; b, \\; c\\}$"} /> rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> :
            </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pyth}/>
            </Container>
            
            <ImageZoom src={pythagore} name="Théorème de pythagore" n={++n}/>
            <p>Dans le cas d'un triangle quelconque :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={alKashiA}/>
                <MathJaxDisplay toShow={alKashiB}/>
                <MathJaxDisplay toShow={alKashiC}/>
            </Container>
            <ImageZoom src={alKashi} name="Théorème d'Al-Kashi" n={++n}/>
            <p>La démonstration de ce deux théorèmes se trouve dans le chapitre sur <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`)} external>théorème de Pythagore</Link>.</p>
        </>
    )
}

export default LeTriangle;
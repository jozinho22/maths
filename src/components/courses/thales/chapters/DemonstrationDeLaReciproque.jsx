import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import thalesReciprocal from '../assets/thalesReciprocal.png';

import Link from '../../../immutable/nav/Link';
import Title2 from '../../helpers/Title2';
import Aside from '../../helpers/Aside';
import Title1 from '../../helpers/Title1';

const DemonstrationDeLaReciproque = () => {

    var n = 0;
    var thales = "\\(\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE} \\)";
    var thalesRecip = "\\( BC \\parallel DE \\)";

    var pythRecip = "\\( FC^2 + AF^2 = AC ^2 \\)";
    var thalesBis = "\\(\\frac{AC}{AE} = \\frac{AF}{AG} = \\frac{FC}{AE} \\)";

    var AF = "\\(AF = \\frac{AC.AG}{AE} \\)";
    var FC = "\\(FC = \\frac{AC.GE}{AE} \\)";

    var AFCarrePlusFCCarre = "\\(AF^2 + FC^2 = \\left( \\frac{AC.AG}{AE} \\right)^2 + \\left( \\frac{AC.GE}{AE} \\right)^2 \\)";
    var AFCarrePlusFCCarre2 = "\\(AF^2 + FC^2 = AC^2 \\left(  \\frac{AG}{AE} \\right)^2 + AC^2 \\left( \\frac{GE}{AE} \\right)^2 \\)";
    var AFCarrePlusFCCarre3 = "\\(AF^2 + FC^2 = AC^2 \\left(  \\frac{AG^2}{AE^2} + \\frac{GE^2}{AE^2} \\right) \\)";
    var AFCarrePlusFCCarre4 = "\\(AF^2 + FC^2 = AC^2 \\left(  \\frac{AG^2 + GE^2 }{AE^2} \\right) \\)";
    
    var pyth = "\\(AG^2 + GE^2 = AE^2 \\)";
    
    var AFCarrePlusFCCarre5 = "\\(AF^2 + FC^2 = AC^2 \\left(  \\frac{AE^2}{AE^2} \\right) \\)";
    var AFCarrePlusFCCarre6 = "\\(AF^2 + FC^2 = AC^2 \\)";

    return (
        <>
            <p>Nous avons pu <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.THALES}/demonstration`} external>démontrer le théorème de Thalès</Link>, nous allons prouver sa réciproque. </p>
            <p>Nous allons prouver que si nous avons les relations suivantes : </p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={thales} />
            </Container>

            <p>Alors, </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={thalesRecip} />
            </Container>

            <Title1 title={"Démonstration de la réciproque du théorème de Thalès"} />
            <p>Pour cela, nous allons reprendre la même figure, et nous allons projeter <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>la hauteur</Link> <MathJaxInline toShow={"$AG$"} /> sur <MathJaxInline toShow={"$DE$"} />.</p>
            <ImageZoom src={thalesReciprocal} name="Démonstration de la réciproque du thèorème de Thalès" n={++n} />
            <p>Nous avons alors le triangle <MathJaxInline toShow={"$AGE$"} /> qui est rectangle en <MathJaxInline toShow={"$G$"} />.</p>
            <p>Nous allons tenter de démontrer que le triangle <MathJaxInline toShow={"$AFC$"} /> est aussi rectangle en <MathJaxInline toShow={"$F$"} />.</p>
            <p>Alors, nous aurons prouvé que les segments <MathJaxInline toShow={"$BC$"} /> et <MathJaxInline toShow={"$DE$"} /> sont parallèles.</p>
            
            <Title2 title={"Démonstration"} />
            <p>Nous tentons de montrer, par <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/demonstration-de-la-reciproque`} external>la réciproque du théorème de Pythagore</Link>, que si :</p>
            <MathJaxDisplay toShow={pythRecip} demo />
            <p>Alors, le triangle <MathJaxInline toShow={"$AFC$"} /> est rectangle en <MathJaxInline toShow={"$F$"} />.</p>
            <p>Nous démarrons de notre hypothèse, à savoir : </p>
            <MathJaxDisplay toShow={thales} demo />
            <p>Et par extension, précisément dans les triangles <MathJaxInline toShow={"$AFC$"} /> et <MathJaxInline toShow={"$AGE$"} />, on a :</p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={thalesBis} />
            </Container>
            <p>Alors, en arrangeant on a :</p>
            <MathJaxDisplay toShow={AF} fRef={1} demo />
            <MathJaxDisplay toShow={FC} fRef={2} demo />
            <p>Si l'on tente de calculer <MathJaxInline toShow={"$AF^2 + FC^2$"} />, on peut injecter les formules <MathJaxInline toShow={"$(1), (2)$"} />  :</p>
            <MathJaxDisplay toShow={AFCarrePlusFCCarre} demo />
            <MathJaxDisplay toShow={AFCarrePlusFCCarre2} demo />
            <MathJaxDisplay toShow={AFCarrePlusFCCarre3} demo />
            <MathJaxDisplay toShow={AFCarrePlusFCCarre4} demo fRef={3} />
            <Aside>
                <p>Comme <MathJaxInline toShow={"$AGE$"} /> est un triangle rectangle, par <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/demonstration`} external>le théorème de Pythagore</Link>, on peut dire que </p>
                <MathJaxDisplay toShow={pyth} demo fRef={4} />
            </Aside>
            <p>Alors, on inecjte <MathJaxInline toShow={"$(4)$"} /> dans <MathJaxInline toShow={"$(3)$"} /> :</p>
            <MathJaxDisplay toShow={AFCarrePlusFCCarre5} demo />
            <MathJaxDisplay toShow={AFCarrePlusFCCarre6} demo />
            <p>Par <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/demonstration-de-la-reciproque`} external>la réciproque du théorème de Pythagore</Link>, nous avons prouvé que le triangle <MathJaxInline toShow={"$AFC$"} /> était aussi rectangle en <MathJaxInline toShow={"$F$"} />.</p>
            <p>Les segments <MathJaxInline toShow={"$BC$"} /> et <MathJaxInline toShow={"$DE$"} /> sont alors perpendiculaires à un même segment <MathJaxInline toShow={"$AG$"} />, par conséquent ils sont parallèles entre eux.</p>
        </>
    );

}

export default DemonstrationDeLaReciproque;
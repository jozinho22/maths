import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import thales from '../assets/thales.png';

import thalesCorollaire from '../assets/thalesCorollaire.png';
import thalesCorollaire2 from '../assets/thalesCorollaire2.png';
import Link from '../../../immutable/nav/Link';
import Title1 from '../../helpers/Title1';

const CorollaireDuTheoreme = () => {

    var n = 0;
    var thalesTheorem = "\\( \\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE} \\)";
    var thalesTheoremMilieux = "\\( \\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE} =  \\frac{1}{2} \\)";
    var thalesTheoremMilieuxAB = "\\(  AB = \\frac{1}{2} AD   \\)";
    var thalesTheoremMilieuxAC = "\\(  AC = \\frac{1}{2} AE  \\)";
    var thalesTheoremMilieuxBC = "\\(  BC = \\frac{1}{2} DE   \\)";

    var thalesTheoremMilieuxExt = "\\( \\frac{BF}{DG} = \\frac{FC}{GE} = \\frac{AF}{AG} =  \\frac{1}{2} \\)";
    var thalesTheoremMilieuxExtBF = "\\( BF = \\frac{1}{2} DG  \\)";
    var thalesTheoremMilieuxExtFC = "\\(  FC = \\frac{1}{2} GE  \\)";
    var thalesTheoremMilieuxExtAF = "\\(  AF = \\frac{1}{2} AG \\)";

    return (
        <>
            <p>Le <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.THALES}/presentation`} external>théorème de Thalès</Link> nous permet d'obtenir une loi qui en découle.</p>
            <p>En effet, nous avons qu'il existe un rapport équivalent entre les différentes longueurs d'un triangle lorsqu'une droite parallèle coupe celui-ci.</p>
            
            <ImageZoom src={thales} name="Relations d'équivalence avec le théorème de Thalès" n={++n} />

            <p>On a les relations suivantes :</p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={thalesTheorem} />
            </Container>

            <Title1 title={"Loi des milieux"} />
            <p>Cette loi nous dit que si ce rapport commun est de moitié, alors le plus petit côté est le milieu du grand. </p>
            <ImageZoom src={thalesCorollaire} name="Corollaire du théorème - loi des milieux" n={++n} />
            <p>Soit, si </p>
            <MathJaxDisplay toShow={thalesTheoremMilieux} demo />
            <p>Alors </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={thalesTheoremMilieuxAB} />
                <MathJaxDisplay toShow={thalesTheoremMilieuxAC} />
                <MathJaxDisplay toShow={thalesTheoremMilieuxBC} />
            </Container>  
            <p>Et,</p>
            <p><MathJaxInline toShow={"$B$"} /> est le milieu de <MathJaxInline toShow={"$AD$"} />.</p> 
            <p><MathJaxInline toShow={"$C$"} /> est le milieu de <MathJaxInline toShow={"$AE$"} />.</p> 

            <Title1 title={"Loi des milieux - extension"} />  
            <p>Dans <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.THALES}/demonstration`} external>la démonstration du théorème de Thalès</Link>, nous avions projeté une <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>hauteur</Link> <MathJaxInline toShow={"$AG$"} /> sur <MathJaxInline toShow={"$DE$"} /> comme le dessin ci-dessous :</p>
            <ImageZoom src={thalesCorollaire2} name="Corollaire du théorème - loi des milieux (extension)" n={++n} />
            <p>Si en plus des relations précédentes, on a <MathJaxInline toShow={"$AG$"} /> comme <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/la-mediane-du-triangle`} external>médiane du triangle</Link>, alors : </p>
            <MathJaxDisplay toShow={thalesTheoremMilieuxExt} demo />
            <p>Alors </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={thalesTheoremMilieuxExtBF} />
                <MathJaxDisplay toShow={thalesTheoremMilieuxExtFC} />
                <MathJaxDisplay toShow={thalesTheoremMilieuxExtAF} />
            </Container> 
            <p>Et,</p> 
            <p><MathJaxInline toShow={"$F$"} /> est le milieu de <MathJaxInline toShow={"$AG$"} />.</p> 

            <Title1 title={"Généralisation"} /> 
            <p>Cette proportion va se conserver pour n'importe quelle proportion.</p>
        </>
    );

}

export default CorollaireDuTheoreme;
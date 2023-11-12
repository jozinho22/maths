import React from 'react';
import { Container } from 'react-bootstrap';

import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

import thales from '../assets/thales.png';
import thalesWithHeight from '../assets/thalesWithHeight.png';

import Link from '../../../immutable/nav/Link';
import Title2 from '../../helpers/Title2';
import Aside from '../../helpers/Aside';

const DemonstrationDuTheoreme = () => {

    var n = 0;
    var adgCos = "\\(cos(\\alpha) = \\frac{DG}{DA}\\)";
    var abfCos = "\\(cos(\\alpha) = \\frac{BF}{BA}\\)";
    var adgEquAbfCos = "\\(\\frac{DG}{AD} =\\frac{BF}{AB} \\)";
    var adgAbfRelationsCos = "\\(\\frac{AB}{AD} =\\frac{BF}{DG} \\)";

    var adgSin = "\\(sin(\\alpha) = \\frac{AG}{AD}\\)";
    var abfSin = "\\(sin(\\alpha) = \\frac{AF}{AB}\\)";
    var adgEquAbfSin = "\\(\\frac{AG}{AD} =\\frac{AF}{AB} \\)";
    var adgAbfRelationsSin = "\\(\\frac{AB}{AD} =\\frac{AF}{AG} \\)";

    var adgAbfDoubleEquiv = "\\(\\frac{AB}{AD} = \\frac{BF}{DG} = \\frac{AF}{AG} \\)";

    var ageAfcDoubleEquiv = "\\(\\frac{AC}{AE} = \\frac{FC}{GE} = \\frac{AF}{AG}  \\)";
    
    var equivGen = "\\(\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BF}{DG} = \\frac{FC}{GE} = \\frac{AF}{AG}  \\)";
    var equivGen2 = "\\(\\frac{AB}{AD} = \\frac{AC}{AE} \\)";
    var equivGen3 = "\\(\\frac{BF}{DG} = \\frac{FC}{GE} \\)";

    var aOverBEqCOverD = "\\(\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{ b + d}\\)";
    var aOverBEqCOverD_demo = "\\(\\frac{a}{b} = \\frac{c}{d} \\)";
    var aOverBEqCOverD_demo2 = "\\(ad = bc \\)";
    var aOverBEqCOverD_demo3 = "\\(ad + cd = bc + cd \\)";
    var aOverBEqCOverD_demo4 = "\\(d(a + c) = c(b + d) \\)";
    var aOverBEqCOverD_demo5 = "\\(\\frac{a + c}{b + d} = \\frac{c}{d} \\)";

    var equivGen4 = "\\(\\frac{BF}{DG} = \\frac{FC}{GE} = \\frac{BF + FC}{ DG + GE} \\)";
    var equivGen5 = "\\(\\frac{BF}{DG} = \\frac{FC}{GE} = \\frac{BC}{DE} \\)";

    var equivGenFinale = "\\(\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE} \\)";

    return (
        <>
            <p>Nous partons uniquement de l'hypothèse que les segments <MathJaxInline toShow={"$BC$"} /> et <MathJaxInline toShow={"$DE$"} /> sont parallèles entre eux.</p>
            <p>Pour prouver la véracité du thèorème, reprenons le triangle précédent, et ajoutons-y <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIANGLE}/la-hauteur-du-triangle`} external>la hauteur</Link> coupant <MathJaxInline toShow={"$BC$"} /> et <MathJaxInline toShow={"$DE$"} />. </p>
            <ImageZoom src={thalesWithHeight} name="Démonstration du thèorème de Thalès" n={++n} />
            <p>
               Cela va nous permettre d'y appliquer les lois de <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.TRIGO}`} external>la trigonométrie</Link>.
            </p>

            <Title2 title={"Trigonométrie dans les triangles de gauche"} />
            <p>On a pour les triangles de gauche <MathJaxInline toShow={"$ADG$"} /> et <MathJaxInline toShow={"$ABF$"} /> :</p>
            <MathJaxDisplay toShow={adgCos} demo />
            <MathJaxDisplay toShow={abfCos} demo />
            <p>Soit, on peut on dire que : </p>
            <MathJaxDisplay toShow={adgEquAbfCos} demo />
            <p>En inversant <MathJaxInline toShow={"$DG$"} /> et <MathJaxInline toShow={"$AB$"} />, on a alors la première équivalence : </p>
            <MathJaxDisplay toShow={adgAbfRelationsCos} fRef={1} demo />
            <p>En utilisant le sinus cette fois, on a :</p>
            <MathJaxDisplay toShow={adgSin} demo />
            <MathJaxDisplay toShow={abfSin} demo />
            <MathJaxDisplay toShow={adgEquAbfSin} demo />
            <p>On a alors une seconde équivalence : </p>
            <MathJaxDisplay toShow={adgAbfRelationsSin} fRef={2} demo />
            <p>
                Mais on remarque que dans <MathJaxInline toShow={"$(1)$"} /> et <MathJaxInline toShow={"$(2)$"} /> on a le même terme <MathJaxInline toShow={"$\\frac{AB}{AD}$"} />. 
                {"\n"} On peut donc conclure par équivalence deux-à-deux que :
            </p>
            <MathJaxDisplay toShow={adgAbfDoubleEquiv} fRef={3} demo />

            <Title2 title={"Trigonométrie dans les triangles de droite"} />
            <p>Dans le triangle de droite, nous allons appliquer le même procédé en nous servant de l'angle <MathJaxInline toShow={"$\\beta$"} />, ce qui va nous donner la double équivalence suivante : </p>
            <MathJaxDisplay toShow={ageAfcDoubleEquiv} fRef={4} demo />

            <Title2 title={"Équivalence générale"} />
            <p>On remarque à présent que dans <MathJaxInline toShow={"$(3)$"} /> et <MathJaxInline toShow={"$(4)$"} /> on a le même terme <MathJaxInline toShow={"$\\frac{AF}{AG}$"} />, ce qui va nous donner une nouvelle équivalence joignant les deux précédentes :</p>
            <MathJaxDisplay toShow={equivGen} fRef={5} demo />
            <p>Nous avons alors déjà prouvé que : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={equivGen2} />
            </Container>
            <p>Il reste alors à prouver que ces deux rapports sont aussi équivalents à <MathJaxInline toShow={"$\\frac{BC}{DE}$"} />.</p>
            <p>Nous disposons de cette expression :</p>
            <MathJaxDisplay toShow={equivGen3} demo />
            <Aside>
                <p>On sait que : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={aOverBEqCOverD} />
                </Container>
                <Title2 title={"Démonstration"} />
                <MathJaxDisplay toShow={aOverBEqCOverD_demo} demo />
                <MathJaxDisplay toShow={aOverBEqCOverD_demo2} demo />
                <MathJaxDisplay toShow={aOverBEqCOverD_demo3} demo />
                <MathJaxDisplay toShow={aOverBEqCOverD_demo4} demo />
                <MathJaxDisplay toShow={aOverBEqCOverD_demo5} demo />
            </Aside>
            <p>Avec la démonstration ci-dessus dans l'encadré, on en déduit que : </p>
            <MathJaxDisplay toShow={equivGen4} demo />
            <p>Soit : </p>
            <MathJaxDisplay toShow={equivGen5} demo />

            <p>En utilisant la grande équivalence <MathJaxInline toShow={"$(5)$"} />, on en conclut finalement que : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={equivGenFinale} />
            </Container>
            <ImageZoom src={thales} name="Relations d'équivalence avec le théorème de Thalès" n={++n} />

        </>
    );

}

export default DemonstrationDuTheoreme;
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../../mathjax-display/MathJaxInline';

import ImageZoom from '../../../helpers/ImageZoom';
import PagesConstants from '../../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../../helpers/CoursesConstants';
import square from '../assets/square.png';
import squareWithDiag from '../assets/squareWithDiag.png';

import Link from '../../../../immutable/nav/Link';
import Title1 from '../../../helpers/Title1';
import Title2 from '../../../helpers/Title2';

const LeCarre = () => {

    var n = 0;
    var sCarre = "\\(S_{carre} = c^2\\)";

    var cTo2c = "\\(c \\to 2c\\)";
    var sDoubleArea = "\\(S_{carre(2c)} = (2c)^2\\)";
    var sDoubleAreaDev = "\\(S_{carre(2c)} = 4c^2\\)";

    var diag =  "\\(d_1= \\sqrt{c^2 + c^2}\\)";
    var diagBis =  "\\(d_2= \\sqrt{c^2 + c^2}\\)";
    var diag2 =  "\\(d = \\sqrt{2c^2}\\)";
    var diag3 =  "\\(d = c\\sqrt{2}\\)";

    var demiDiag =  "\\(\\frac{d}{2} = \\sqrt{\\left(\\frac{c}{2}\\right)^2 + \\left(\\frac{c}{2}\\right)^2}\\)";
    var demiDiag2 =  "\\(\\frac{d}{2} = \\sqrt{\\left(\\frac{c^2}{4}\\right) + \\left(\\frac{c^2}{4}\\right)}\\)";
    var demiDiag3 =  "\\(\\frac{d}{2} = \\sqrt{2 \\left(\\frac{c^2}{4}\\right) }\\)";
    var demiDiag4 =  "\\(\\frac{d}{2} = c \\sqrt{ \\frac{1}{2} }\\)";
    var demiDiag5 =  "\\(\\frac{d}{2} = c \\frac{1}{\\sqrt{2}} \\)";
    var demiDiag6 =  "\\(\\frac{d}{2} = c \\frac{\\sqrt{2}}{2} \\)";

    var angDroit = "\\(c^2 = \\left(\\frac{d}{2}\\right)^2 + \\left(\\frac{d}{2}\\right)^2 \\)";
    var angDroit2 = "\\(c^2 = \\left(c \\frac{\\sqrt{2}}{2}\\right)^2 + \\left(c \\frac{\\sqrt{2}}{2}\\right)^2 \\)";
    var angDroit3 = "\\(c^2 =   \\frac{2}{4} c^2 +  \\frac{2}{4} c^2 \\)";
    var angDroit4 = "\\(c^2 = \\frac{c^2}{2} + \\frac{c^2}{2} \\)";
    var angDroit5 = "\\(c^2 =  c^2 \\)";

    return (
        <>
            <p>Le carré est une forme à deux dimensions avec quatre côtés de longueur unique <MathJaxInline toShow={"$c$"}/></p>
            <ImageZoom src={square} name="Le carré" n={++n}/>

            <Title1 title={"a) La surface du carré"} />
            <Container className="Focus">
                <MathJaxDisplay toShow={sCarre}/>
            </Container>
            <p>
                Si alors on double seulement le côté, la surface sera 4 fois plus grande.
            </p>
            <MathJaxDisplay toShow={cTo2c} demo />
            <MathJaxDisplay toShow={sDoubleArea} demo />
            <MathJaxDisplay toShow={sDoubleAreaDev} demo />
            
            <Title1 title={"b) Propriétés du carré"} />
            <p>
                <u>Propriété 1 :</u> ses diagonales sont de longueurs égales
                {"\n"} <u>Propriété 2 :</u> ses diagonales se coupent au centre de l'objet et au milieu de ces dernières
                {"\n"} <u>Propriété 3 :</u> ses diagonales forment quatre angles droit
            </p>
            <ImageZoom src={squareWithDiag} name="Le carré avec ses diagonales" n={++n}/>
            
            <Title2 title={"Démonstration"} />
            <p>Appelons les diagonales <MathJaxInline toShow={"$d_1$"}/> et <MathJaxInline toShow={"$d_2$"}/>. </p>
            <p>
                <u>Propriété 1 : </u>
                {"\n"} Grâce au <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link>, on peut calculer que :
                <MathJaxDisplay toShow={diag} demo />
                <MathJaxDisplay toShow={diagBis} demo />
                Elles sont alors égales, appelons les <MathJaxInline toShow={"$d$"}/>.
                <MathJaxDisplay toShow={diag2} demo />
                Soit : 
                <Container className="Focus">
                    <MathJaxDisplay toShow={diag3} fRef={1}/>
                </Container>
            </p>
            <p>
                <u>Propriété 2 : </u>
                {"\n"} Encore grâce au <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link>, on voit que :
                {"\n"} Si l'on calcule la demi-diagonale en utilisant la moitié du côté du carré, on a :
                <MathJaxDisplay toShow={demiDiag} demo />
                <MathJaxDisplay toShow={demiDiag2} demo />
                <MathJaxDisplay toShow={demiDiag3} demo />
                <MathJaxDisplay toShow={demiDiag4} demo />
                <MathJaxDisplay toShow={demiDiag5} demo />
                Soit : 
                <Container className="Focus">
                    <MathJaxDisplay toShow={demiDiag6} fRef={2}/>
                </Container>
                En divisant (1) par 2, on retombe bien sur la moitié de notre demi-diagonale.
            </p>
            <p>
                <u>Propriété 3 : </u>
                {"\n"} Nous allons maintenant utiliser la réciproque du <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}`} external>théorème de Pythagore</Link>.
                {"\n"} S'il existe des angles droits au niveau de l'intersection, on aura alors :
                <MathJaxDisplay toShow={angDroit} demo />
                En injectant (2) dans l'équation, on a : 
                <MathJaxDisplay toShow={angDroit2} demo />
                <MathJaxDisplay toShow={angDroit3} demo />
                <MathJaxDisplay toShow={angDroit4} demo />
                <MathJaxDisplay toShow={angDroit5} demo />
                On a donc bien quatre angles droits à l'intersection des diagonales.
            </p>
        </>
    )
}

export default LeCarre;
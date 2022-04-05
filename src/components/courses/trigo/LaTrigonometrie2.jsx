import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../mathjax-display/MathJaxInline';
import CircleTrigoValuesTable from './CircleTrigoValuesTable';
import ImageZoom from '../ImageZoom';
import circleTrigo from './assets/circleTrigo.png';
import circleTrigoValues from './assets/circleTrigoValues.png';
import CircleTrigoFormulasTable from './CircleTrigoFormulasTable';

const LaTrigonometrie = () => {

    var n = 0;
    var pyth = "\\((cos(\\alpha))^2 + (sin(\\alpha))^2 = 1\\)";
    var pyth2 = "\\(cos^2(\\alpha)+ sin^2(\\alpha) = 1\\)";

    var cosAplusB = "\\(cos(\\alpha + \\beta) = cos(\\alpha) cos(\\beta) - sin(\\alpha) sin(\\beta) \\)";
    var cosAminusB = "\\(cos(\\alpha - \\beta) = cos(\\alpha) cos(\\beta) + sin(\\alpha) sin(\\beta) \\)";
    var sinAplusB = "\\(sin(\\alpha + \\beta) = sin(\\alpha) cos(\\beta) + sin(\\beta) cos(\\alpha) \\)";
    var sinAminusB = "\\(sin(\\alpha - \\beta) = sin(\\alpha) cos(\\beta) - sin(\\beta) cos(\\alpha) \\)";

    var cos2a = "\\(cos(2\\alpha) = cos^2(\\alpha) - sin^2(\\alpha)  \\)";
    var cos2aBis = "\\(cos(2\\alpha) = 2cos^2(\\alpha) - 1  \\)";
    var cos2aTer = "\\(cos(2\\alpha) = 1 - 2sin^2(\\alpha) \\)";
    var sin2a =  "\\(sin(2\\alpha) = 2 sin(\\alpha)cos(\\alpha) \\)";

    var cosAcosB =  "\\(cos(\\alpha)cos(\\beta) = \\frac{1}{2} (cos(\\alpha - \\beta) + cos(\\alpha + \\beta)) \\)";
    var sinAsinB =  "\\(sin(\\alpha)sin(\\beta) = \\frac{1}{2} (cos(\\alpha - \\beta) - cos(\\alpha + \\beta)) \\)";
    var sinAcosB =  "\\(sin(\\alpha)cos(\\beta) = \\frac{1}{2} (sin(\\alpha + \\beta) + sin(\\alpha - \\beta)) \\)";
    var cos22a =  "\\(cos(2\\alpha) = \\frac{1 + cos(2\\alpha)}{2} \\)";
    var sin22a =  "\\(sin(2\\alpha) = \\frac{1 - cos(2\\alpha)}{2} \\)";

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <p className="Title">La trigonométrie</p>
            <Container className="CoursesContainer">  
                <p>
                    C'est dans le cercle que se définissent les notions de cosinus et de sinus.
                    {"\n"}{"\n"}
                    Le cosinus est le projeté orthogonal de l'interception entre un cercle de rayon <MathJaxInline toShow="$R = 1$" /> et son rayon, sur l'axe horizontal <MathJaxInline toShow="$x$" />.
                    {"\n"}{"\n"}
                    Le sinus est le même principe mais appliqué sur l'axe vertical <MathJaxInline toShow="$y$" />.   
                </p>
                <ImageZoom src={circleTrigo} name="Cosinus et sinus" n={++n} />
                <p>
                    Dans le cercle trigonométrique, on utilisera π comme une mesure d'angle.
                    {"\n"}
                    L'unité est le radian, où un tour complet vaut <MathJaxInline toShow={"$2 \\pi$"} />  radians.
                    {"\n"}
                    Après un tour complet du cercle, les valeurs se répètent. C'est pour cela que les valeurs sont tous à  <MathJaxInline toShow={"$2 k\\pi$"} /> près.
                    {"\n"}
                    <MathJaxInline toShow={"$k$"} /> étant un entier naturel commençant à 0.
                </p>
                <Button 
                    className="DefaultButton" 
                    href="/cours/le-nombre-pi" target="_blank" >
                        Chapitre sur le nombre π
                </Button>
                <ImageZoom src={circleTrigoValues} name="Les angles remarquables sur le cercle" n={++n} />

                <p className="Title1">Valeurs de cos(α) et sin(α)</p>
                <p>On voit que certaines valeurs se répetent : <MathJaxInline toShow={"$\\frac{1}{2}$"} />, <MathJaxInline toShow={"$\\frac{\\sqrt2}{2}$"} /> et <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} /> </p>
                <CircleTrigoValuesTable />
                <p className="Title1">Formules de cos(α) et sin(α) en fonction de π </p>
                <p>On observant la figure 2, on voit que certaines valeurs se répétent, voici un tableau récapitulatif du comportement : </p>
                <CircleTrigoFormulasTable />

                <p className="Title1">Pythagore appliqué à la trigonométrie</p>
                <p>Sur la figure 1, on voit que nous sommes dans le cas d'un triangle rectangle formé par <MathJaxInline toShow={"$cos(\\alpha)$"} />, <MathJaxInline toShow={"$sin(\\alpha)$"} /> et son hypothénuse <MathJaxInline toShow={"$R$"} />.
                 {"\n"}Grâce au théorème de Pythagore, on sait que :</p>
                <MathJaxDisplay toShow={pyth} />
                <p>Mais voici plutôt la façon exacte de noter cette formule :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={pyth2} />
                </Container>
                <p className="Title1">Formules d'additions</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cosAplusB} />
                    <MathJaxDisplay toShow={cosAminusB} />
                    <MathJaxDisplay toShow={sinAplusB} />
                    <MathJaxDisplay toShow={sinAminusB} />
                </Container>
                <p className="Title1">Formules de duplication</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cos2a} />
                    <MathJaxDisplay toShow={cos2aBis} />
                    <MathJaxDisplay toShow={cos2aTer} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={sin2a} />
                </Container>
                <p className="Title1">Formules de linéarisation</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cosAcosB} />
                    <MathJaxDisplay toShow={sinAsinB} />
                    <MathJaxDisplay toShow={sinAcosB} />
                </Container>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cos22a} />
                    <MathJaxDisplay toShow={sin22a} />
                </Container>
                <p>À suivre : la tangente...</p>
            </Container>
        </>
    );
}

export default LaTrigonometrie;
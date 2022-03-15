import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../mathjax-display/MathJaxInline';
import CircleTrigoValuesTable from './CircleTrigoValuesTable';
import ImageZoom from '../ImageZoom';
import circleTrigo from './assets/circleTrigo.png';
import circleTrigoValues from './assets/circleTrigoValues.png';

const LaTrigonometrie = () => {
    var n = 0;
    var pyth = "\\(cos(\\alpha)^2 + sin(\\alpha)^2 = 1\\)";

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
                <p>Dans le cercle trigonométrique, on utilisera π comme une mesure d'angle.
                {"\n"}
                L'unité est le radian, où un tour complet vaut <MathJaxInline toShow={"$2 \\pi$"} />  radians.
                </p>
                <ImageZoom src={circleTrigoValues} name="Les angles remarquables sur le cercle" n={++n} />

                <CircleTrigoValuesTable />
                <p>Sur la figure 1, grâce au théorème de Pythagore, on sait que :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={pyth} />
                </Container>

            </Container>
        </>
    )
}

export default LaTrigonometrie;
import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import circlePi from '../assets/circlePi.png';

const Presentation = () => {

    var n = 0;
    var p = "\\( P = 2\\pi R \\)"
    var piS2 = "\\(S = \\pi {R^2} \\)"

    return (
        <>
            <p>Le nombre <MathJaxInline toShow={"$ \\pi $"} /> (pi), aussi appelée constante d'Archimède, est un nombre qui permet de mesurer le périmètre ou l'aire d'un cercle.</p>  
            <p>Appellons <MathJaxInline toShow={"$ P $"} /> le périmètre et <MathJaxInline toShow={"$ S $"} /> l'aire du cercle.</p>
            <Title1 title={"Périmètre du cercle"} />
            <Container className="Focus">
                <MathJaxDisplay toShow={p} />
            </Container>
            
            <Title1 title={"Surface du cercle"} />
            <Container className="Focus">
                <MathJaxDisplay toShow={piS2} />
            </Container>
            
            <p>C'est l'une des constantes les plus importantes des mathématiques, car on la retrouve impliquée dans de nombreuses formules.</p>
            <p>
                Sa valeur approchée est de <MathJaxInline toShow="$ 3,14116...etc $" /> . 
                {"\n"}C'est le demi-périmètre d'un cercle de rayon <MathJaxInline toShow="$ R=1 $" />.
                {"\n"}En revanche, c'est un nombre irrationnel donc on peut le calculer avec une précision à l'infini !
            </p>
            <ImageZoom src={circlePi} name="Pi sur le demi-cercle de rayon R = 1" n={++n} />

            <p>Mais comment fait-on pour calculer la valeur de <MathJaxInline toShow={"$ \\pi $"} /> soi même ? </p>
            <p>En voici un exemple :</p>
        </>
    )

}

export default Presentation;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const FormuleDeMoivre = () => {

    var moivre = "\\( \\left[ cos(\\theta) + i.sin(\\theta) \\right]^n = cos(n\\theta) + i.sin(n\\theta), \\enspace avec \\enspace(n \\in \\mathbb{Z}) \\)"; 

    var argZPuissN = "\\( arg(z^n) = n.arg(z), \\enspace avec \\enspace(n \\in \\mathbb{Z}) \\)"; 
    var zPuissN = "\\( \\Biggl\\{ \\begin{gather*} |z^n| = |z|^n = 1 \\\\ arg(z^n) = n.arg(z)= n\\theta \\end{gather*}  \\)"; 

    var zPuissN2 = "\\( z^n = cos(n\\theta) + i.sin(n\\theta)\\)"; 

    return  <>
                <Title1 title={"Formule de Moivre"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={moivre} />
                </Container>
                
                <Title2 title={"Démonstration"} />
                <p>On sait que :</p>
                <MathJaxDisplay toShow={argZPuissN} demo />
                <p>Posons <MathJaxInline toShow={"$  z = cos(\\theta) + i.sin(\\theta) $"} />.</p>
                <p>Ici, <MathJaxInline toShow={"$  |z| = 1 $"} />.</p>
                <p>D'autre part, :</p>
                <MathJaxDisplay toShow={zPuissN} demo />
                <p>Soit </p>
                <MathJaxDisplay toShow={zPuissN2} demo />
            </>
}

export default FormuleDeMoivre;
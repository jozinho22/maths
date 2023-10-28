import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const Presentation = () => {

    var prim = "\\( \\forall x \\in I, \\enspace F'(x) = f(x) \\)";
    var primExample1 = "\\( \\forall x \\in I, \\enspace g(x) = x^2, \\enspace G(x) = \\frac{1}{3}x^3 + K \\)";
    var primExample2 = "\\( G'(x) = \\frac{1}{3}.3x^2 = x^2 \\)";
    var diffPrim = "\\( F_1(x) - F_2(x) = C \\enspace (avec \\enspace C \\in \\mathbb{R}) \\)";

    return  <>
                <p>
                    La primitivation est une notion clef dont les fondements reposent sur la dérivation.
                </p>
                <p>
                   On parlera de primitive pour désigner le procédé inverse de la dérivation, et on parlera d'intégration pour le calcul d'une aire sous la courbe.
                </p>
                <p>
                    Soit <MathJaxInline toShow={"$ f $"} /> une fonction continue sur un intervalle <MathJaxInline toShow={"$ I \\in \\mathbb{R} $"} />,
                    {"\n"}On note <MathJaxInline toShow={"$ F $"} /> sa primitive si :
                </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={prim} />  
                </Container>
                <p>On pourra avoir par exemple :</p>
                <MathJaxDisplay toShow={primExample1} demo /> 
                <p>Les primitives possèdent toujours une constante dans leur expression. En effet, redérivant la constante va s'annuler.</p>
                <MathJaxDisplay toShow={primExample2} demo /> 
                <p>Il existe alors une infinité de primitives pour une fonction donnée, toutes à une constante près.</p>
                <p>Alors, s'il existe deux primitives <MathJaxInline toShow={"$ F_1 $"} /> et <MathJaxInline toShow={"$ F_2 $"} /> pour une fonction <MathJaxInline toShow={"$ f $"} /> donnée :</p>
                <MathJaxDisplay toShow={diffPrim} demo />            
            </>
}

export default Presentation;
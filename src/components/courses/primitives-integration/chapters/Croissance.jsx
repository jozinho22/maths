import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const Croissance = () => {

    var ineqfg = "\\(  f(t) \\leq g(t) \\)";
    var intIneqfg = "\\(  \\int_a^b f(t)dt \\leq \\int_a^b g(t)dt \\)";

    var ineqfgDemo = "\\( \\Longleftrightarrow f(t) - g(t) \\leq 0 \\)";
    var ineqfgDemo2 = "\\( \\Longleftrightarrow  \\int_a^b \\Bigl(f(t) - g(t)\\Bigr) dt \\leq 0 \\)";
    var ineqfgDemo3 = "\\( \\Longleftrightarrow  \\int_a^b f(t)dt - \\int_a^b g(t) dt \\leq 0 \\)";

    return  <>
                <p>Soit <MathJaxInline toShow={"$ f, g $"} /> deux fonctions continues sur un intervalle <MathJaxInline toShow={"$ I = [a, b] $"} /> et <MathJaxInline toShow={"$ a, b $"} /> deux réels.</p>
                <p>Si : </p>
                <MathJaxDisplay toShow={ineqfg} demo /> 
                <p>Alors,</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={intIneqfg} />  
                </Container>

                <Title1 title="Démonstration" />
                <p>Soit <MathJaxInline toShow={"$ f, g $"} /> deux fonctions continues sur un intervalle <MathJaxInline toShow={"$ I = [a, b] $"} /> et <MathJaxInline toShow={"$ a, b $"} /> deux réels.</p>
                <p><MathJaxInline toShow={"$ \\forall t \\in [a, b] $"} />, on a : </p>
                <MathJaxDisplay toShow={ineqfg} demo /> 
                <MathJaxDisplay toShow={ineqfgDemo} demo /> 
                <p>Avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PRIMITIVES_INTEGRATION}/positivite`} external>la positivité de l'intégrale</Link> : </p>
                <MathJaxDisplay toShow={ineqfgDemo2} demo /> 
                <p>Avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PRIMITIVES_INTEGRATION}/linearite`} external>la linéarité de l'intégrale</Link> : </p>
                <MathJaxDisplay toShow={ineqfgDemo3} demo /> 
                <p>Et donc : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={intIneqfg} />  
                </Container>
            </>
}

export default Croissance;
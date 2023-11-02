import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const FormeExponentielle = () => {

    var eiTheta = "\\( e^{i\\theta} = cos(\\theta) + i . sin(\\theta) \\)"; 

    var eiPiOver4 = "\\( e^{i\\frac{\\pi}{4}} = cos \\left(\\frac{\\pi}{4}\\right) + i . sin \\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} + i.\\frac{\\sqrt{2}}{2} = 1 + i \\)"; 
    var eiPi = "\\( e^{i\\pi} = cos(\\pi) + i . sin(\\pi) = - 1  \\)"; 

    var ei0 = "\\( e^{i 0} = 1 \\)"; 
    var eiPiOver2 = "\\( e^{i \\frac{\\pi}{2}} = i \\)"; 
    var eiPi_ = "\\( e^{i\\pi} = - 1  \\)"; 
    var eiMinusPiOver2 = "\\( e^{-i \\frac{\\pi}{2}} = -i \\)";

    var prop1 = "\\( |z| = R, \\enspace arg(z) = \\theta \\Longleftrightarrow z = R.e^{i\\theta} \\)"; 
    var prop2 = "\\( e^{i\\theta} = e^{i\\theta'} \\Longleftrightarrow \\theta = \\theta' \\enspace (+2k\\pi) \\)"; 
    
    var prop3 = "\\( \\frac{1}{ e^{i\\theta}} = e^{-i\\theta} = \\overline{e^{i\\theta}} \\)";
    var prop3Demo = "\\( e^{-i\\theta} = cos(-\\theta) + i.sin(-\\theta) \\)"; 
    var prop3Demo2 = "\\( e^{-i\\theta} = cos(\\theta) - i.sin(\\theta) \\)"; 
    var prop3Demobis = "\\( \\frac{1}{ e^{i\\theta}} = \\frac{1}{ cos(\\theta) + i.sin(\\theta)} = \\frac{ cos(\\theta) - i.sin(\\theta)}{ cos^2(\\theta) + i.sin^2(\\theta)} \\)"; 
    var prop3Demobis2 = "\\( \\frac{1}{ e^{i\\theta}} = cos(\\theta) - i.sin(\\theta) \\)"; 

    var prop4 = "\\( e^{i\\theta}.e^{i\\theta'} = e^{i(\\theta + \\theta')}\\)";
    var prop4bis = "\\( \\frac{e^{i\\theta}}{e^{i\\theta'}}= e^{i(\\theta - \\theta')}\\)";
    var prop4ter = "\\( \\left(e^{i\\theta}\\right)^n = e^{ni\\theta} \\enspace (Moivre)\\)";

    return  <>
                <p>La forme exponentielle est une autre écriture de la forme trigonométrique.</p>
                <Title1 title={"Définition"} />

                <Container className="Focus">
                    <MathJaxDisplay toShow={eiTheta} />
                </Container>

                <p><MathJaxInline toShow={"$  e^{i\\theta} $"} /> se lit "<MathJaxInline toShow={"$  e$"} /> puissance <MathJaxInline toShow={"$\\theta$"} />" ou "exponentielle <MathJaxInline toShow={"$i\\theta$"} />".</p>
                <p><MathJaxInline toShow={"$  e^{i\\theta} $"} /> est le complexe de module <MathJaxInline toShow={"$  1 $"} /> et d'argument <MathJaxInline toShow={"$  \\theta $"} />.</p>
                
                <Title2 title={"Exemples"} />
                <MathJaxDisplay toShow={eiPiOver4} demo />
                <MathJaxDisplay toShow={eiPi} demo />
                
                <Container className="Focus">
                    <MathJaxDisplay toShow={ei0} />
                    <MathJaxDisplay toShow={eiPiOver2} />
                    <MathJaxDisplay toShow={eiPi_} />
                    <MathJaxDisplay toShow={eiMinusPiOver2} />
                </Container>

                <Title1 title={"Propriétés"} />

                <Title2 title={"Propriété 1"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop1} />
                </Container>

                <Title2 title={"Propriété 2"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop2} />
                </Container>

                <Title2 title={"Propriété 3"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop3} />
                </Container>
                <p>Démonstration : </p>
                <MathJaxDisplay toShow={prop3Demo} demo />
                <MathJaxDisplay toShow={prop3Demo2} demo />
                <p>Par ailleurs, </p>
                <MathJaxDisplay toShow={prop3Demobis} demo />
                <MathJaxDisplay toShow={prop3Demobis2} demo />

                <Title2 title={"Propriété 4"} />
                <p>Les formules de <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.COMPLEXES}/forme-trigonometrique`} external>la forme trigonométrique</Link> deviennent :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop4} />
                    <MathJaxDisplay toShow={prop4bis} />
                    <MathJaxDisplay toShow={prop4ter} />
                </Container>
            </>
}

export default FormeExponentielle;
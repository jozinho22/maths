import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import pathBuilder from '../../../helpers/pathBuilder';

const DeriveeDeNPuissanceX = () => {

    var nPuissanceX = "\\( \\forall x \\in \\mathbb{R}, \\enspace f(x)= n^x\\)";
    var nPuissanceXPrim = "\\( (n^x)' = ln(n).n^x \\)";
    var nPuissanceXPrimDemo = "\\( (n^x)' = lim_{ h \\to 0} \\enspace \\frac{n^{x+h} - n^{h}}{h}\\)";
    var nPuissanceXPrimDemo2 = "\\( (n^x)' = \\left(e^{ln(n^x)}\\right)' \\)";
    var nPuissanceXPrimDemo3 = "\\( (n^x)' = \\left(e^{x.ln(n)}\\right)' \\)";
    var nPuissanceXPrimDemo4 = "\\(  (n^x)' = (x.ln(n))'.e^{x.ln(n)} \\)";
    var nPuissanceXPrimDemo5 = "\\(  (n^x)' = ln(n).(e^{ln(n)})^x \\)";

    return  <>
                <p>
                    On définit la fonction suivante :
                </p>
                <MathJaxDisplay toShow={nPuissanceX} demo /> 
                <p>Elle admet pour dérivée :</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={nPuissanceXPrim} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <p>Avec la définition formelle de la dérivée, nous avons :</p>
                <MathJaxDisplay toShow={nPuissanceXPrimDemo} demo /> 
                <p>Nous nous retrouvons ici bloqué car nous ne pouvons pas directement éliminer <MathJaxInline toShow={"$ h $"} />.</p> 
                <p>Nous allons alors procéder d'une autre manière, en utilisant une astuce mathématique.</p>
                <p>On sait que : </p>
                <MathJaxDisplay toShow={nPuissanceXPrimDemo2} demo />  
                <p>Or, on sait que <MathJaxInline toShow={"$ ln(n^x) = x.ln(n) $"} />.</p>
                <p>Soit :</p>
                <MathJaxDisplay toShow={nPuissanceXPrimDemo3} demo />  
                <p>De même, on sait que <MathJaxInline toShow={"$ (e^u)' = u'.e^u $"} /> avec les formules de <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/tableau-recap-operations-compositions-sur-les-derivees`)} external>dérivées composées </Link> :</p>
                <p><MathJaxInline toShow={"$ n $"} /> étant une constante par rapport à <MathJaxInline toShow={"$ x $"} />, on a </p>
                <MathJaxDisplay toShow={nPuissanceXPrimDemo4} demo /> 
                <p>On sait que la fonction <MathJaxInline toShow={"$ e^x $"} /> se comporte comme <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PUISSANCES}`)} external>une puissance de x </Link>, nous allons alors utiliser <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/puissance-de-puissances`)} external>une des formules</Link>:</p>
                <MathJaxDisplay toShow={nPuissanceXPrimDemo5} demo /> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={nPuissanceXPrim} />  
                </Container>
            </>
}

export default DeriveeDeNPuissanceX;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const DeriveeDeLN = () => {

    var lnX = "\\( \\forall x \\in \\mathbb{R}_+, \\enspace f(x) = ln(x) \\)";

    var reciprocalRelation = "\\( \\Biggl\\{\\begin{align*} \\forall x \\in \\mathbb{R}_+, \\enspace e^{ln(x)} =  x \\\\ \\forall x \\in \\mathbb{R}, \\enspace ln(e^x) =  x \\end{align*} \\)";

    var lnXPrim = "\\( (ln(x))' = \\frac{1}{x} \\)";
    var lnXPrimDemo = "\\( (ln(x))' = lim_{ h \\to 0} \\enspace \\frac{ln(x+h) - ln(x)}{h}\\)";
   
    var reciproqueDerivee = "\\((g^{-1})'(x) = \\frac{1}{g' \\circ g^{-1}(x)} \\)";
    var reciproqueDeriveeLn = "\\(( ln)'(x) = \\frac{1}{e^x \\circ ln(x)} \\)";
    var reciproqueDeriveeLn2 = "\\((ln)'(x) = \\frac{1}{e^{ln(x)}}  \\)";

    return  <>
                <p>
                    On définit la fonction logarithme népérien de la manière suivante :
                </p>
                <MathJaxDisplay toShow={lnX} demo /> 
                
                <p>Elle est la fonction réciproque de la fonction exponentielle, on a alors les deux relations de réciprocité :</p>
                <MathJaxDisplay toShow={reciprocalRelation} demo /> 

                <p>Elle admet pour dérivée :</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={lnXPrim} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <p>Avec la définition formelle de la dérivée, nous avons :</p>
                <MathJaxDisplay toShow={lnXPrimDemo} demo /> 
                <p>On ne peut rien faire de spécial avec une formule de cette forme.</p> 
                <p>Nous allons alors procéder d'une autre manière, en utilisant <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/derivee-de-fonction-reciproque`} external>la formule des dérivées de fonctions réciproques</Link>.</p>
                
                <p>Soit <MathJaxInline toShow={"$ g(x) = e^x $"} /> une fonction, et de fait <MathJaxInline toShow={"$ g^{-1}(x) = ln(x) $"} /> sa réciproque.</p>
                <MathJaxDisplay toShow={reciproqueDerivee} demo /> 
                <MathJaxDisplay toShow={reciproqueDeriveeLn} demo /> 
                <MathJaxDisplay toShow={reciproqueDeriveeLn2} demo /> 
                <Container className="Focus">
                    <MathJaxDisplay toShow={lnXPrim} />  
                </Container>
            </>
}

export default DeriveeDeLN;
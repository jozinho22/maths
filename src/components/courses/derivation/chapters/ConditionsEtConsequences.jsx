import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';


const ConditionsEtConsequences = () => {

    var derivabilityCondition = "\\(lim_{h \\to 0} \\enspace  \\frac{f(x+h) - f(x)}{h} = a, \\enspace (avec \\enspace a \\in  \\mathbb{R}) \\)";

    var derivableImpliesContinue = "\\(f \\enspace d \\acute{e} rivable \\enspace en \\enspace a \\implies f \\enspace continue \\enspace en \\enspace a\\)";
    
    var nonContinueImpliesNonDerivable = "\\(f \\enspace non \\enspace continue \\enspace en \\enspace a \\implies f \\enspace non \\enspace d \\acute{e} rivable \\enspace en \\enspace a \\)";

    return  <>
                <Title1 title={"Condition à la dérivabilité"} />
                <p>On dit qu'une fonction est dérivable si et seulement si le nombre dérivée de la fonction <MathJaxInline toShow={"$ f$"} /> au point d'abscisse <MathJaxInline toShow={"$ a $"} />, c'est-à-dire <MathJaxInline toShow={"$ f'(a) $"} />,  est un nombre réel.</p>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> est dérivable en <MathJaxInline toShow={"$ a $"} /> si et seulement si :</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={derivabilityCondition} />  
                </Container>

                <Title1 title={"La dérivabilité implique la continuité"} />
                <p>Toute fonction dérivable en <MathJaxInline toShow={"$ a $"} /> implique que la fonction est continue à ce point <MathJaxInline toShow={"$ a $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={derivableImpliesContinue} />  
                </Container>
                <p>Par contraposée, toute fonction qui n'est pas continue en un point <MathJaxInline toShow={"$ a $"} /> n'est pas dérivable sur ce point <MathJaxInline toShow={"$ a $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={nonContinueImpliesNonDerivable} />  
                </Container>
                <p>Attention, une fonction peut cependant être continue mais non dérivable (exemple : la fonction aleur absolue, <MathJaxInline toShow={"$ x \\longmapsto | x | $"} />, en <MathJaxInline toShow={"$ a = 0 $"} />).</p>
            </>
}

export default ConditionsEtConsequences;

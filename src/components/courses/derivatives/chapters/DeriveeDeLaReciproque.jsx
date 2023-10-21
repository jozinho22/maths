import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Aside from '../../helpers/Aside';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Title1 from '../../helpers/Title1';

const DeriveeDeLaReciproque = () => {
    
    var reciproque = "\\( \\forall y \\in J, \\enspace f^{-1}(y) = x \\)";
    var reciproque2 = "\\( \\forall x \\in I, \\enspace f^{-1}(f(x)) = x \\)";
    var reciproque3 = "\\(\\enspace f^{-1}(f(x)) = f(f^{-1}(x)) = x \\)";

    var reciproqueDecortX = "\\( x \\longmapsto f(x) \\enspace \\longmapsto  \\enspace \\enspace \\enspace  f^{-1}(f(x)) = x \\)";
    var reciproqueDecortX2 = "\\( I \\longmapsto J = f(I) \\enspace  \\enspace  \\longmapsto I \\)";

    var reciproqueDerivee = "\\( \\forall x \\in I, \\enspace (f^{-1})'(x) = \\frac{1}{f' \\circ f^{-1}(x)} \\)";

    var reciproquePrim = "\\( (f \\circ f^{-1})'(x)  = (f^{-1})'(x) . f'(f^{-1}(x))\\)";
    var id =  "\\( f \\circ f^{-1}(x) = x \\)";
    var reciproquePrim2 = "\\( (f \\circ f^{-1})'(x) = (x)' = 1  \\)";
    var reciproquePrim3 = "\\( \\Longleftrightarrow (f \\circ f^{-1})'(x) =  1  \\)";
    var reciproquePrim4 = "\\( \\Longleftrightarrow (f^{-1})'(x) . f' \\circ f^{-1}(x) =  1  \\)";
    var reciproquePrim5 = "\\( \\Longleftrightarrow (f^{-1})'(x) = \\frac{1}{f' \\circ f^{-1}(x)}  \\)";

    return  <>
                <p>Soit deux intervalles <MathJaxInline toShow={"$ I, J \\in \\mathbb{R} $"} /> et <MathJaxInline toShow={"$ f: I \\to J $"} /> une fonction.</p>
                <p><MathJaxInline toShow={"$ f$"} /> est dérivable sur son intervalle de départ <MathJaxInline toShow={"$ I $"} />.</p>
                <p>De plus, la fonction <MathJaxInline toShow={"$ f $"} /> est une bijection (strictement monotone et continue sur intervalle) de <MathJaxInline toShow={"$ I $"} /> vers <MathJaxInline toShow={"$ J $"} /> avec <MathJaxInline toShow={"$ J=f(I) $"} />.</p>
                <p>Alors, elle admet une fonction réciproque <MathJaxInline toShow={"$ f^-1 $"} /> définie tel que :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={reciproque} />
                     <MathJaxDisplay toShow={reciproque2} />   
                </Container>
                <p>On note indifferement <MathJaxInline toShow={"$ f(f^{-1}) $"} /> ou <MathJaxInline toShow={"$ (f \\circ f^{-1}) $"} />, c'est strictement la même chose, <Link url={`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/derivee-de-fonction-composee`} external>une fonction composée</Link>.</p>
               
                <p>On peut décortiquer le procédé de la manière suivante :</p>
                <MathJaxDisplay toShow={reciproqueDecortX} demo/> 
                <MathJaxDisplay toShow={reciproqueDecortX2} demo/> 

                <p>Alors, la réciproque <MathJaxInline toShow={"$ f^{-1} $"} /> peut s'observer dans les deux sens, avec toujours l'intervalle d'arrivée <MathJaxInline toShow={"$ J $"} /> de la première fonction inclu dans l'intervalle de départ <MathJaxInline toShow={"$ I $"} />.</p>
                <MathJaxDisplay toShow={reciproque3} /> 

                <p>La réciproque est elle aussi dérivable et admet pour expression : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={reciproqueDerivee} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <p>Nous allons repartir du résultat de la dérivée d'une fonction composée :</p>
                <MathJaxDisplay toShow={reciproquePrim} demo/> 
                <Aside>
                    <p>Or, on a vu dans la définition que : </p>
                    <MathJaxDisplay toShow={id} demo /> 
                </Aside>
                <p>Soit : </p>
                <MathJaxDisplay toShow={reciproquePrim2} demo /> 
                <MathJaxDisplay toShow={reciproquePrim3} demo /> 
                <p>(on remplace par son équivalent dans l'équation de départ) </p>
                <MathJaxDisplay toShow={reciproquePrim4} demo /> 
                <MathJaxDisplay toShow={reciproquePrim5} demo /> 
                
                <p>Pour conclure, si <MathJaxInline toShow={"$ f'$"} /> ne s'annule par sur <MathJaxInline toShow={"$ I $"} /> :</p>
                
                <Container className="Focus">
                     <MathJaxDisplay toShow={reciproqueDerivee} />  
                     <MathJaxDisplay toShow={"\\( avec \\enspace f' \\neq 0 \\)"} />  
                </Container>
            </>
}

export default DeriveeDeLaReciproque;
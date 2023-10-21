import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';


const TheoremeDeLHopital = () => {

    var limFoverG = "\\(lim_{x \\to a} \\enspace \\left( \\frac{f}{g} \\right) \\enspace (avec \\enspace a \\in \\mathbb{R} \\enspace ou \\enspace a = \\pm \\infty) \\)";

    var theoreme = "\\( lim_{x \\to a} \\enspace \\left(\\frac{f}{g} \\right) = lim_{x \\to a} \\enspace \\left(\\frac{f'}{g'}\\right) = l \\enspace\\)";
    var theoremeConditions = "\\( avec \\enspace a \\in \\mathbb{R} \\cup \\left\\{ \\pm \\infty \\right\\}, \\enspace l \\in \\mathbb{R} \\)";

    var precaution1 = "\\( a) \\enspace lim_{x \\to a} \\enspace f = lim_{x \\to a} \\enspace g = 0 \\)";
    var precaution2 = "\\( b) \\enspace lim_{x \\to a} \\enspace f = lim_{x \\to a} \\enspace g = \\pm \\infty \\)";

    return  <>
                <p>Le théorème de l'Hôpital, appellée aussi règle de Bernouilli, utilise les dérivées afin de pouvoir calculer des limites de quotient de fonctions lorsque l'on est face à une forme indéterminée.</p>
                
                <Title1 title={"Théorème"} />
                <p>Soit deux fonctions <MathJaxInline toShow={"$ f, g $"} /> dérivables au voisinage de <MathJaxInline toShow={"$ a $"} /> et <MathJaxInline toShow={"$ g $"} /> qui ne s'y annule pas (<MathJaxInline toShow={"$ \\Leftrightarrow g \\neq 0 $"} />).</p>
                <p>Lorsque nous essayons de déterminer : </p>
                <MathJaxDisplay toShow={limFoverG} demo /> 
                <p>et que l'on tombe sur une forme indéterminée (<MathJaxInline toShow={"$ \\frac{0}{0} $"} /> ou <MathJaxInline toShow={"$ \\frac{\\infty}{\\infty} $"} />), alors nous pouvons dériver les fonctions <MathJaxInline toShow={"$ f$"} /> et <MathJaxInline toShow={"$ g $"} />, et dans ce cas :</p> 
                <p></p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={theoreme} />  
                     <MathJaxDisplay toShow={theoremeConditions} />
                </Container>

                <Title1 title={"Précautions à prendre"} />
                <p>La règle ne peut être utilisée qu'en cas d'indétermination de la limite.</p>
                <p>Il faut alors se trouver dans l'un de deux cas suivants : </p>
                <MathJaxDisplay toShow={precaution1} demo /> 
                <MathJaxDisplay toShow={precaution2} demo /> 
                <p>On peut alors lever l'indéterminatin grâce au théorème.</p>
            </>
}

export default TheoremeDeLHopital;

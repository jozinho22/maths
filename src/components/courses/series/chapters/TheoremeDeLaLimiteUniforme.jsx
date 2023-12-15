import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const TheoremeDeLaLimiteUniforme = () => {

    var convergenceU = "\\( \\sum u_n converge \\Longleftrightarrow S_n \\leqslant S_n \\)";

    var div = "\\( \\sum_{n=0}^{+\\infty}(u_n) = +\\infty \\)";
   
    return  <>
                <p>Comme la somme partielle d'une série à termes positifs représente une suite croissante, on peut appliquer <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/theoreme-de-la-convergence-uniforme`} external>le théorème de la convergence uniforme.</Link></p>   
                <p>Si la suite des sommes partielles est majorée par <MathJaxInline toShow={"$M \\in \\mathbb{R} $"} />, la série <MathJaxInline toShow={"$\\sum u_n $"} /> converge.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={convergenceU} />  
                </Container>
                <p>Dans le cas contraire, la suite diverge et on a : </p>
                <MathJaxDisplay toShow={div} demo />  
            </>
}

export default TheoremeDeLaLimiteUniforme;
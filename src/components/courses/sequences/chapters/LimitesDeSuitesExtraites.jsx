import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const LimitesDeSuitesExtraites = () => {

    var limSuiteExtraite2 = "\\( \\Biggl\\{ \\begin{gather*} lim_{n \\to +\\infty} \\enspace (u_{2n}) = l \\\\ lim_{n \\to +\\infty} \\enspace (u_{2n + 1}) = l \\end{gather*} \\Longrightarrow lim_{n \\to +\\infty} \\enspace (u_n) = l  \\)";

     var exemple = "\\( u_n = \\frac{(-1)^n}{n} \\)";
     var exemple1 = "\\( u_{2n} = \\frac{(-1)^{2n}}{2n} \\)";
     var exemple12 = "\\( u_{2n} = \\frac{1}{2n} \\)";
     var exemple13 = "\\( lim_{n \\to +\\infty} \\enspace (u_{2n}) = 0 \\)";

     var exemple2 = "\\( u_{2n+1} = \\frac{(-1)^{2n+1}}{2n+1} \\)";
     var exemple22 = "\\( u_{2n+1} = \\frac{1}{2n+1} \\)";
     var exemple23 = "\\( lim_{n \\to +\\infty} \\enspace (u_{2n+1}) = 0 \\)";

     var exempleRes = "\\( lim_{n \\to +\\infty} \\enspace (u_{n}) = 0 \\)";

    return  <>
                <p>Face à une forme indéterminée, on peut utiliser des suites extraites afin de lever cette indétermination.</p>
                
                <Title1 title={"Limite d'une suite extraite"} />
                <p>Si on a <MathJaxInline toShow={"$ lim_{n \\to +\\infty} \\enspace (u_n) = l  $"} />, alors toute suite extraite converge vers <MathJaxInline toShow={"$ l $"} />. </p>
                
                <Title1 title={"Convergence par complémentarité"} />
                <p>Si les termes pairs et impairs d'une suite <MathJaxInline toShow={"$ (u_n) $"} /> converge vers la même limite <MathJaxInline toShow={"$ l $"} />, alors la suite converge vers cette limite.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={limSuiteExtraite2} />  
                </Container>
            
               <Title1 title={"Exemple"} />
               <MathJaxDisplay toShow={exemple} demo /> 
               <p>On étudie <MathJaxInline toShow={"$ (u_{2n}) $"} /> et <MathJaxInline toShow={"$ (u_{2n+1}) $"} /> :</p>
               <Title2 title={"Limites des termes pairs"} />
               <MathJaxDisplay toShow={exemple1} demo /> 
               <MathJaxDisplay toShow={exemple12} demo /> 
               <MathJaxDisplay toShow={exemple13} demo /> 
               <Title2 title={"Limites des termes impairs"} />
               <MathJaxDisplay toShow={exemple2} demo /> 
               <MathJaxDisplay toShow={exemple22} demo /> 
               <MathJaxDisplay toShow={exemple23} demo /> 
               <p>Grâce à la convergence par complémentarité, on conclue que:</p>
               <MathJaxDisplay toShow={exempleRes} demo /> 
            </>
}

export default LimitesDeSuitesExtraites;
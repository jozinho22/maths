import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const LimitesDeSuitesExtraites = () => {

    var limSuiteExtraite = "\\(lim_{h \\to +\\infty} \\enspace u_n = l \\)";

    var limSuiteExtraite2 = "\\( \\Biggl{ \\begin{gather*} lim_{h \\to +\\infty} \\enspace u_{2n} = l \\\\ lim_{h \\to +\\infty} \\enspace u_{2n + 1} = l \\end{gather*}  \\)";

     var exemple = "\\( u_n = \\frac{(-1)^n}{n} \\)";
     var exemple1 = "\\( u_{2n} = \\frac{(-1)^{2n}}{2n} \\)";
     var exemple12 = "\\( u_{2n} = \\frac{1}{2n} \\)";
     var exemple13 = "\\( lim_{h \\to +\\infty} \\enspace u_{2n} = 0 \\)";

     var exemple2 = "\\( u_{2n+1} = \\frac{(-1)^{2n+1}}{2n+1} \\)";
     var exemple22 = "\\( u_{2n+1} = \\frac{1}{2n+1} \\)";
     var exemple23 = "\\( lim_{h \\to +\\infty} \\enspace u_{2n+1} = 0 \\)";

     var exempleRes = "\\( lim_{h \\to +\\infty} \\enspace u_{n} = 0 \\)";


    return  <>
                <p>Face à une forme indéterminée, on peut utiliser des suties extraites afin de lever cette indétermination.</p>
                
                <Title1 title={"Limite d'une suite extraite"} />
                <p>Si on a : </p>
                <MathJaxDisplay toShow={limSuiteExtraite} demo /> 
                <p>alors, toute suite extraite converge vers <MathJaxInline toShow={"$ l $"} />.</p>
                
                <Title1 title={"Convergence par complémentarité"} />
                <p>Si</p>
                <MathJaxDisplay toShow={limSuiteExtraite2} demo /> 
                <p>alors,</p>
                <p><MathJaxInline toShow={"$ (u_n) $"} /> est convergente vers <MathJaxInline toShow={"$ l $"} />.</p>
            
               <Title2 title={"Exemple"} />
               <MathJaxDisplay toShow={exemple} demo /> 
               <p>On étudie <MathJaxInline toShow={"$ u_{2n} $"} /> et <MathJaxInline toShow={"$ u_{2n+1} $"} /></p>
               <MathJaxDisplay toShow={exemple1} demo /> 
               <MathJaxDisplay toShow={exemple12} demo /> 
               <MathJaxDisplay toShow={exemple13} demo /> 
               <MathJaxDisplay toShow={exemple2} demo /> 
               <MathJaxDisplay toShow={exemple22} demo /> 
               <MathJaxDisplay toShow={exemple23} demo /> 
               <p>Grâce à la convergence par complémentarité, on conclue que:</p>
               <MathJaxDisplay toShow={exempleRes} demo /> 
            </>
}

export default LimitesDeSuitesExtraites;
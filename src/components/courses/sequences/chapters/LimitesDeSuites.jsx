import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const LimitesDeSuites = () => {

    var limUn = "\\( lim_{h \\to +\\infty} \\enspace u_n \\)";
    var unicity = "\\( si \\enspace lim_{h \\to +\\infty} \\enspace u_n = l, \\enspace lim_{h \\to +\\infty} \\enspace v_n = l', alors l=l' \\)";
    var limUnL = "\\( lim_{h \\to +\\infty} \\enspace u_n = l \\)";

    var limUnRecurr = "\\( lim_{h \\to +\\infty} \\enspace u_n = lim_{h \\to +\\infty} \\enspace u_{n+1} = lim_{h \\to +\\infty} \\enspace f(u_n) = l \\)";
    var limUnRecurr2 = "\\( lim_{h \\to +\\infty} \\enspace u_n  = l \\)";
    var limUnRecurr3 = "\\( lim_{h \\to +\\infty} \\enspace f(u_n)  = f(l) \\)";
    var limUnRecurr4 = "\\( l  = f(l) \\)";

    var pos = "\\( u_n > 0 \\enspace et \\enspace (u_n) \\enspace converge \\enspace vers \\enspace l \\Longrightarrow l \\geq 0 \\)";
    var comp = "\\( lim_{h \\to +\\infty} \\enspace u_n = +\\infty \\enspace et \\enspace \\underbrace{v_n > u_n} _\\text{ à partir d'un certain rang},  \\enspace alors \\enspace lim_{h \\to +\\infty} \\enspace v_n = +\\infty \\)";
    var comp2 = "\\( lim_{h \\to +\\infty} \\enspace u_n = -\\infty \\enspace et \\enspace \\underbrace{v_n < u_n} _\\text{ à partir d'un certain rang},  \\enspace alors \\enspace lim_{h \\to +\\infty} \\enspace v_n = -\\infty \\)";
    var gendarmes = "\\(  (u_n) \\enspace et \\enspace  (v_n) \\enspace convergent \\enspace vers \\enspace l \\enspace et \\enspace  \\underbrace{u_n < w_n < v_n} _\\text{ à partir d'un certain rang},  \\enspace alors \\enspace w_n \\enspace converge \\enspace vers \\enspace l \\)";

    var exemple = "\\( u_n = \\sum_1^n \\enspace \\frac{1}{n^2 + k} \\)";
    var exemple2 = "\\( u_n = \\underbrace{\\frac{1}{n^2 + 1} + \\frac{1}{n^2 + 2} + ... + \\frac{1}{n^2 + n}} _\\text{n termes} \\)";
    var exemple3 = "\\( 1 \\leq k \\leq n \\)";
    var exemple4 = "\\( n^2 + 1 \\leq n^2 + k \\leq n^2 + n \\)";
    var exemple5 = "\\( \\frac{1}{n^2 + 1} \\geq \\frac{1}{n^2 + k} \\geq \\frac{1}{n^2 + 1} \\)";

    var exemple7 = "\\( (p = 1) \\enspace \\frac{1}{n^2 + 1} \\geq \\frac{1}{n^2 + 1} \\geq \\frac{1}{n^2 + 1} \\)";
    var exemple8 = "\\( (p = 2) \\enspace \\frac{1}{n^2 + 1} \\geq \\frac{1}{n^2 + 2} \\geq \\frac{1}{n^2 + 1} \\)";
    var exemple9 = "\\( (p = n) \\enspace \\frac{1}{n^2 + 1} \\geq \\frac{1}{n^2 + n} \\geq \\frac{1}{n^2 + 1} \\)";
    var exemple10 = "\\( \\frac{n}{n^2 + 1} \\geq \\sum_1^n \\enspace \\frac{1}{n^2 + k} \\geq \\frac{n}{n^2 + 1} \\)";
    var exemple11 = "\\( \\frac{n}{n^2 + 1} \\geq u_n \\geq \\frac{n}{n^2 + 1} \\)";

    var exemple12 = "\\( lim_{h \\to +\\infty} \\enspace \\frac{n}{n^2 + n} = lim_{h \\to +\\infty} \\enspace \\frac{1}{n}  = 0 \\)";
    var exemple13 = "\\( lim_{h \\to +\\infty} \\enspace \\frac{n}{n^2 + 1} = 0 \\)";
    var exemple14 = "\\( lim_{h \\to +\\infty} \\enspace u_n = 0 \\)";


    return  <>
                <p>Pour les suites, la seule limite à étudier est</p>
                <MathJaxDisplay toShow={limUn} demo /> 
                
                <Title1 title={"Convergence"} />
                <p>On dit qu'une suite <MathJaxInline toShow={"$ (u_n) $"} /> est convergente vers <MathJaxInline toShow={"$ l (l \\in \\mathbb{R}$"} /> si :</p>
                <MathJaxDisplay toShow={limUnL} demo /> 
                <p>À partir d'un certain rang <MathJaxInline toShow={"$ n_k $"} />, tous les termes de la suite s'accumulent dans un intervalle de centre <MathJaxInline toShow={"$ l $"} />.</p>
                <p>Quoi qu'il arrive, cette limite est unique.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={unicity} />  
                </Container>

                <Title1 title={"Suite explicite"} />
                <p>Pour calculer cette limite lorsque <MathJaxInline toShow={"$ u_n = f(n) $"} />, on applique les mêmes règles que pour les fonctions.</p>
                
                <Title1 title={"Suite récurrente"} />
                <p>Pour calculer cette limite lorsque <MathJaxInline toShow={"$ u_{n+1} = f(u_n) $"} />, on aura la loi suivante :</p>
                <MathJaxDisplay toShow={limUnRecurr} demo /> 
                <p>Étant donné l'unicité de la limite, on a l'équivalence :</p>
                <MathJaxDisplay toShow={limUnRecurr2} demo /> 
                <MathJaxDisplay toShow={limUnRecurr3} demo />
                <p>On en conclue alors que : </p> 
                <MathJaxDisplay toShow={limUnRecurr4} demo />
                <p>Il suffit alors de résoudre l'équation <MathJaxInline toShow={"$ f(x) = x$"} />.</p>
               
                <Title1 title={"Théorème lié à l'ordre"} />
                <p>Si pour tout <MathJaxInline toShow={"$ n \\in \\mathbb{N} $"} /> :</p>
                
                <Title2 title={"Positivité"} />
                <Container className="Focus">
                     <MathJaxDisplay toShow={pos} />  
                </Container>

                <Title2 title={"Comparaison"} />
                <Container className="Focus">
                     <MathJaxDisplay toShow={comp} />
                      <MathJaxDisplay toShow={comp2} />  
                </Container>

                <Title2 title={"Théorème des gendarmes"} />
                <Container className="Focus">
                     <MathJaxDisplay toShow={gendarmes} />
                </Container>

                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={exemple} demo />
                <MathJaxDisplay toShow={exemple2} demo />
                <p>On repart de notre hypothèse :</p>
                <MathJaxDisplay toShow={exemple3} demo />
                <MathJaxDisplay toShow={exemple4} demo />
                <MathJaxDisplay toShow={exemple5} demo />
                <p>C'est vrai pour tout <MathJaxInline toShow={"$ k = 1, 2, 3...,  n $"} />.</p>
                <p>On aoute membre à membre pour tout <MathJaxInline toShow={"$ k $"} />.</p>
                <MathJaxDisplay toShow={exemple7} demo />
                <MathJaxDisplay toShow={exemple8} demo />
                <MathJaxDisplay toShow={exemple9} demo />
                <p>Soit : </p>
                <MathJaxDisplay toShow={exemple10} demo />
                <MathJaxDisplay toShow={exemple11} demo />
                <p>On a par ailleurs que : </p>
                <MathJaxDisplay toShow={exemple12} demo />
                <MathJaxDisplay toShow={exemple13} demo />
                <p>On en conclue avec le théorème des gendarmes que : </p>
                <MathJaxDisplay toShow={exemple14} demo />
            </>
}

export default LimitesDeSuites;
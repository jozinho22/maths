import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const ConvergenceDUneSerie = () => {

    var condConv = "\\( \\sum u_n \\enspace converge \\Longrightarrow lim_{n \\to +\\infty} (u_n) = 0 \\)";

    var conv = "\\( \\sum_{n=0}^{+\\infty}(u_n) = lim_{n \\to +\\infty} (S_n) = lim_{n \\to +\\infty} \\left( \\sum_{k=0}^n uk \\right) \\)";
   
    return  <>
                <p>Soit <MathJaxInline toShow={"$(u_n) \\in \\mathbb{K}^{\\mathbb{N}} $"} /> une suite à termes réels ou complexes, et <MathJaxInline toShow={"$ \\sum u_n$"} /> sa série numérique associée.</p>   

                <Title1 title={"Condition nécessaire de convergence"} />
                <p>Si la série <MathJaxInline toShow={"$ \\sum u_n$"} /> converge, alors <MathJaxInline toShow={"$  (u_n)$"} /> converge et est de limite nulle. </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={condConv} />  
                </Container>
                <p>Dans le cas contraire, on dira qu'elle diverge grossièrement.</p>

                <Title1 title={"Théorème de convergence"} />
                <p>La série associée <MathJaxInline toShow={"$ \\sum u_n$"} /> est dite convergente si la suite de somme partielle <MathJaxInline toShow={"$(S_n) $"} /> l'est.</p>
                <p>Dans ce cas seulement, la somme de la série est la limite des sommes partielles :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={conv} />  
                </Container>

                <p>Si cette série ne converge pas, on dit qu'elle est divergente.</p>
                <p>On appelle la nature d'une série le fait qu'elle diverge ou non.</p>
                <p>La convergence d'une série ne dépend pas de ses premiers termes, mais bien d'un terme d'une certain rang <MathJaxInline toShow={"$ n_0 $"} />, il est donc d'usage de prendre un <MathJaxInline toShow={"$n $"} /> assez élevé pour commencer à voir converger une série.</p>
            </>
}

export default ConvergenceDUneSerie;
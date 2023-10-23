import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const Presentation = () => {

    var sequencesExample = "\\( \\forall n \\in \\mathbb{N}, \\enspace (u_n = 3n+ 2) \\)";
    var sequencesExample2 = "\\( \\forall n \\in \\mathbb{N}, \\enspace (u_n = \\sqrt{n - 3}), \\enspace avec \\enspace n \\geq 3 \\)";
    
    return  <>
                <p>
                    Les suites numériques sont des fonctions de <MathJaxInline toShow={"$ \\mathbb{N} $"} /> dans <MathJaxInline toShow={"$ \\mathbb{R} $"} />.
                    Nous verrons par la suite qu'il en existe dans l'ensemble des complexes.
                </p>
 
                <Title1 title={"Notation"} />
                <p>Soit une suite numérique.</p>
                <p>Cette suite se note <MathJaxInline toShow={"$ (u_n) $"} /> ou encore <MathJaxInline toShow={"$ (u_n)_{n \\in \\mathbb{R}} $"} />.</p>
                <p>On note <MathJaxInline toShow={"$ u_{n_0} $"} /> le premier terme de cette suite. </p>

                <Title1 title={"Exemple"} />
                <Title2 title={"Exemple 1"} />
                <MathJaxDisplay toShow={sequencesExample} demo /> 
                <p>On a les premiers termes de la suite suivants : </p>
                <p><MathJaxInline toShow={"$ u_0 = 2 $"} />, <MathJaxInline toShow={"$ u_1 = 5 $"} />, <MathJaxInline toShow={"$ u_2 = 8 $"} />...etc.</p>
                <p>Tout comme les fonctions, on remplace l'indice <MathJaxInline toShow={"$ n $"} /> dans l'expression générale de la suite.</p>
                
                <Title2 title={"Exemple 2"} />
                <MathJaxDisplay toShow={sequencesExample2} demo /> 
                <p>La suite ne peut être déinie qu'à partir d'un certain rang <MathJaxInline toShow={"$ n_0 $"} />.</p>
            </>
}

export default Presentation;
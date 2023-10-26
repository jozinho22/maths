import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SuitesBornees = () => {

    var majoration = "\\( \\forall n \\in \\mathbb{N}, \\enspace u_n \\leqslant M \\)";
    var minoration = "\\( \\forall n \\in \\mathbb{N}, \\enspace u_n \\geqslant m \\)";
    var bornee = "\\( \\forall n \\in \\mathbb{N},  \\enspace m \\leqslant u_n \\leqslant M \\)";

    return  <>
                <Title1 title={"Définitions"} />
                <p>Une suite <MathJaxInline toShow={"$ (u_n) $"} /> est dite majorée s'il existe un nombre réel <MathJaxInline toShow={"$ M $"} /> tel que :</p>
                <MathJaxDisplay toShow={majoration} demo />
                <p>Une suite <MathJaxInline toShow={"$ (u_n) $"} /> est dite minorée s'il existe un nombre réel <MathJaxInline toShow={"$ m $"} /> tel que :</p>
                <MathJaxDisplay toShow={minoration} demo />
                <p>Une suite est <MathJaxInline toShow={"$ (u_n) $"} /> dite bornée si elle est à la fois majorée et minorée :</p>
                <MathJaxDisplay toShow={bornee} demo />

                <p>Il peut exister une infinité de majorants (resp. de minorants), on appelle borne supérieure le plus petit de majorants (resp. borne inférieure le plus grand des minorants). </p>
                <p>On dit que c'est le meilleur majorant (resp. minorant).</p>

                <Title1 title={"Conséquences"} />
                <p>Une suite croissante est minorée par <MathJaxInline toShow={"$ (u_{n_0}) $"} />.</p>
                <p>Une suite décroissante est majorée par <MathJaxInline toShow={"$ (u_{n_0}) $"} />.</p>
                
                <Title1 title={"Théorème de la convergence uniforme"} />
                <p>Toute suite croissante et majorée converge.</p>
                <p>De même, toute suite décroissante et minorée converge.</p>
                
            </>
}

export default SuitesBornees;
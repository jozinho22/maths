import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const FonctionsDeClasseCn = () => {

    var leibniz = "\\( (fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^k.g^{n-k} \\)";

    return  <>
                <p>
                    Soit <MathJaxInline toShow={"$ f:I \\to \\mathbb{R} $"} /> et <MathJaxInline toShow={"$ n \\in \\mathbb{N} $"} />.
                </p>
                <p>
                   On dit que <MathJaxInline toShow={"$ f $"} /> est de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> si elle est <MathJaxInline toShow={"$ n $"} /> fois dérivable.
                </p>
                <p>
                   On dit que <MathJaxInline toShow={"$ f $"} /> est de classe <MathJaxInline toShow={"$ \\mathcal{C}^{\\infty} $"} /> si elle est infiniment dérivable.
                </p>

                <Title1 title={"Opérations sur les fonctions"} />

                <Title2 title={"Combinaison linéaire"} />
                <p>Une combinaison linéaire de fonctions de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> sur <MathJaxInline toShow={"$ I $"} /> est aussi de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} />.</p>
                
                <Title2 title={"Produit"} />
                <p>Un produit de fonctions de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> sur <MathJaxInline toShow={"$ I $"} /> est aussi de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} />.</p>
               
                <Title2 title={"Quotient"} />
                <p>Un quotient de fonctions de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> sur <MathJaxInline toShow={"$ I $"} /> est aussi de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} />, pourvu que le dénominateur ne s'annule pas.</p>
                
                <Title2 title={"Composée"} />
                <p>La composée de fonctions de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> sur <MathJaxInline toShow={"$ I $"} /> est aussi de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} />.</p>
                
                <Title2 title={"Application réciproque"} />
                <p>L'applciation réciproque d'une fonction de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> sur <MathJaxInline toShow={"$ I $"} /> est aussi de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} />.</p>
                
                <Title1 title={"Formules de Leibniz "} />
                <p>Soit <MathJaxInline toShow={"$ f,g  $"} /> deux fonctions de classe <MathJaxInline toShow={"$ \\mathcal{C}^n $"} /> sur un intervalle <MathJaxInline toShow={"$ I $"} />, alors :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={leibniz}  />  
                </Container>
            </>
}

export default FonctionsDeClasseCn;
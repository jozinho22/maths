import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const Presentation = () => {

    var neg = "\\( g(x) \\underset{x \\to a}{=} o(f(x)) \\Longleftrightarrow lim_{x \\to a} \\frac{g(x)}{f(x)} = 0  \\)";

    var limDev = "\\( f_{n, a}(x) = f(x - a) + \\frac{f^{(1)}(x - a)}{1!} + + \\frac{f^{(2)}(x - a)^2}{2!} + ... + \\frac{f^{(n)}(x - a)^n}{n!}  + o_a( (x-a)^{n+1})\\)";
    var limDevSum = "\\( f_{n, a}(x) = \\sum_{k = 0}^n \\frac{f^{(k)}(x - a)}{k!} + o(x^{n+1}) \\)";

    var polynome = "\\( P_{n, a}(x) = a_0 + a_1.(x - a) + a_2.(x - a)^2 + ... + a_{n-1}.(x - a)^{n-1} + a_n.(x - a)^n \\)";
    var polynome1 = "\\( P_{n, a}^{(1)}(x) =  a_1 + 2.a_2.(x - a) + 3.a_3.(x - a)^2 + ...+ (n-1) a_{n-1}.(x - a)^{n-2} + n.a_n.(x - a)^{n-1} \\)";
    var polynome2 = "\\( P_{n, a}^{(2)}(x) =  2.a_2 + 6.a_3.(x - a) + 12.a_4.(x - a)^2... + (n-1)(n-2) a_{n-1}.(x - a)^{n-3} + n(n-1).a_n.(x - a)^{n-2} \\)";
    var polynomek = "\\( P_{n, a}^{(k)}(x) =  ....... \\)";
    var polynomen = "\\( P_{n, a}^{(n)}(x) = n! \\times a_n \\)";

    var polynomeXa = "\\( P_{n, a} = a_0 \\)";
    var polynome1Xa = "\\( P_{n, a}^{(1)}(a) =  a_1 = 1! \\times a_1 \\)";
    var polynome2Xa = "\\( P_{n, a}^{(2)}(a) =  2.a_2 = 2! \\times a_2 \\)";
    var polynome3Xa = "\\( P_{n, a}^{(3)}(a) =  6.a_3 = 3! \\times a_3 \\)";
    var polynome4Xa = "\\( P_{n, a}^{(4)}(a) =  24.a_4 = 4! \\times a_4 \\)";
    var polynomekXa = "\\( P_{n, a}^{(k)}(a) =  k! \\times a_k \\)";
    var polynomenXa = "\\( P_{n, a}^{(n)}(a) = n! \\times a_n \\)";
    var polynomenXaBis = "\\( a_k = \\frac{P_{n, a}^{(k)}(a)}{k!}\\)";

    var polynomenXaLink = "\\( P_{n, a}^{(k)}(a) = f_{a}^{(k)}(a) \\)";
    var polynomenXaLink2 = "\\( a_k = \\frac{f_{a}^{(k)}(a)}{k!} \\)";

    return  <>
                <Title1 title={"Notations"} />
                <Title2 title={"Dérivée n-ième"} />
                <p>Dans ce chapitre, on notera <MathJaxInline toShow={"$ f^{(n)}(x) $"} /> la dérivée n-ième de la fonction <MathJaxInline toShow={"$ x \\longmapsto f(x) $"} />.</p>
                <Title2 title={"Négligeabilité"} />
                <p>On notera <MathJaxInline toShow={"$ o(x^{n+1}) $"} /> un terme négligeable devant <MathJaxInline toShow={"$x^{n+1} $"} />.</p>
                <p>Soit <MathJaxInline toShow={"$ f, g $"} /> deux fonctions, </p>
                <MathJaxDisplay toShow={neg} demo />
                
                <Title1 title={"Développement limité"} />
                <p>
                    On appelle développement limité d'une fonction <MathJaxInline toShow={"$ f $"} /> au point  <MathJaxInline toShow={"$ a $"} /> la fonction suivante :
                </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={limDev} />
                </Container>
                <p>Soit :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={limDevSum} />
                </Container>
                <p>Cette formule est appellée formule de Taylor-Young.</p>
                <p><MathJaxInline toShow={"$ \\sum_{k = 0}^n \\frac{f^{(k)}(x - a)}{k!} $"} /> est appellée partie régulière du développement limité.</p>
                <p><MathJaxInline toShow={"$ o_a(x^{n+1}) $"} /> est appellée partie irrégulière (ou reste).</p>
                <p>On notera <MathJaxInline toShow={"$ DL_n(a) $"} /> le développement limité d'ordre <MathJaxInline toShow={"$ n $"} /> au point <MathJaxInline toShow={"$ x = a $"} />.</p>

                <Title1 title={"Objectif"} />
                <p>Le but d'un développement limité d'approximer une fonction existante par un équivalent sous forme polynomiale.</p>
                <Title1 title={"Démonstration"} />

                <p>Soit <MathJaxInline toShow={"$ P_{n, a}(x) $"} /> un polynôme de degré <MathJaxInline toShow={"$ n $"} /> centré en <MathJaxInline toShow={"$ a$"} />.</p>
                <MathJaxDisplay toShow={polynome} fRef={1} demo />
                <p>On appelle ce polynôme communément le polynôme de Taylor.</p>

                <Title2 title={"Calcul des dérivées n-ième"} />
                <p>On calcule sa dérivée :</p>
                <MathJaxDisplay toShow={polynome1} demo />
                <p>Puis sa dérivée seconde :</p>
                <MathJaxDisplay toShow={polynome2} demo />
                <MathJaxDisplay toShow={polynomek} demo />
                <MathJaxDisplay toShow={polynomen} demo />

                <Title2 title={"Calcul des images"} />
                <p>On calcule maintenant les images pour <MathJaxInline toShow={"$ x = a $"} /> de ces fonctions :</p>
                <MathJaxDisplay toShow={polynomeXa} demo />
                <MathJaxDisplay toShow={polynome1Xa} demo />
                <MathJaxDisplay toShow={polynome2Xa} demo />
                <MathJaxDisplay toShow={polynome3Xa} demo />
                <MathJaxDisplay toShow={polynome4Xa} demo />
                <MathJaxDisplay toShow={polynomekXa} fRef={2} demo />
                <MathJaxDisplay toShow={polynomenXa}  demo />
                <p>Avec la formule <MathJaxInline toShow={"$(2)$"} />, on a : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={polynomenXaBis} />
                </Container>

                <Title2 title={"Lien entre la fonction et le polynôme"} />
                <p>La fonction que nous cherchons à approximer doit être sensiblement égale à son équivalent polynomiale.</p>
                <p>Pour tout <MathJaxInline toShow={"$ k \\in \\mathbb{N} $"} />, on aura donc une correspondance entre les coefficients <MathJaxInline toShow={"$ a_k $"} />.</p>
                 <MathJaxDisplay toShow={polynomenXaLink}  demo />
                 <p>Soit pour tous les coefficients :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={polynomenXaLink2} fRef={3} />
                </Container>
                <p>Soit en injectant <MathJaxInline toShow={"$(3)$"} /> dans <MathJaxInline toShow={"$(2)$"} /> :</p>
                <MathJaxDisplay toShow={limDev} demo />
            </>
}

export default Presentation;
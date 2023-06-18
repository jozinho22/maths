import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title2 from '../../helpers/Title2';

const PuissancesComposees = () => {

    var comp = "\\( {1} \\over {x^3} \\)";
    var comp2 = "\\( \\frac{1}{x^3} = \\big(x^3 \\big)^{-1} \\)";
    var comp3 = "\\( \\frac{1}{x^3} =  x^{-3} \\)";
    var compEx = "\\(  0, \\; 001 = \\frac{1}{1000}  =  10^{-3} \\)";

    var compp = "\\( \\frac{x^4 y^5}{z^3} = {x^4 y^5}{z}^{-3} \\)";

    var compInv = "\\( \\frac{1}{x^{-3}} = {x^3} \\)";

    return (
            <>
                <Title2 title={"Exemple 1 : puissance au dénominateur"} />
                <MathJaxDisplay toShow={comp} demo />
                <p>peut s'exprimer, grâce à la formule <MathJaxInline toShow={"$(3)$"} /> comme ceci :  </p>
                <MathJaxDisplay toShow={comp2} demo />
                <p>Et grâce à la formule <MathJaxInline toShow={"$(4)$"} />, on peut la transformer en : </p>
                <MathJaxDisplay toShow={comp3} demo />
                <p>Si on remplace  <MathJaxInline toShow={"$x$"} />, par  <MathJaxInline toShow={"$10$"} />, cela signifie que l'on peut écrire : </p>
                <MathJaxDisplay toShow={compEx} demo />

                <Title2 title={"Exemple 2 : linéarisation"} />
                <p>
                    On peut écrire la chose suivante, de manière à linéariser une expression avec un dénominateur :
                </p>
                <MathJaxDisplay toShow={compp} demo />

                <Title2 title={"Exemple 3 : puissance inverse au dénominateur"} />
                <p>
                    De même, si l'on a une puissance négative au dénominateur, elle devient positive lorsqu'on la linéarise :
                </p>
                <MathJaxDisplay toShow={compInv} demo />
            </>
    );
}

export default PuissancesComposees;
import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title2 from '../../helpers/Title2';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const LienEntrePuissancesEtRacines = () => {

    var sqrt2 = "\\( \\sqrt{x} \\times \\sqrt{x} = x \\)";
    var sqrt22 = "\\( x^{n} \\times x^{n} = x^1 \\)";
    var sqrt23 = "\\( x^{n + n} = x^1 \\)";
    var sqrt24 = "\\( x^{2n} = x^1 \\)";
    var sqrt25 = "\\( 2n = 1 \\Leftrightarrow  n = \\frac{1}{2} \\)";
    var sqrt26 = "\\( \\sqrt{x} = x^{\\frac{1}{2}} \\)";

    var sqrt3 = "\\( \\sqrt[3]{x} \\times \\sqrt[3]{x} \\times \\sqrt[3]{x} = x \\)";
    var sqrt32 = "\\( 3n = 1 \\Leftrightarrow  n = \\frac{1}{3} \\)";
    var sqrt33 = "\\( \\sqrt[3]{x} = x^{\\frac{1}{3}} \\)";

    var sqrtn = "\\( \\sqrt[n]{x} = x^{\\frac{1}{n}} \\)";

    var sqrtnInv = "\\( \\frac{1}{\\sqrt[n]{x}} = x^{-\\frac{1}{n}} \\)";
    var sqrtnInvPow = "\\( \\Big( \\frac{1}{\\sqrt[n]{x}}\\Big)^{m} = x^{-\\frac{m}{n}} \\)";

    var sqrtnEx = "\\( \\sqrt{x}^{6} = x^{\\frac{6}{2}} = x^3  \\)";
    var sqrtnEx2 = "\\( \\Big( \\frac{1}{\\sqrt[3]{x}}\\Big)^{2} = x^{-\\frac{2}{3}} \\)";

    return (
            <> 
                <p>La définition de la racine carrée est la suivante : </p>
                <MathJaxDisplay toShow={sqrt2} demo/>
                <p>Nous allons essayer de déterminer la valeur de <MathJaxInline toShow={"$n$"} /> pour laquelle <MathJaxInline toShow={"$x^n = \\sqrt{x}$"} /> </p>
                <MathJaxDisplay toShow={sqrt22} demo/>
                <p>Avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/multiplication-de-puissances-de-x`} external>cette formule</Link> on sait que :</p>
                <MathJaxDisplay toShow={sqrt23} demo/>
                <MathJaxDisplay toShow={sqrt24} demo/>
                <p>Il nous suffit alors de résoudre l'équation :</p>
                <MathJaxDisplay toShow={sqrt25} demo/>
                <p>Ce qui nous nous donne comme résultat :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrt26} />
                </Container>
                <p>
                    Mais la racine carrée est une racine particulière avec <MathJaxInline toShow={"$n = 2$"} />.
                    {"\n"}
                    La racine carrée pourrait alors éventuellement s'écrire aussi <MathJaxInline toShow={"$\\sqrt[2]{x}$"} />
                    {"\n"}
                    Nous pouvons généraliser cette formule pour tout <MathJaxInline toShow={"$n$"} />...
                    {"\n"}{"\n"}
                </p>
                <p>Par exemple, si l'on prend par exemple <MathJaxInline toShow={"$n = 3$"} />, autrement dit la racine cubique a comme définition :</p>
                <MathJaxDisplay toShow={sqrt3} demo/>
                <p>En réitérant le même processus que plus haut, on obtient comme équation à résoudre :</p>
                <MathJaxDisplay toShow={sqrt32} demo/>
                <p>Soit : </p>
                <MathJaxDisplay toShow={sqrt33} demo/>
                <p>On a alors pour tout <MathJaxInline toShow={"$n$"} /> :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrtn}/>
                </Container>
                <p>En prenant <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/inverse-de-puissances-de-x`}>l'inverse d'une puissance</Link> à l'équation ci-dessus, on aura : </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrtnInv} />
                </Container>
                <p>Et alors en appliquant <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/multiplication-de-puissances-de-x`}>une puissance d'une puissance</Link> : </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrtnInvPow} />
                </Container>

                <Title2 title={"Exemples"} />
                <MathJaxDisplay toShow={sqrtnEx} demo />
                <MathJaxDisplay toShow={sqrtnEx2} demo />
            </>
    );
}

export default LienEntrePuissancesEtRacines;
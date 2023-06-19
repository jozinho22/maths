import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import pathBuilder from '../../../helpers/pathBuilder';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const Inequations = () => {

    var equBase = "\\(f(x) = 2x + 3\\)";
    var equBaseWithMinus = "\\(f(x) = -2x + 3\\)";

    var equBaseLessThanOrEquals0 = "\\(2x + 3 \\leqslant 0\\)";
    var equBaseLessThanOrEquals0WithMinus = "\\(-2x + 3 \\leqslant 0\\)";

    var equBaseMinus3 = `\\(2x + 3 - 3 \\leqslant 0 -3 \\)`;
    var equBaseMinus3WithMinus = `\\(-2x + 3 -3 \\leqslant 0 -3\\)`;
    
    var equBaseMinus32 = "\\(2x \\leqslant - 3\\)";
    var equBaseMinus32WithMinus = "\\(-2x \\leqslant - 3\\)";

    var equBaseMinus32divBy2 = `\\(\\frac{2x}{2} \\leqslant \\frac{-3}{2} \\)`;
    var equBaseMinus32divBy2WithMinus = `\\(\\frac{-2x}{-2} \\leqslant \\frac{-3}{-2} \\)`;

    var equBaseMinus32divBy22 = "\\(x \\leqslant -\\frac{3}{2} \\)";
    var equBaseMinus32divBy22WithMinus = "\\(x \\geqslant -\\frac{3}{2} \\)";

    var exampleWithReels = "\\(3 \\leqslant 6\\)";
    var exampleWithReelsMultByNegativeNumber = `\\(3 \\times (-4) \\leqslant 6 \\times (-4)\\)`;
    var exampleWithReelsMultByNegativeNumber2 = "\\(-12 \\geqslant -24\\)";

    var divideEqualsMultiplyByInverse = "\\( \\frac{a}{b} = a \\times \\frac{1}{b} \\)";

    var descrescantFunc = "\\( j(x) = -ax \\)";
    var descrescantFuncExample = "\\( j(x) = -4x \\)";
    var exampleWithReelsWithFunc = "\\(3 \\leqslant 6\\)";
    var exampleWithReelsMultByNegativeNumberWithFunc = `\\( j(3) \\geqslant j(6) \\)`;
    var exampleWithReelsMultByNegativeNumberWithFunc2 = `\\( (-4) \\times 3 \\geqslant (-4) \\times 6  \\)`;

    return  <>
                <p>
                    On appelle inéquations les équations qui portent non pas un signe <MathJaxInline toShow={"$=$"} /> mais une signe <MathJaxInline toShow={"$\\leqslant$"} /> ou <MathJaxInline toShow={"$\\geqslant$"} />.
                </p>

                <Title1 title={"a) Exemple"} />
                <p>Nous allons reprendre notre fonction précédente:</p>
                <MathJaxDisplay toShow={equBase} demo />
                <p>Mais cette fois-ci, nous allons essayer de résoudre <MathJaxInline toShow={"$f(x) \\leqslant 0$"} />, c'est-à-dire lorsque cette fonction est inférieure ou égale à <MathJaxInline toShow={"$0$"} />.</p>
                <p>On a alors :</p>
                <MathJaxDisplay toShow={equBaseLessThanOrEquals0} demo />
                <p>Nous allons de la même manière isoler la variable <MathJaxInline toShow={"$x$"} />.</p>
                <p>On retire le nombre <MathJaxInline toShow={"$3$"} /> de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus3} demo />
                <p>Ce qui nous donne :</p>
                <MathJaxDisplay toShow={equBaseMinus32} demo />
                <p>On divise chaque côté par <MathJaxInline toShow={"$2$"} /> de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy2} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy22} demo />
                <p>En conclusion :</p>
            
                <Container className="Focus">
                    <MathJaxDisplay toShow={equBaseLessThanOrEquals0} />
                    <MathJaxDisplay toShow={"$Lorsque$"} />
                    <MathJaxDisplay toShow={equBaseMinus32divBy22} />
                </Container>

                <Title1 title={"b) Subtilité par rapport aux équations"} />
                <p>On dirait que la résolution d'inéquations ressemble trait pour trait à la résolution d'équations, cependant il y a une subtilité à connaître.</p>
                <p>Si nous avions eu, à la place de :</p>
                <MathJaxDisplay toShow={equBase} demo />
                <p>L'expression :</p>
                <MathJaxDisplay toShow={equBaseWithMinus} demo />
                <p>Nous aurions eu non pas à diviser par <MathJaxInline toShow={"$2$"} /> pour isoler <MathJaxInline toShow={"$x$"} />, mais bien par <MathJaxInline toShow={"$-2$"} />.</p>
                <p>Ce qui va faire changer le sens de l'inéquation, on va passer d'un signe <MathJaxInline toShow={"$\\leqslant$"} /> à un signe <MathJaxInline toShow={"$\\geqslant$"} />. </p>
                
                <p>Reprenons le calcul, nous avons comme hypothèse :</p>
                <MathJaxDisplay toShow={equBaseLessThanOrEquals0WithMinus} demo />
                <p>En retirant <MathJaxInline toShow={"$3$"} /> ça ne change rien.</p>
                <MathJaxDisplay toShow={equBaseMinus3WithMinus} demo />
                <MathJaxDisplay toShow={equBaseMinus32WithMinus} demo />
                <MathJaxDisplay toShow={equBaseMinus32divBy2WithMinus} demo />
                <p>Ici le signe va changer.</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy22WithMinus} demo />
                <Container className="Focus">
                    <MathJaxDisplay toShow={equBaseLessThanOrEquals0WithMinus} />
                    <MathJaxDisplay toShow={"$Lorsque$"} />
                    <MathJaxDisplay toShow={equBaseMinus32divBy22WithMinus} />
                </Container>

                <Title2 title={"Explications"} />
                <p>Supposons une situation avec des nombres réels, par exemple :</p>
                <MathJaxDisplay toShow={exampleWithReels} demo />
                <p>Appliquons maintenant une multiplication (ou division) par un nombre négatif.</p>
                <MathJaxDisplay toShow={exampleWithReelsMultByNegativeNumber} demo />
                <p>On voit bien que pour l'expression reste vraie, il faut passer d'un signe <MathJaxInline toShow={"$\\leqslant$"} /> à un signe <MathJaxInline toShow={"$\\geqslant$"} />, sinon l'équation devient fausse.</p>
                <p>Effectivement ici :</p>
                <MathJaxDisplay toShow={exampleWithReelsMultByNegativeNumber2} demo />
                <p>Car <MathJaxInline toShow={"$-12$"} /> est bien supérieur à <MathJaxInline toShow={"$-24$"} />.</p>
                <p>Ce qui se passe réellement ici lorsque l'on multiplie les deux côtés par un nombre négatif, c'est qu'on leur applique une fonction qui est décroissante sur l'intervalle, une fonction de type : </p>
                <MathJaxDisplay toShow={descrescantFunc} demo />
                <p>En l'occurrence avec <MathJaxInline toShow={"$-4$"} />, c'est la fonction :</p>
                <MathJaxDisplay toShow={descrescantFuncExample} demo />
                <p>Si l'on reprend, il s'est alors passé ceci :</p>
                <MathJaxDisplay toShow={exampleWithReelsWithFunc} demo />
                <MathJaxDisplay toShow={exampleWithReelsMultByNegativeNumberWithFunc} demo />
                <p>Et ici vu que la fonction est décroissante sur <MathJaxInline toShow={"$\\mathbb{R}$"} />, on change le signe : </p>
                <MathJaxDisplay toShow={exampleWithReelsMultByNegativeNumberWithFunc2} demo />
                <MathJaxDisplay toShow={exampleWithReelsMultByNegativeNumber2} demo />

                <Title1 title={"c) Conclusion"} />
                <p>Les inéquations du premier degré fonctionnent comme les équations du premier degré, sauf que l'on change de signe (<MathJaxInline toShow={"$\\leqslant$"} /> devient <MathJaxInline toShow={"$\\geqslant$"} /> ou inversement) si l'on multiplie (ou divise) par un nombre négatif.</p>
                <p>Il est à noter que c'est lors d'une multiplication, ou d'une division. Les deux reviennent au même, car diviser un nombre <MathJaxInline toShow={"$a$"} /> par un nombre <MathJaxInline toShow={"$b$"} /> revient à multiplier par l'inverse de <MathJaxInline toShow={"$b$"} />.</p>
                <MathJaxDisplay toShow={divideEqualsMultiplyByInverse} demo />
                <p>L'inverse de <MathJaxInline toShow={"$b$"} /> se note <MathJaxInline toShow={"$\\frac{1}{b}$"} /> ou encore <MathJaxInline toShow={"$b^{-1}$"} /> (voir <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.PUISSANCES}/inverse-de-puissances`)} external>chapitre sur l'inverse</Link>).</p>
            </>
}

export default Inequations;
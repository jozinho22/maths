import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';
import derivativeFirstApprox from '../assets/derivativeFirstApprox.png';
import coefficientDirecteurCalculus from '../assets/coefficientDirecteurCalculus.png';
import derivativeBetterApprox from '../assets/derivativeBetterApprox.png';
import derivativeBetterBetterApprox from '../assets/derivativeBetterBetterApprox.png';

const Presentation = () => {

    var n = 0;

    var tauxVar = "\\(a = \\frac{\\Delta y}{\\Delta x}\\)";
    var tauxVar2 = "\\(a = \\frac{y_b - y_a}{x_b - x_a}\\)";
    var tauxVar3 = "\\(a = \\frac{f(x_0+h) - f(x_0)}{x_0  +h -x_0}\\)";
    var tauxVar4 = "\\(a = \\frac{f(x_0+h) - f(x_0)}{h }\\)";

    var limTauxVar = "\\(a = lim_{ h \\to 0} \\enspace \\frac{f(x_0+h) - f(x_0)}{h}\\)";
    var limTauxVar2 = "\\(f'(x) = lim_{h \\to 0} \\enspace  \\frac{f(x+h) - f(x)}{h}\\)";

    var leibnizNotation = "\\(f'(x) \\Leftrightarrow \\frac{df}{dx}\\)";

    var derivabilityInAGen = "\\( f'(x) = lim_{x  \\to a} \\enspace \\frac{f(x) - f(a)}{x-a}\\)";

    var derivabilityCondition = "\\(lim_{h \\to 0} \\enspace  \\frac{f(x+h) - f(x)}{h} = a, (avec \\enspace a \\in  \\mathbb{R}) \\)";

    var derivableImpliesContinue = "\\(f \\enspace d \\acute{e} rivable \\enspace en \\enspace a \\implies f \\enspace continue \\enspace en \\enspace a\\)";
    
    var nonContinueImpliesNonDerivable = "\\(f \\enspace non \\enspace continue \\enspace en \\enspace a \\implies f \\enspace non \\enspace d \\acute{e} rivable \\enspace en \\enspace a \\)";

    return  <>
                <p>
                    La dérivée est une notion clef dans l’analyse de fonctions, car elle sous-tend toute la
                    science physique.
                </p>
                <p>
                   Elles nous serviront de base pour étudier par la suite les calculs différentiel et intégral.
                </p>
                <p>
                    Prenons une fonction <MathJaxInline toShow={"$ y = f(x) $"} /> au hasard, en vert sur la figure.
                </p>
                <ImageZoom src={derivativeFirstApprox} name="Présentation de la dérivée" n={++n} />
                <p>
                    Nous y situons deux points sur l’axe des abscisses, <MathJaxInline toShow={"$ x_0 $"} /> et <MathJaxInline toShow={"$ x_0 + h $"} /> (<MathJaxInline toShow={"$ h $"} /> étant une distance au hasard avec <MathJaxInline toShow={"$ h > 0 $"} />).
                </p>
                <p>Leur image étant respectivement <MathJaxInline toShow={"$ f(x_0) $"} /> et <MathJaxInline toShow={"$ f(x_0 +h) $"} />, on obtient deux points <MathJaxInline toShow={"$ A(x_0, f(x_0)) $"} /> et <MathJaxInline toShow={"$ B(x_0 + h, f(x_0 + h)) $"} />.</p>
                <p>Nous obtenons alors en traçant la droite qui les relie, soit une pente moyenne de la variation de la fonction entre <MathJaxInline toShow={"$ A $"} /> et <MathJaxInline toShow={"$ B $"} />.</p>

                <Title1 title={"a) Calcul de la pente"} />
                <p>Cette pente, nous pouvons la calculer avec la formule suivante : </p>
                <MathJaxDisplay toShow={tauxVar} demo />  
                <MathJaxDisplay toShow={tauxVar2} demo />  
                <ImageZoom src={coefficientDirecteurCalculus} name="Calcul du coefficient directeur" n={++n} />
                <p>Dans notre cas, cela donne :</p>
                <MathJaxDisplay toShow={tauxVar3} demo /> 
                <p>Soit : </p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={tauxVar4} />  
                </Container>

                <Title1 title={"b) Première approximation de la dérivée"} />
                <p>Nous allons alors réduire petit à petit cette distance <MathJaxInline toShow={"$ h $"} /> qui sépare nos deux points sur l’axe des abscisses.
                </p>
                <ImageZoom src={derivativeBetterApprox} name="Première approximation de la dérivée" n={++n} />
                <p>
                    Nous voyons que les valeurs de <MathJaxInline toShow={"$ x_0 $"} /> et <MathJaxInline toShow={"$ x_0 +h $"} /> commencent à se rapprocher, et la
                    droite qui relie les points <MathJaxInline toShow={"$ A $"} /> et <MathJaxInline toShow={"$ B $"} /> commencent à dessiner une tangente à la
                    courbe.
                </p>

                <Title1 title={"c) Meilleure approximation de la dérivée"} />
                <p>
                    De la même manière, nous allons encore réduire la distance <MathJaxInline toShow={"$ h $"} />, celle-ci commence à tendre vers <MathJaxInline toShow={"$ 0 $"} />.
                </p>
                <ImageZoom src={derivativeBetterBetterApprox} name="Meilleure approximation de la dérivée" n={++n} />
                <p>On voit à présent que les deux points <MathJaxInline toShow={"$ A$"} /> et <MathJaxInline toShow={"$ B $"} /> sont quasiment confondues, et que nous obtenons alors parfaitement tangente à la courbe au point d'abscisse <MathJaxInline toShow={"$ x_0 $"} />. </p>
                <p>
                    En imaginant que <MathJaxInline toShow={"$ h $"} /> devient de plus en plus petit et s’approche de 0, 
                    notre formule peut s'exprimer comme telle :
                </p>
                <MathJaxDisplay toShow={limTauxVar} demo />  
                <p>Ce nombre <MathJaxInline toShow={"$ a $"} /> obtenu, pour un <MathJaxInline toShow={"$ x_0 $"} /> choisi arbitrairement, sera appelé le nombre dérivée de la fonction <MathJaxInline toShow={"$ f $"} /> au point <MathJaxInline toShow={"$ x_0 $"} />.</p>
                <p>Il sera noté <MathJaxInline toShow={"$ f'(x_0)$"} />.</p>
                <p>
                    Et par généralisation, c'est-à-dire pour tout <MathJaxInline toShow={"$ x $"} /> , on appelle <MathJaxInline toShow={"$ f'(x) $"} /> l'expression de la dérivée de la fonction
                    <MathJaxInline toShow={"$ f(x) $"} />.
                </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={limTauxVar2}  />  
                </Container>
                <p>On dit que la dérivée est la limite du taux de variation quand <MathJaxInline toShow={"$ h $"} /> tend vers <MathJaxInline toShow={"$ 0 $"} />.</p>
                <p>En physique, on pourra aussi utiliser la notation différentielle de Leibniz : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={leibnizNotation} />  
                </Container>
                <p>On pourra enfin la retrouver aussi sous cette forme-ci</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={derivabilityInAGen} />  
                </Container>

                <Title1 title={"d) Condition à la dérivabilité"} />
                <p>On dit qu'une fonction est dérivable si et seulement si le nombre dérivée de la fonction <MathJaxInline toShow={"$ f(x) $"} /> au point d'abscisse <MathJaxInline toShow={"$ a $"} />, c'est-à-dire <MathJaxInline toShow={"$ f'(a) $"} />,  est un nombre réel.</p>
                <p>Soit <MathJaxInline toShow={"$ f $"} /> est dérivable en <MathJaxInline toShow={"$ a $"} /> si et seulement si :</p> 
                <Container className="Focus">
                     <MathJaxDisplay toShow={derivabilityCondition} />  
                </Container>

                <Title1 title={"e) Dérivable => continue"} />
                <p>Toute fonction dérivable en <MathJaxInline toShow={"$ a $"} /> implique que la fonction est continue à ce point <MathJaxInline toShow={"$ a $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={derivableImpliesContinue} />  
                </Container>
                <p>Par contraposée, toute fonction qui n'est pas continue en un point <MathJaxInline toShow={"$ a $"} /> n'est pas dérivable sur ce point <MathJaxInline toShow={"$ a $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={nonContinueImpliesNonDerivable} />  
                </Container>
                <p>Attention, une fonction peut cependant être continue mais non dérivable (exemple : la fonction aleur absolue, <MathJaxInline toShow={"$ x \\longmapsto | x | $"} />, en <MathJaxInline toShow={"$ a = 0 $"} />).</p>
            </>
}

export default Presentation;
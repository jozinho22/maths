import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../ImageZoom';

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

    return  <>
                <p>
                    La dérivée est une notion clef dans l’analyse de fonctions, car elle sous-tend toute la
                    science physique.
                </p>
                <p>
                   Elles nous serviront de base pour étudier par la suite le calcul différentiel ainsi que les
                    intégrales.
                </p>
                <p>
                    Prenons une fonction <MathJaxInline toShow={"$ y = f(x) $"} /> au hasard, en vert sur la figure.
                </p>
                <ImageZoom src={derivativeFirstApprox} name="Présentation de la dérivée" n={++n} />
                <p>
                    Nous y situons deux points sur l’axe des abscisses, <MathJaxInline toShow={"$ x_0 $"} /> et <MathJaxInline toShow={"$ x_0 + h $"} />.
                </p>
                <p><MathJaxInline toShow={"$ h $"} />étant une distance au hasard avec <MathJaxInline toShow={"$ a \\neq 0 $"} />.</p> 
                <p>Leur image étant respectivement <MathJaxInline toShow={"$ f(x_0) $"} /> et <MathJaxInline toShow={"$ f(x_0 +h) $"} />, on obtient deux points <MathJaxInline toShow={"$ A $"} /> et <MathJaxInline toShow={"$ B $"} />.</p>
                <p>Nous obtenons alors en traçant la droite qui les relie, une pente approximative de la variation de la fonction.</p>

                <p className="Title1">a) Calcul de la pente</p>
                <p>Cette pente nous pouvons la calculer avec la formule suivante.</p>
                <MathJaxDisplay toShow={tauxVar} demo />  
                <MathJaxDisplay toShow={tauxVar2} demo />  
                <ImageZoom src={coefficientDirecteurCalculus} name="Calcul du coefficient directeur" n={++n} />
                <p>Dans notre cas, cela donne :</p>
                <MathJaxDisplay toShow={tauxVar3} demo />  
                <Container className="Focus">
                     <MathJaxDisplay toShow={tauxVar4} />  
                </Container>

                <p className="Title1">b) Première approximation</p>
                <p>Nous allons à présent réduire cette distance <MathJaxInline toShow={"$ h $"} /> qui sépare nos deux points sur l’axe des abscisses.
                </p>
                <ImageZoom src={derivativeBetterApprox} name="Première approximation de la dérivée" n={++n} />
                <p>
                    Nous voyons que les valeurs de <MathJaxInline toShow={"$ x_0 $"} /> et <MathJaxInline toShow={"$ x_0 +h $"} /> commencent à se rapprocher, et la
                    droite qui relie les points <MathJaxInline toShow={"$ A $"} /> et <MathJaxInline toShow={"$ B $"} /> commencent à dessiner une tangente à la
                    courbe.
                </p>

                <p className="Title1">c) Meilleure approximation</p>
                <p>
                    De la même manière, nous allons encore réduire la distance <MathJaxInline toShow={"$ h $"} />
                    celle-ci s’approche de <MathJaxInline toShow={"$ 0 $"} />.
                </p>
                <ImageZoom src={derivativeBetterBetterApprox} name="Meilleure approximation de la dérivée" n={++n} />
                <p>On voit à présent que les deux points <MathJaxInline toShow={"$ A$"} /> et <MathJaxInline toShow={"$ B $"} /> sont quasiment confondues.</p>
                <p>
                    En imaginant que <MathJaxInline toShow={"$ h $"} /> devient de plus en plus petit et s’approche de
                    formule de la pente devient notre définition de la dérivée :
                </p>
                <MathJaxDisplay toShow={limTauxVar} demo />  
                <p>
                    Pour un nombre particulier <MathJaxInline toShow={"$ x_0 $"} />, on appellera <MathJaxInline toShow={"$ f'(x_0) $"} /> le nombre dérivée de la
                    fonction <MathJaxInline toShow={"$ f(x) $"} />.
                </p>
                <p>
                    Et par généralisation, pour tout <MathJaxInline toShow={"$ x $"} /> , on appelle <MathJaxInline toShow={"$ f'(x) $"} /> la dérivée de la fonction
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
            </>
}

export default Presentation;
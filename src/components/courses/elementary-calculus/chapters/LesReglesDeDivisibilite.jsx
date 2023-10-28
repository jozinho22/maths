import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';


const LesReglesDeDivisibilite = () => {

    var div = "\\( a = bq \\)";
    var div2 = "\\( \\Longleftrightarrow \\frac{a}{b} = q \\)";

    var divPlusReste = "\\(  a = bq + r \\)";

    var aDiviseB = "\\(  b \\enspace divise \\enspace a \\Longleftrightarrow a \\enspace est \\enspace multiple \\enspace de \\enspace b \\)";

    return  <>
                <p>Pour rappel, pour qu'un nombre <MathJaxInline toShow={"$a$"} /> soit divisible par un autre nombre <MathJaxInline toShow={"$b$"} />, il faut que :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={div}/>
                    <MathJaxDisplay toShow={div2}/>
                </Container>
                <p>Autrement dit, il ne faut pas qu'il y ait un reste après la division euclidienne.</p>
                <p>Dans le cas d'un reste, le nombre <MathJaxInline toShow={"$a$"} /> s'écrit : </p>
                <MathJaxDisplay toShow={divPlusReste} demo />

                <p>Si <MathJaxInline toShow={"$a$"} /> est divisible par <MathJaxInline toShow={"$b$"} />, on dit que <MathJaxInline toShow={"$a$"} /> est un multiple de <MathJaxInline toShow={"$b$"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={aDiviseB}/>
                </Container>

                <Title1 title={"1) La divisibilité par 2"} />
                <p>
                    Les nombres divisibles par <MathJaxInline toShow={"$2$"} /> sont les nombres finissant par <MathJaxInline toShow={"$0$"} />, <MathJaxInline toShow={"$2$"} />, <MathJaxInline toShow={"$4$"} />, <MathJaxInline toShow={"$6$"} /> ou <MathJaxInline toShow={"$8$"} />.
                </p>
                
                <Title1 title={"2) La divisibilité par 3"} />
                <p>
                    Les nombres divisibles par <MathJaxInline toShow={"$3$"} /> sont les nombres dont la somme des chiffres le composant est divisible <MathJaxInline toShow={"$3$"} />.
                </p>
                <Title2 title={"Exemple"} />
                <p><MathJaxInline toShow={"$921$"} /> est divisible par <MathJaxInline toShow={"$3$"} /> car <MathJaxInline toShow={"$(9 + 2 + 1) = 12$"} /> est un multiple de <MathJaxInline toShow={"$3$"} />.</p>
                <p><MathJaxInline toShow={"$143$"} /> n'est divisible par <MathJaxInline toShow={"$3$"} /> car <MathJaxInline toShow={"$(1 + 4 + 3) = 8$"} /> n'est pas un multiple de <MathJaxInline toShow={"$3$"} />.</p>
                
                <Title1 title={"3) La divisibilité par 4"} />
                <p>Pour la divisibilité par <MathJaxInline toShow={"$4$"} />, on s'intéresse à la fin des nombres c'est-à-dire de leur parties entre <MathJaxInline toShow={"$0$"} /> et <MathJaxInline toShow={"$100$"} />.</p>
                <p>On peut réduire ce problème à cet intervalle car la partie multiple de <MathJaxInline toShow={"$100$"} /> est nécessairement divisible par <MathJaxInline toShow={"$4$"} /> (<MathJaxInline toShow={"$1000$"} />, <MathJaxInline toShow={"$2400$"} />,<MathJaxInline toShow={"$3600$"} /> sont tous divisibles par <MathJaxInline toShow={"$4$"} />).</p>
                <p>
                    Soit un nombre <MathJaxInline toShow={"$a$"} /> à étudier.
                </p>
                <p>a) si <MathJaxInline toShow={"$ 0 \\leqslant a \\leqslant 40$"} />, <MathJaxInline toShow={"$a$"} /> est divisible par <MathJaxInline toShow={"$4$"} /> si la somme des chiffres qui le composent est divisible par <MathJaxInline toShow={"$4$"} />.</p>
                <p>b) si <MathJaxInline toShow={"$ 40 \\leqslant a \\leqslant 80$"} />, <MathJaxInline toShow={"$a$"} /> est divisible par <MathJaxInline toShow={"$4$"} /> si la somme des chiffres qui composent <MathJaxInline toShow={"$(a - 40)$"} /> est divisible par <MathJaxInline toShow={"$4$"} />.</p>
                <p>c) si <MathJaxInline toShow={"$ 80 \\leqslant a \\leqslant 100$"} />, <MathJaxInline toShow={"$a$"} /> est divisible par <MathJaxInline toShow={"$4$"} /> si la somme des chiffres qui composent <MathJaxInline toShow={"$(a - 80)$"} /> est divisible par <MathJaxInline toShow={"$4$"} />.</p>
                <Title2 title={"Exemple"} />
                <p><MathJaxInline toShow={"$76$"} /> est divisible par <MathJaxInline toShow={"$4$"} /> car <MathJaxInline toShow={"$(80 - 76) = 4$"} /> est un multiple de <MathJaxInline toShow={"$4$"} />.</p>
                <p><MathJaxInline toShow={"$1346$"} /> n'est divisible par <MathJaxInline toShow={"$4$"} /> car <MathJaxInline toShow={"$(46 - 40) = 6$"} /> n'est pas un multiple de <MathJaxInline toShow={"$4$"} />.</p>
                <p>Remarque : si un nombre est divisible par <MathJaxInline toShow={"$4$"} />, il est divisible par <MathJaxInline toShow={"$2$"} />.</p>
                
                <Title1 title={"4) La divisibilité par 5"} />
                <p>
                    Les nombres divisibles par <MathJaxInline toShow={"$5$"} /> sont les nombres finissant par <MathJaxInline toShow={"$0$"} /> ou <MathJaxInline toShow={"$5$"} />.
                </p>

                <Title1 title={"5) La divisibilité par 6, 7"} />
                <p>Pour ces deux nombres, il faut appliquer la même méthode que pour la divisibilité par <MathJaxInline toShow={"$4$"} /> mais adaptée pour ces deux cas. </p>
                <p>Pour la divisibilité par <MathJaxInline toShow={"$6$"} />, on pourra trancher par portions de <MathJaxInline toShow={"$300$"} /> ou de <MathJaxInline toShow={"$600$"} />, et par la suite avancer par portions de <MathJaxInline toShow={"$30$"} /> ou <MathJaxInline toShow={"$60$"} />.</p>
                <p>Pour la divisibilité par <MathJaxInline toShow={"$7$"} />, on pourra trancher par portions de <MathJaxInline toShow={"$700$"} />, et par la suite avancer par portions de <MathJaxInline toShow={"$70$"} />.</p>

                <Title1 title={"6) La divisibilité par 8"} />
                <p>De même, il faut appliquer la même méthode que pour la divisibilité par <MathJaxInline toShow={"$4$"} /> mais adaptée à ce cas. </p>
                <p>On pourra trancher par portions de <MathJaxInline toShow={"$400$"} /> ou de <MathJaxInline toShow={"$800$"} />, et par la suite avancer par portions de <MathJaxInline toShow={"$40$"} /> ou <MathJaxInline toShow={"$80$"} />.</p>
                <p>Remarque : si un nombre est divisible par <MathJaxInline toShow={"$8$"} />, il est divisible par <MathJaxInline toShow={"$4$"} /> et par <MathJaxInline toShow={"$2$"} />.</p>

                <Title1 title={"7) La divisibilité par 9"} />
                <p>
                    Les nombres divisibles par <MathJaxInline toShow={"$9$"} /> sont les nombres dont la somme des chiffres le composant est divisible <MathJaxInline toShow={"$9$"} />.
                </p>
                <p>Remarque : si un nombre est divisible par <MathJaxInline toShow={"$9$"} />, il est divisible par <MathJaxInline toShow={"$3$"} />.</p>
                
            </>
}

export default LesReglesDeDivisibilite; 
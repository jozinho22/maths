import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const LAdditionLaSoustraction = () => {
   
    var commut = "\\( a + b = b + a \\)";

    var addNombNeg = "\\(  3 - 4 = 3 + (- 4)\\)";

    var oppose = "\\( oppos \\acute{e}(n) = -n \\)";
    var oppose2 = "\\( oppos \\acute{e}(-n) = n \\)";

    var nombPlusOppose = "\\( nombre + oppos \\acute{e} = 0\\)";
    var nombPlusOppose2 = "\\( 1 + (-1) = 0\\)";

    var neutral = "\\( nombre + (\\acute{e}l\\acute{e}ment \\enspace neutre) = nombre \\)";

    var neutral2 = "\\( 1 + 0 = 1 \\)";
    
    var cas1 = "\\(  4 + 5 = 9  \\)";
    var cas2 = "\\(  4 - 5 = -1  \\)";
    var cas3 = "\\(  4 - 5 =-1  \\)";
    var cas4 = "\\(  4 + 5 = 9  \\)";

    var add = "\\(  ajouter \\enspace un \\enspace nombre \\enspace positif \\Longleftrightarrow retirer \\enspace un \\enspace nombre \\enspace n\\acute{e}gatif   \\)";
    var subs = "\\(  retirer \\enspace un \\enspace nombre \\enspace positif \\Longleftrightarrow ajouter \\enspace un \\enspace nombre \\enspace n\\acute{e}gatif   \\)";


    return  <>
                <Title1 title={"1) La commutativité"} />
                <p>
                    La commutativité nous dit que :
                </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={commut}/>
                </Container>

                <Title1 title={"2) L'addition « = » la soustraction"} />
                <p>Une soustraction peut s’écrire comme une addition.</p>
                <p>C’est l’addition d’un nombre négatif.</p>

                <p>Par exemple :</p>
                <MathJaxDisplay toShow={addNombNeg} demo />
                <p>Soustraire un nombre revient alors à additionner son opposé.</p>

                <p>Dans les cas de l'addition ou de la soustraction, on dit qu'on additionne ou que l'on soustrait des termes.</p>
                
                <Title2 title={"Opposé d'une nombre"} />
                <p>De même, on appelle l'opposé d'un nombre, ce nombre avec son signe opposé.</p>
                <MathJaxDisplay toShow={oppose} demo />
                <MathJaxDisplay toShow={oppose2} demo/>
                <p>Soustraire un nombre revient à additionner son opposé.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={nombPlusOppose}/>
                </Container>
                <p>Exemple : </p>
                <MathJaxDisplay toShow={nombPlusOppose2} demo />

                <Title1 title={"3) Élément neutre"} />
                <p>Pour l’addition/soustraction, on appelle le nombre <MathJaxInline toShow={"$0$"} /> l’élément neutre.</p>
                <p>Car ajouter <MathJaxInline toShow={"$0$"} /> ne change rien : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={neutral} />
                </Container>
                <p>Exemple : </p>
                <MathJaxDisplay toShow={neutral2} demo/>
                <p>L'addition et la soustraction peuvent donc être considérées comme une seule et même chose. Il existe le même principe pour la multiplication/division.</p>

                <Title1 title={"4) Addition de nombres relatifs"} />
                <p>Lorsque l’on additionne des nombres relatifs, on aura quatre cas :</p>
                <Title2 title={"a) Ajout d'un nombre positif"} />
                <MathJaxDisplay toShow={cas1} demo />
                <Title2 title={"b) Retrait d'un nombre positif"} />
                <MathJaxDisplay toShow={cas2} demo />
                <Title2 title={"c) Ajout d'un nombre négatif"} />
                <MathJaxDisplay toShow={cas3} demo />
                <Title2 title={"d) Retrait d'un nombre négatif"} />
                <MathJaxDisplay toShow={cas4} demo />

                <p>On voit qu’il existe en réalité deux catégories seulement :</p>
                <p>- l'addition</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={add}/>
                </Container>

                <p>- la soustraction</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={subs}/>
                </Container>
            </>
}

export default LAdditionLaSoustraction; 
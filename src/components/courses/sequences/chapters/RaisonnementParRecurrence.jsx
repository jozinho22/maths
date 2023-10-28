import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';

const RaisonnementParRecurrence = () => {

    var proposition = "\\( \\forall n \\geqslant 1, \\enspace (x^n)' = n.x^{n-1} \\)";
    
    var propositionRang1 = "\\( (x^1)' = (x)' = 1 \\)";
    var propositionRang1Calc = "\\( (x^1)' = 1.x^{1-1} = 1 \\)";

    var propositionRangnPlus1 = "\\( (x^{k+1})' = (k+1).x^{k} \\)";
    var propositionRangnPlus1Calc = "\\( (x^{k+1})' = (x.x^{k})'  \\)";
    var propositionRangnPlus1Calc2 = "\\( (x^{k+1})' =  x^{k} + x.(x^{k})' \\)";
    var propositionRangnPlus1Calc3 = "\\( (x^{k+1})' =  x^{k} + x.(k.x^{k-1}) \\)";
    var propositionRangnPlus1Calc4 = "\\( (x^{k+1})' =  x^{k} + (k.x^{k}) \\)";
    var propositionRangnPlus1Calc5 = "\\( (x^{k+1})' =  (1 + k) x^{k} \\)";

    
    return  <>
                <p>Le raisonnement par récurrence est très utilisée dans le cadre des suites pour démontrer des propriétés.</p>
                <p>Appellons <MathJaxInline toShow={"$ P(k) $"} /> la propriété à démontrer, le raisonnement se fait alors en quatre étapes.</p>
                
                <Title1 title={"Étapes"} />
                <Title2 title={"1) Initialisation"} />
                <p>On montre que <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son premier terme de rang <MathJaxInline toShow={"$ n_{0} $"} /></p>
                <Title2 title={"2) Supposition"} />
                <p>On suppose que <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son terme de rang <MathJaxInline toShow={"$ k $"} /></p>
                <Title2 title={"3) Hérédité"} />
                <p>On montre que <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son terme de rang <MathJaxInline toShow={"$ (k+1) $"} /></p>
                <Title2 title={"4) Conclusion"} />
                <p>On en conclue que la proposition <MathJaxInline toShow={"$ P(k) $"} /> est alors vraie de proche en proche et pour tout <MathJaxInline toShow={"$ k $"} />.</p>
             
                <Title1 title={"Exemple de rédaction"} />
                <p>On souhaite démontrer que la proposition <MathJaxInline toShow={"$ P(k) $"} /> suivante est vraie : </p>
                <MathJaxDisplay toShow={proposition} fRef={"P(k)"} demo /> 
                <p>Nous allons le montrer par récurrence.</p>

                <Title2 title={"1) Initialisation"} />
                <p>Pour son premier terme de rang <MathJaxInline toShow={"$ n_0 = 1 $"} />, calculons <MathJaxInline toShow={"$ (x^1)' $"} />:</p>
                <MathJaxDisplay toShow={propositionRang1} demo /> 
                <p>Comparons avec notre formule à démontrer : </p>
                <MathJaxDisplay toShow={propositionRang1Calc} demo /> 
                <p>Au rang <MathJaxInline toShow={"$ k = 1 $"} />, la proposition <MathJaxInline toShow={"$  P(1) $"} /> est bien vérifiée.</p>
                
                <Title2 title={"2) Supposition"} />
                <p>On suppose que la proposition <MathJaxInline toShow={"$ P(k) $"} /> est vraie pour son terme de rang <MathJaxInline toShow={"$ k $"} />.</p>
               
                <Title2 title={"3) Hérédité"} />
                <p>Si <MathJaxInline toShow={"$ P(k + 1) $"} /> est vraie, nous devrions obtenir cette forme là pour <MathJaxInline toShow={"$ (x^{k+1})' $"} /> :</p>
                <MathJaxDisplay toShow={propositionRangnPlus1} demo />
                <p>Calculons alors <MathJaxInline toShow={"$ (x^{k+1})' $"} />. </p>
                <MathJaxDisplay toShow={propositionRangnPlus1Calc} demo />
                <p>À l'aide de la formule de <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/derivee-d-un-produit-de-fonctions`} external>la dérivée d'une produit</Link>, on a :</p>
                <MathJaxDisplay toShow={propositionRangnPlus1Calc2} demo />
                <p>Avec notre hypothèse supposée vraie <MathJaxInline toShow={"$ P(k) $"} />, on a :</p>
                <MathJaxDisplay toShow={propositionRangnPlus1Calc3} demo />
                <MathJaxDisplay toShow={propositionRangnPlus1Calc4} demo />
                <MathJaxDisplay toShow={propositionRangnPlus1Calc5} demo />
                <p>La proposition <MathJaxInline toShow={"$ P(k+1) $"} /> est donc bien vérifiée.</p>
                
                <Title2 title={"4) Conclusion"} />
                <p>Comme nous avons montré que la proposition <MathJaxInline toShow={"$ P(k) $"} /> était vraie pour son premier terme de rang <MathJaxInline toShow={"$ k = 1 $"} />, et qu'en supposant qu'elle soit vrai au rang <MathJaxInline toShow={"$ k $"} />, nous avons montré qu'elle l'est aussi au rang <MathJaxInline toShow={"$ k + 1 $"} />.</p>
                <p>Par hérédité, elle est alors vraie de proche en proche et pour tout <MathJaxInline toShow={"$ k $"} />. </p>
            </>
}

export default RaisonnementParRecurrence;
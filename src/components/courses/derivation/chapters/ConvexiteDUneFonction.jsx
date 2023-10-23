import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';
import derivative2XSensVar from '../assets/derivative2XSensVar.png';
import derivativeSquareFunctionSensVarFPrim from '../assets/derivativeSquareFunctionSensVarFPrim.png';
import derivativeConvexity from '../assets/derivativeConvexity.png';
import derivativeConcavity from '../assets/derivativeConcavity.png';

import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import Aside from '../../helpers/Aside';
import useTableauDeVariations2Values from '../helpers/useTableauDeVariations2Values';
import useTableauDeConvexiteFonctionCarreValues from '../helpers/useTableauDeConvexiteFonctionCarreValues';
import useTableauDeConvexiteGenericValues from '../helpers/useTableauDeConvexiteGenericValues';

const ConvexiteDUneFonction = () => {

    var n = 0;

    var xSquaredSeconde = "\\( (2x)' = 2\\)";

    return  <>
                <p>Dans cette partie, nous allons repartir de la fonction du chapitre précédent, la fonction fonction <MathJaxInline toShow={"$ f(x): x \\longmapsto x^2 + 1 $"} />, définie pour tout <MathJaxInline toShow={"$x \\in \\mathbb{R}$"} />. </p>
                <ImageZoom src={derivativeSquareFunctionSensVarFPrim} name="Variations de la fonction x² + 1" n={++n} />
                <p>On a vu précédemment que c'est le signe de la dérivée qui indique le sens de variations de la fonction.</p>
                <p>Or, on s'aperçoit sur ce graphique que la dérivée <MathJaxInline toShow={"$f'$"} /> est toujours croissante. Cela signifie que sa dérivée elle-même est toujours positive.</p>
                <p>Dérivons une nouvelle fois pour obtenir la dérivée de la dérivée, la dérivée seconde.</p>
                <MathJaxDisplay toShow={xSquaredSeconde} demo />
                
                <p>Dans notre cas, voici le tableau de variation de <MathJaxInline toShow={"$f'$"} /> :</p>
                <GenericMathsNiceTable tableValues={useTableauDeVariations2Values()} />
                <ImageZoom src={derivative2XSensVar} name="Variations de la fonction 2x" n={++n} />
                <p>Il apparaît clait en observant les courbes représentatives que <MathJaxInline toShow={"$f'$"} /> est toujours croissante et que <MathJaxInline toShow={"$f''$"} /> est toujours positive. </p>

                <Title1 title={"Fonction convexe"} />
                <p>On a appelle fonction convexe (en forme de bol <MathJaxInline toShow={"$ \\cup $"} />), toute fonction dans laquelle on peut construire des cordes au-dessus de sa courbe représentative, et qui a ses tangentes situées en dessous de sa courbe représentative.</p>
                <ImageZoom src={derivativeConvexity} name="Fonction convexe" n={++n} />
                <Title1 title={"Fonction concave"} />
                <p>En opposition, on appelle fonction concave (en forme de cave <MathJaxInline toShow={"$ \\cap $"} />), toute fonction dans laquelle on peut construire des cordes en dessous de sa courbe représentative, et qui a ses tangentes situées au-dessus de sa courbe représentative.</p>
                <ImageZoom src={derivativeConcavity} name="Fonction concave" n={++n} />

                <p>Cette fois, c'est alors le signe de la dérivée seconde qui va nous indiquer la convexité de la fonction.</p>
                <p>Il y a alors trois cas possible.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 :} \\enspace f'' < 0$"} /></p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est concave.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2} \\enspace f'' = 0$"} /> et <MathJaxInline toShow={"$ f'' $"} /> change de signe entre avant et après ce point</p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> admet un point d'inflexion.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3}  \\enspace : f'' > 0$"} /> </p>
                <p>La courbe de la fonction <MathJaxInline toShow={"$f$"} /> est convexe.</p>
                <Aside>
                    <p>Attention, dans ce cas précis, la courbe de <MathJaxInline toShow={"$ f $"} /> n'admet pas de point d'inflexion en <MathJaxInline toShow={"$ x = 0$"} /> car <MathJaxInline toShow={"$ f'' $"} /> ne change pas de signe avant et après ce point.</p>
                </Aside>
                <p>Voici un résumé de l'étude de cette fonction :</p>
                <GenericMathsNiceTable tableValues={useTableauDeConvexiteFonctionCarreValues()} />
                
                <Title1 title={"Cas générique"} />
                <p>Voici le cas générique avec par exemple deux racines (c'est-à-dire deux valeurs de <MathJaxInline toShow={"$x$"} /> pour lesquelles la fonction dérivée seconde <MathJaxInline toShow={"$f''$"} /> s'annule) : </p>
                <GenericMathsNiceTable tableValues={useTableauDeConvexiteGenericValues()} />
            </>
}

export default ConvexiteDUneFonction;
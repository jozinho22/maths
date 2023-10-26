import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import Title1 from '../../helpers/Title1';
import CoursesConstants from '../../helpers/CoursesConstants';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauDeSignesDuPremierDegreExempleValues from '../helpers/useTableauDeSignesDuPremierDegreExempleValues';
import useTableauDeSignesDuPremierDegreGeneriqueValues from '../helpers/useTableauDeSignesDuPremierDegreGeneriqueValues';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const TableauxDeSignes = () => {

    var equ ="\\(f(x) = ax+ b \\enspace (avec \\enspace a, b \\in \\mathbb{R},  \\enspace a \\neq 0) \\)"

    return  <>
                <p>Soit une équation du premier degré.</p>    
                <MathJaxDisplay toShow={equ} demo />          
                <p>
                    En résolvant l'équation <MathJaxInline toShow={"$ f(x) = 0$"} />, nous obtenons une unique valeur pour <MathJaxInline toShow={"$x$"} />, appellons là <MathJaxInline toShow={"$x_0$"} />.
                </p>
                <p>Si nous reprenons notre exemple de fonction du <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.EQ_1_DEG}/resolution`} external>premier chapitre</Link>, <MathJaxInline toShow={"$f(x) = 2x + 3$"} />, nous pouvons dessiner son tableau de signe.</p>
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuPremierDegreExempleValues()} />
                <p>Comme son coefficient directeur <MathJaxInline toShow={"$ a$"} /> est positif, la courbe est croissante.</p>
                <p>On a donc un signe <MathJaxInline toShow={"$  (-) $"} /> avant <MathJaxInline toShow={"$ x_0$"} /> et un signe <MathJaxInline toShow={"$ (+) $"} /> après.</p>
                
                <Title1 title={"Cas générique"} />
                <p>Voici le cas générique avec la racine <MathJaxInline toShow={"$ x_0$"} /> (c'est-à-dire deux valeurs de <MathJaxInline toShow={"$x$"} /> pour lesquelles la fonction dérivée <MathJaxInline toShow={"$f$"} /> s'annule) : </p>
                <GenericMathsNiceTable tableValues={useTableauDeSignesDuPremierDegreGeneriqueValues()} />
                    
            </>
}

export default TableauxDeSignes;
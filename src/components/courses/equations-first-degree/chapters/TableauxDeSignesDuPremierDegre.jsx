import React from 'react';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Link from '../../../immutable/nav/Link';
import pathBuilder from '../../../helpers/pathBuilder';
import PagesConstants from '../../../immutable/nav/PagesConstants';

import CoursesConstants from '../../CoursesConstants';
import TableauDeSignesEtDeVariationsTable from '../../helpers/TableauDeSignesEtDeVariationsTable';
import useTableauDeSignesDuPremierDegreExempleValues from '../helpers/useTableauDeSignesDuPremierDegreExempleValues';
import useTableauDeSignesDuPremierDegreGeneriqueValues from '../helpers/useTableauDeSignesDuPremierDegreGeneriqueValues';

const TableauxDeSignesDuPremierDegre = () => {

    return  <>
                <p>
                    En résolvant l'équation <MathJaxInline toShow={"$ f(x) = 0$"} />, nous obtenons une unique valeur pour <MathJaxInline toShow={"$x$"} />, appellons là <MathJaxInline toShow={"$x_0$"} />.
                </p>
                <p>Si nous reprenons notre exemple de fonction du <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.EQ_1_DEG}/resolution`)} external>premier chapitre</Link>, <MathJaxInline toShow={"$f(x) = 2x + 3$"} />, nous pouvons dessiner son tableau de signe.</p>
                <TableauDeSignesEtDeVariationsTable tableValues={useTableauDeSignesDuPremierDegreExempleValues()} />
                <p>Comme son coefficient directeur <MathJaxInline toShow={"$ a$"} /> est positif, la courbe est croissante.</p>
                <p>On a donc un signe <MathJaxInline toShow={"$  - $"} /> avant <MathJaxInline toShow={"$ x_0$"} /> et un signe <MathJaxInline toShow={"$ + $"} /> après.</p>
                
                <p className="Title1">Cas générique</p>
                <p>Voici le cas générique avec la racine <MathJaxInline toShow={"$ x_0$"} /> (c'est-à-dire deux valeurs de <MathJaxInline toShow={"$x$"} /> pour lesquelles la fonction dérivée <MathJaxInline toShow={"$f$"} /> s'annule) : </p>
                <TableauDeSignesEtDeVariationsTable tableValues={useTableauDeSignesDuPremierDegreGeneriqueValues()} />
                    
            </>
}

export default TableauxDeSignesDuPremierDegre;
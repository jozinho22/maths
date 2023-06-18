import EquationsDuSecondDegre from './chapters/EquationsDuSecondDegre';
import RelationEntreCoefficientsEtRacines from './chapters/RelationEntreCoefficientsEtRacines';
import TableauxDeSigneEtDeVariationsDuSecondDegre from './chapters/TableauxDeSignesEtDeVariationsDuSecondDegre';

const getEquationsSecondDegreeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EquationsDuSecondDegre />,
            title: 'Résolution d\'équations',
            metaContent: 'Résolution d\'équations du second degré : explications.',
            relativePath: '/resolution'
        },
        {
            id: k++,
            component: <RelationEntreCoefficientsEtRacines />,
            title: 'Relation entre coefficients et racines',
            metaContent: 'La relation qu\'il existe entre les coefficients et les racines du pôlynome.',
            relativePath: '/relation-entre-coefficients-et-racines'
        },
        {
            id: k++,
            component: <TableauxDeSigneEtDeVariationsDuSecondDegre />,
            title: 'Tableaux de signes et de variations',
            metaContent: 'Tableaux de signes et de variations.',
            relativePath: '/tableaux-de-signes-et-de-variations'
        }
    ];
}

export default getEquationsSecondDegreeChapters;
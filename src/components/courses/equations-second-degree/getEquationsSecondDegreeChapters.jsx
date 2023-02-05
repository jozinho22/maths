import EquationsDuSecondDegre from './chapters/EquationsDuSecondDegre';
import RelationEntreCoefficientsEtRacines from './chapters/RelationEntreCoefficientsEtRacines';

const getEquationsSecondDegreeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EquationsDuSecondDegre />,
            title: 'Résolution d\'équations',
            metaContent: 'Résolution d\'équations du second degré : explications.',
            hiddenTitle: 'Résolution d\'équations du second degré',
            relativePath: 'resolution-d-equations-du-second-degre'
        },
        {
            id: k++,
            component: <RelationEntreCoefficientsEtRacines />,
            title: 'Relation entre coefficients et racines',
            metaContent: 'La relation qu\'il existe entre les coefficients et les racines du pôlynome.',
            hiddenTitle: 'Relation entre coefficients et racines',
            relativePath: 'relation-entre-coefficients-et-racines'
        }
    ];
}

export default getEquationsSecondDegreeChapters;
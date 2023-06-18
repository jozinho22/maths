import EquationsDuPremierDegre from './chapters/EquationsDuPremierDegre';
import AspectDesEquationsDuPremierDegre from './chapters/AspectDesEquationsDuPremierDegre';
import InequationsDuPremierDegre from './chapters/InequationsDuPremierDegre';
import TableauxDeSignesDuPremierDegre from './chapters/TableauxDeSignesDuPremierDegre';

const getEquationsFirstDegreeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EquationsDuPremierDegre />,
            title: 'Résolution d\'équations',
            metaContent: 'Résolution d\'équations du premier degré : explications.',
            relativePath: '/resolution'
        },
        {
            id: k++,
            component: <AspectDesEquationsDuPremierDegre />,
            title: 'Aspect des équations',
            metaContent: 'L\'aspect des equations du premier degré dans un repère.',
            relativePath: '/aspect'
        },
        {
            id: k++,
            component: <InequationsDuPremierDegre />,
            title: 'Résolution d\'inéquations',
            metaContent: 'Résolution d\'inéquations du premier degré : explications.',
            relativePath: '/resolution-d-inequations'
        },
        {
            id: k++,
            component: <TableauxDeSignesDuPremierDegre />,
            title: 'Tableaux de signes',
            metaContent: 'Tableaux de signes pour les inéquations du premier degré.',
            relativePath: '/tableaux-de-signes'
        }
    ];
}

export default getEquationsFirstDegreeChapters;
import EquationsDuPremierDegre from './chapters/EquationsDuPremierDegre';
import AspectDesEquationsDuPremierDegre from './chapters/AspectDesEquationsDuPremierDegre';
import InequationsDuPremierDegre from './chapters/InequationsDuPremierDegre';

const getEquationsFirstDegreeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EquationsDuPremierDegre />,
            title: 'Résolution d\'équations',
            relativePath: 'resolution-d-equations-du-premier-degre'
        },
        {
            id: k++,
            component: <AspectDesEquationsDuPremierDegre />,
            title: 'Aspect des équations',
            relativePath: 'aspect-des-equations-du-premier-degre'
        },
        {
            id: k++,
            component: <InequationsDuPremierDegre />,
            title: 'Résolution d\'inéquations',
            relativePath: 'resolution-d-inequations-du-premier-degre'
        }
    ];
}

export default getEquationsFirstDegreeChapters;
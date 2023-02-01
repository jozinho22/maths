import EquationsDuPremierDegre from './chapters/EquationsDuPremierDegre';
import AspectDesEquationsDuPremierDegre from './chapters/AspectDesEquationsDuPremierDegre';
import InequationsDuPremierDegre from './chapters/InequationsDuPremierDegre';

const getEquationsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EquationsDuPremierDegre />,
            title: 'Résolution d\'équations du premier degré',
            relativePath: 'resolution-d-equations-du-premier-degre'
        },
        {
            id: k++,
            component: <AspectDesEquationsDuPremierDegre />,
            title: 'Aspect des équations du premier degré',
            relativePath: 'aspect-des-equations-du-premier-degre'
        },
        {
            id: k++,
            component: <InequationsDuPremierDegre />,
            title: 'Résolution d\'inéquations du premier degré',
            relativePath: 'resolution-d-inequations-du-premier-degre'
        }
    ];
}

export default getEquationsChapters;
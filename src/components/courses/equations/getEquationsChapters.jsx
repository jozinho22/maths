import EquationsDuPremierDegre from './chapters/EquationsDuPremierDegre';
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
            component: <InequationsDuPremierDegre />,
            title: 'Résolution d\'inéquations du premier degré',
            relativePath: 'resolution-d-inequations-du-premier-degre'
        }
    ];
}

export default getEquationsChapters;
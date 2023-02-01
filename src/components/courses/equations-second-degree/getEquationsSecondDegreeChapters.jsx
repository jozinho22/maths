import Verification from './chapters/Verification';
import EquationsDuSecondDegre from './chapters/EquationsDuSecondDegre';

const getEquationsSecondDegreeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EquationsDuSecondDegre />,
            title: 'Résolution d\'équations du second degré',
            relativePath: 'resolution-d-equations-du-second-degre'
        },
        {
            id: k++,
            component: <Verification />,
            title: 'Vérification de la forme factorisée',
            relativePath: 'verification-de-la-forme-factorisee'
        }
    ];
}

export default getEquationsSecondDegreeChapters;
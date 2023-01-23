import Presentation from './chapters/Presentation';
import CalculDePi from './chapters/CalculDePi';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';

const getPiChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            relativePath: 'presentation'
        },
        {
            id: k++,
            component: <CalculDePi />,
            title: 'Calcul de π par méthode géométrique',
            relativePath: 'calcul-de-pi'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Autre formules générales',
            relativePath: 'autres-formules'
        }
    ];
}

export default getPiChapters;
import Presentation from './chapters/Presentation';
import CalculDePi from './chapters/CalculDePi';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';

const getChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            name: 'Présentation'
        },
        {
            id: k++,
            component: <CalculDePi />,
            name: 'Calcul de π par méthode géométrique'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            name: 'Autre formules générales'
        }
    ];
}

export default getChapters;
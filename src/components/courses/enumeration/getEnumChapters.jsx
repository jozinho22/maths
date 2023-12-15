import Presentation from './chapters/Presentation';
import MultiplicationDePuissances from './chapters/MultiplicationDePuissances';
import ALaPuissanceZero from './chapters/ALaPuissanceZero';
import InverseDePuissances from './chapters/InverseDePuissances';
import PuissanceDePuissances from './chapters/PuissanceDePuissances';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';
import LienEntrePuissancesEtRacines from './chapters/LienEntrePuissancesEtRacines';
import EcritureScientifique from './chapters/EcritureScientifique';
import TableauRecapDesPuissances from './chapters/TableauRecapDesPuissances';

const getEnumChapters = () => {

    var k = 0;

    return [
        {
            title: 'Généralités'
        }, 
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation de ce qu\'est une puissance et la méthode de calcul.',
            relativePath: '/presentation'
        },
        
    ];
}

export default getEnumChapters;
import Presentation from './chapters/Presentation';
import MultiplicationDePuissances from './chapters/MultiplicationDePuissances';
import ALaPuissanceZero from './chapters/ALaPuissanceZero';
import InverseDePuissances from './chapters/InverseDePuissances';
import PuissanceDePuissances from './chapters/PuissanceDePuissances';
import PuissancesComposees from './chapters/PuissancesComposees';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';
import LienEntrePuissancesEtRacines from './chapters/LienEntrePuissancesEtRacines';
import EcritureScientifique from './chapters/EcritureScientifique';

const getChapters = () => {

    var k = 1;

    return [
        {
            id: k++,
            component: <Presentation />,
            name: 'Présentation'
        },
        {
            id: k++,
            component: <MultiplicationDePuissances />,
            name: 'Multiplication de puissance'
        },
        {
            id: k++,
            component: <ALaPuissanceZero />,
            name: 'À la puissance zéro'
        },
        {
            id: k++,
            component: <InverseDePuissances />,
            name: 'Inverse de puissances'
        },
        {
            id: k++,
            component: <PuissanceDePuissances />,
            name: 'Puissance de puissances'
        },
        {
            id: k++,
            component: <PuissancesComposees />,
            name: 'Puissances composées'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            name: 'Autre formules générales'
        },
        {
            id: k++,
            component: <LienEntrePuissancesEtRacines />,
            name: 'Lien entre puissances et racines'
        },
        {
            id: k++,
            component: <EcritureScientifique />,
            name: 'L\'écriture scientifique'
        }
    ];
}

export default getChapters;
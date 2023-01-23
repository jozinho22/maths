import Presentation from './chapters/Presentation';
import MultiplicationDePuissances from './chapters/MultiplicationDePuissances';
import ALaPuissanceZero from './chapters/ALaPuissanceZero';
import InverseDePuissances from './chapters/InverseDePuissances';
import PuissanceDePuissances from './chapters/PuissanceDePuissances';
import PuissancesComposees from './chapters/PuissancesComposees';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';
import LienEntrePuissancesEtRacines from './chapters/LienEntrePuissancesEtRacines';
import EcritureScientifique from './chapters/EcritureScientifique';

const getPowersChapters = () => {

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
            component: <MultiplicationDePuissances />,
            title: 'Multiplication de puissances',
            relativePath: 'multiplication-de-puissance'
        },
        {
            id: k++,
            component: <ALaPuissanceZero />,
            title: 'À la puissance zéro',
            relativePath: 'a-la-puissance-zero'
        },
        {
            id: k++,
            component: <InverseDePuissances />,
            title: 'Inverse de puissances',
            relativePath: 'inverse-de-puissances'
        },
        {
            id: k++,
            component: <PuissanceDePuissances />,
            title: 'Puissance de puissances',
            relativePath: 'puissance-de-puissances'
        },
        {
            id: k++,
            component: <PuissancesComposees />,
            title: 'Puissances composées',
            relativePath: 'puissances-composees'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Autre formules générales',
            relativePath: 'autres-formules'
        },
        {
            id: k++,
            component: <LienEntrePuissancesEtRacines />,
            title: 'Lien entre puissances et racines',
            relativePath: 'liens-entre-puissances-et-racines'
        },
        {
            id: k++,
            component: <EcritureScientifique />,
            title: 'L\'écriture scientifique',
            relativePath: 'ecriture-scientifique'
        }
    ];
}

export default getPowersChapters;
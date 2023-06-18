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
            metaContent: 'Présentation de ce qu\'est une puissance et la méthode de calcul.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <MultiplicationDePuissances />,
            title: 'Multiplication de puissances',
            metaContent: 'La formule générale pour calculer le résultat de puissances mulitpliées.',
            relativePath: '/multiplication-de-puissances'
        },
        {
            id: k++,
            component: <ALaPuissanceZero />,
            title: 'À la puissance zéro',
            metaContent: 'La notion de nombre élevé à la puissance zéro.',
            relativePath: '/a-la-puissance-zero'
        },
        {
            id: k++,
            component: <InverseDePuissances />,
            title: 'Inverse de puissances',
            metaContent: 'La notion de d\'inverse de puissance et la notation mathématique.',
            relativePath: '/inverse-de-puissances'
        },
        {
            id: k++,
            component: <PuissanceDePuissances />,
            title: 'Puissance de puissances',
            metaContent: 'La notion de puissance élevée à une autre puissance.',
            relativePath: '/puissance-de-puissances'
        },
        {
            id: k++,
            component: <PuissancesComposees />,
            title: 'Puissances composées',
            metaContent: 'La manière dont on peut composer une puissance avec toutes les règles.',
            relativePath: '/puissances-composees'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Autres formules générales',
            metaContent: 'Le reste de formules sur les puissances (avec quotient notamment).',
            relativePath: '/autres-formules-generales'
        },
        {
            id: k++,
            component: <LienEntrePuissancesEtRacines />,
            title: 'Lien entre puissances et racines',
            metaContent: 'La façon d\'écrire plus simplement une racine carrée sous forme de puissance.',
            relativePath: '/liens-entre-puissances-et-racines'
        },
        {
            id: k++,
            component: <EcritureScientifique />,
            title: 'L\'écriture scientifique',
            metaContent: 'Introduction à l\'écriture scientifique et l\'utilité des puissances.',
            relativePath: '/ecriture-scientifique'
        }
    ];
}

export default getPowersChapters;
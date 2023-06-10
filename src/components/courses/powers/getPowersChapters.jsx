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
            hiddenTitle: 'Présentation de la notion de puissances',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <MultiplicationDePuissances />,
            title: 'Multiplication de puissances',
            metaContent: 'La formule générale pour calculer le résultat de puissances mulitpliées.',
            hiddenTitle: 'Les formules de multiplication de puissances',
            relativePath: '/multiplication-de-puissances'
        },
        {
            id: k++,
            component: <ALaPuissanceZero />,
            title: 'À la puissance zéro',
            metaContent: 'La notion de nombre élevé à la puissance zéro.',
            hiddenTitle: 'Les nombres élevés à la puissance zéro',
            relativePath: '/a-la-puissance-zero'
        },
        {
            id: k++,
            component: <InverseDePuissances />,
            title: 'Inverse de puissances',
            metaContent: 'La notion de d\'inverse de puissance et la notation mathématique.',
            hiddenTitle: 'Les inverses de puissances et leurs notations',
            relativePath: '/inverse-de-puissances'
        },
        {
            id: k++,
            component: <PuissanceDePuissances />,
            title: 'Puissance de puissances',
            metaContent: 'La notion de puissance élevée à une autre puissance.',
            hiddenTitle: 'Les puissances de puissances et leurs notations',
            relativePath: '/puissance-de-puissances'
        },
        {
            id: k++,
            component: <PuissancesComposees />,
            title: 'Puissances composées',
            metaContent: 'La manière dont on peut composer une puissance avec toutes les règles.',
            hiddenTitle: 'Les puissances incluant plusieurs règles différentes',
            relativePath: '/puissances-composees'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Autres formules générales',
            metaContent: 'Le reste de formules sur les puissances (avec quotient notamment).',
            hiddenTitle: 'Le reste de formules sur les puissances',
            relativePath: '/autres-formules-generales'
        },
        {
            id: k++,
            component: <LienEntrePuissancesEtRacines />,
            title: 'Lien entre puissances et racines',
            metaContent: 'La façon d\'écrire plus simplement une racine carrée sous forme de puissance.',
            hiddenTitle: 'L\'écriture sous forme de puissances des racines carrées',
            relativePath: '/liens-entre-puissances-et-racines'
        },
        {
            id: k++,
            component: <EcritureScientifique />,
            title: 'L\'écriture scientifique',
            metaContent: 'Introduction à l\'écriture scientifique et l\'utilité des puissances.',
            hiddenTitle: 'L\'écriture scientifique mettant en application les puissances',
            relativePath: '/ecriture-scientifique'
        }
    ];
}

export default getPowersChapters;
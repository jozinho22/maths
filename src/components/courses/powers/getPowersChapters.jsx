import Presentation from './chapters/Presentation';
import MultiplicationDePuissances from './chapters/MultiplicationDePuissances';
import ALaPuissanceZero from './chapters/ALaPuissanceZero';
import InverseDePuissances from './chapters/InverseDePuissances';
import PuissanceDePuissances from './chapters/PuissanceDePuissances';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';
import LienEntrePuissancesEtRacines from './chapters/LienEntrePuissancesEtRacines';
import EcritureScientifique from './chapters/EcritureScientifique';
import TableauRecapDesPuissances from './chapters/TableauRecapDesPuissances';

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
            title: 'Formules'
        },  
        {
            id: k++,
            component: <MultiplicationDePuissances />,
            title: 'Multiplication de puissances de x',
            metaContent: 'La formule générale pour calculer le résultat de puissances de x mulitpliées.',
            relativePath: '/multiplication-de-puissances-de-x'
        },
        {
            id: k++,
            component: <PuissanceDePuissances />,
            title: 'Puissance de puissances de x',
            metaContent: 'La notion de puissance  de x élevée à une autre puissance.',
            relativePath: '/puissance-de-puissances-de-x'
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
            title: 'Inverse de puissances de x',
            metaContent: 'La notion de d\'inverse de puissance de x et la notation mathématique.',
            relativePath: '/inverse-de-puissances-de-x'
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
            title: 'Lien entre puissances de x et racines',
            metaContent: 'La façon d\'écrire plus simplement une racine carrée sous forme de puissance de x.',
            relativePath: '/liens-entre-puissances-de-x-et-racines'
        },
        {
            title: 'Utilisation'
        },
        {
            id: k++,
            component: <EcritureScientifique />,
            title: 'L\'écriture scientifique',
            metaContent: 'Introduction à l\'écriture scientifique et l\'utilité des puissances.',
            relativePath: '/ecriture-scientifique'
        },
        {
            title: 'Récapitulatif'
        },  
        {
            id: k++,
            component: <TableauRecapDesPuissances />,
            title: 'Tableau récapitulatif des puissances de x',
            metaContent: 'Tableau récapitulatif des puissances de x.',
            relativePath: '/tableau-recap-des-puissances-de-x'
        }
    ];
}

export default getPowersChapters;
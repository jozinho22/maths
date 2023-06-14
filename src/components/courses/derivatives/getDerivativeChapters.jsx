
import Presentation from "./chapters/Presentation";
import Exemple from "./chapters/Exemple";
import DeriveeSurDesOperations from "./chapters/DeriveeSurDesOperations";

const getDerivativeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation de la dérivée',
            metaContent: 'Présentation de la dérivée et construction.',
            hiddenTitle: 'Présentation de la dérivée',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <Exemple />,
            title: 'Exemple de calcul de dérivée : la fonction carrée',
            metaContent: 'Exemple de calcul de dérivée : la fonction carrée.',
            hiddenTitle: 'Exemple de calcul de dérivée',
            relativePath: '/exemple'
        },
        {
            id: k++,
            component: <DeriveeSurDesOperations />,
            title: 'Dérivée d\'une somme, d\'un produit ou d\'un quotient de fonctions',
            metaContent: 'Dérivée d\'une somme, d\'un produit ou d\'un quotient de fonctions : formule et démonstration.',
            hiddenTitle: 'Dérivée d\'une somme, d\'un produit ou d\'un quotient de fonctions',
            relativePath: '/derivee-d-operations-de-fonctions'
        }
    ];
}

export default getDerivativeChapters;
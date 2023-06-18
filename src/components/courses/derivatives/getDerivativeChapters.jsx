
import Presentation from "./chapters/Presentation";
import Exemples from "./chapters/Exemples";
import DeriveeSurDesOperations from "./chapters/DeriveeSurDesOperations";
import SensDeVariations from "./chapters/SensDeVariations";

const getDerivativeChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation de la dérivée',
            metaContent: 'Présentation de la dérivée et construction.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <Exemples />,
            title: 'Exemples de calcul de dérivée : la fonction carrée, la fonction racine carrée',
            metaContent: 'Exemples de calcul de dérivée : la fonction carrée, la fonction racine carrée.',
            relativePath: '/exemples'
        },
        {
            id: k++,
            component: <DeriveeSurDesOperations />,
            title: 'Dérivée d\'une somme, d\'un produit ou d\'un quotient de fonctions',
            metaContent: 'Dérivées d\'opérations de fonctions : dérivée d\'une somme, d\'un produit ou d\'un quotient de fonctions : formule et démonstration.',
            relativePath: '/derivee-d-operations-de-fonctions'
        },
        {
            id: k++,
            component: <SensDeVariations />,
            title: 'Sens de variations des fonctions',
            metaContent: 'Sens de variations des fonctions : le nombre dérivée indique le sens.',
            relativePath: '/sens-de-variations'
        }
        
    ];
}

export default getDerivativeChapters;
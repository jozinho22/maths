
import Presentation from "./chapters/Presentation";
import DeriveeSurDesOperations from "./chapters/DeriveeSurDesOperations";
import SensDeVariations from "./chapters/SensDeVariations";
import DeriveeDeXPuissanceN from "./chapters/DeriveeDeXPuissanceN";
import DeriveeDeXCarre from "./chapters/DeriveeDeXCarre";
import DeriveeDeRacineDeX from "./chapters/DeriveeDeRacineDeX";
import EquationDeLaTangente from "./chapters/EquationDeLaTangente";

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
            component: <SensDeVariations />,
            title: 'Sens de variations des fonctions',
            metaContent: 'Sens de variations des fonctions : le nombre dérivée indique le sens.',
            relativePath: '/sens-de-variations'
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
            component: <DeriveeDeXCarre />,
            title: 'Dérivée de la fonction x au carré',
            metaContent: 'Dérivée de la fonction x au carré.',
            relativePath: '/derivee-de-x-au-carre'
        },
        {
            id: k++,
            component: <EquationDeLaTangente />,
            title: 'Équations de la tangente',
            metaContent: 'Équations de la tangente du nombre dérivée d\'une fonction en point.',
            relativePath: '/equation-de-la-tangente'
        },
        {
            id: k++,
            component: <DeriveeDeRacineDeX />,
            title: 'Dérivée de la fonction racine de x',
            metaContent: 'Dérivée de la fonction racine de x : démonstration.',
            relativePath: '/derivee-de-racine-de-x'
        },
        {
            id: k++,
            component: <DeriveeDeXPuissanceN />,
            title: 'Dérivée de x à la puissance n',
            metaContent: 'Dérivée de x à la puissance n : démonstration.',
            relativePath: '/derivee-de-x-puissance-n'
        }
        
    ];
}

export default getDerivativeChapters;
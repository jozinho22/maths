import Presentation from "./chapters/Presentation";
import SensDeVariations from "./chapters/SensDeVariations";
import DeriveeDUneSomme from "./chapters/DeriveeDUneSomme";
import DeriveeDUnProduit from "./chapters/DeriveeDUnProduit";
import DeriveeDunQuotient from "./chapters/DeriveeDunQuotient";
import DeriveeDeConstanteEtFonctionAffine from "./chapters/DeriveeDeConstanteEtFonctionAffine";
import DeriveeDeXPuissanceN from "./chapters/DeriveeDeXPuissanceN";
import DeriveeDeXCarre from "./chapters/DeriveeDeXCarre";
import EquationDeLaTangente from "./chapters/EquationDeLaTangente";
import DeriveeDeRacineDeX from "./chapters/DeriveeDeRacineDeX";
import DeriveesDeSinEtCos from "./chapters/DeriveesDeSinEtCos";
import DeriveeDeFonctionComposee from "./chapters/DeriveeDeFonctionComposee";
import TableauRecapFonctionsDerivees from "./chapters/TableauRecapFonctionsDerivees";
import TableauRecapOperationsCompositionsDerivees from "./chapters/TableauRecapOperationsCompositionsDerivees";

const getDerivativesChapters = () => {

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
            component: <DeriveeDUneSomme />,
            title: 'Dérivée d\'une somme de fonctions',
            metaContent: 'Dérivée d\'une somme de fonctions : formule et démonstration.',
            relativePath: '/derivee-d-une-somme-de-fonctions'
        },
        {
            id: k++,
            component: <DeriveeDUnProduit />,
            title: 'Dérivée d\'un produit de fonctions',
            metaContent: 'Dérivée d\'un produit de fonctions : formule et démonstration.',
            relativePath: '/derivee-d-un-produit-de-fonctions'
        },
        {
            id: k++,
            component: <DeriveeDunQuotient />,
            title: 'Dérivée d\'un quotient de fonctions',
            metaContent: 'Dérivée d\'un quotient de fonctions : formule et démonstration.',
            relativePath: '/derivee-d-un-quotient-de-fonctions'
        },
        {
            id: k++,
            component: <DeriveeDeConstanteEtFonctionAffine />,
            title: 'Dérivée \'une fonction constante et d\'une fonction affine',
            metaContent: 'Dérivée d\'une fonction constante et d\'une fonction affine : démonstration.',
            relativePath: '/derivee-de-constante-et-fonction-affine'
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
            title: 'Équation de la tangente',
            metaContent: 'Équation de la tangente du nombre dérivée d\'une fonction en point.',
            relativePath: '/equation-de-la-tangente'
        },
        {
            id: k++,
            component: <DeriveeDeXPuissanceN />,
            title: 'Dérivée de x à la puissance n',
            metaContent: 'Dérivée de x à la puissance n : démonstration.',
            relativePath: '/derivee-de-x-puissance-n'
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
            component: <DeriveesDeSinEtCos />,
            title: 'Dérivées de sinus et cosinus',
            metaContent: 'Les dérivées des sinus et de cosinus : démonstration.',
            relativePath: '/derivees-de-sin-et-cos'
        },
        {
            id: k++,
            component: <DeriveeDeFonctionComposee />,
            title: 'Dérivée de fonction composée',
            metaContent: 'Dérivée de fonction composée : démonstration.',
            relativePath: '/derivee-de-fonction-composee'
        },
        {
            id: k++,
            component: <TableauRecapFonctionsDerivees />,
            title: 'Tableau récapitulatif des fonctions dérivées',
            metaContent: 'Tableau récapitulatif des fonctions dérivées.',
            relativePath: '/tableau-recap-des-fonctions-derivees'
        },
        {
            id: k++,
            component: <TableauRecapOperationsCompositionsDerivees />,
            title: 'Tableau récapitulatif des opérations/compositions sur les dérivées',
            metaContent: 'Tableau récapitulatif des opérations/compositions sur les dérivées.',
            relativePath: '/tableau-recap-operations-compositions-sur-les-derivees'
        }
    ];
}

export default getDerivativesChapters;
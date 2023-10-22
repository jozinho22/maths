import Presentation from "./chapters/Presentation";
import ConditionsEtConsequences from "./chapters/ConditionsEtConsequences";
import VariationsDuneFonction from "./chapters/VariationsDuneFonction";
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
import DeriveeDeLaReciproque from "./chapters/DeriveeDeLaReciproque";
import TableauRecapFonctionsDerivees from "./chapters/TableauRecapFonctionsDerivees";
import TableauRecapOperationsCompositionsDerivees from "./chapters/TableauRecapOperationsCompositionsDerivees";
import TheoremeDeLHopital from "./chapters/TheoremeDeLHopital";
import DeriveeDeNPuissanceX from "./chapters/DeriveeDeNPuissanceX";
import DeriveeDeLN from "./chapters/DeriveeDeLN";
import ConvexiteDUneFonction from "./chapters/ConvexiteDUneFonction";
import PointDInflexion from "./chapters/PointDInflexion";
import MethodeDeNewton from "./chapters/MethodeDeNewton";
import MethodeDeNewtonExemple from "./chapters/MethodeDeNewtonExemple";

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
            component: <ConditionsEtConsequences />,
            title: 'Conditions et conséquences de la dérivabilité',
            metaContent: 'Conditions et conséquences de la dérivabilité : l\'existence d\'une dérivée et sa continuité.',
            relativePath: '/conditions-et-consequences'
        },
        {
            id: k++,
            component: <VariationsDuneFonction />,
            title: 'Variations d\'une fonction',
            metaContent: 'Variations d\'une fonction : le signe de la dérivée indique le sens.',
            relativePath: '/variations-d-une-fonction'
        },
        {
            id: k++,
            component: <ConvexiteDUneFonction />,
            title: 'Convexité d\'une fonction',
            metaContent: 'Convexité d\'une fonction : le signe de la dérivée seconde indique la convexité.',
            relativePath: '/convexite-d-une-fonction'
        },
        {
            id: k++,
            component: <PointDInflexion />,
            title: 'Point d\'inflexion d\'une courbe',
            metaContent: 'Point d\'inflexion d\'une courbe : le cas de la fonction cube.',
            relativePath: '/point-d-inflexion'
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
            component: <DeriveeDeXPuissanceN />,
            title: 'Dérivée de x à la puissance n',
            metaContent: 'Dérivée de x à la puissance n : démonstration.',
            relativePath: '/derivee-de-x-puissance-n'
        },
        {
            id: k++,
            component: <DeriveeDeNPuissanceX />,
            title: 'Dérivée de n à la puissance x',
            metaContent: 'Dérivée de n à la puissance x : démonstration.',
            relativePath: '/derivee-de-n-puissance-x'
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
            component: <DeriveeDeLN />,
            title: 'Dérivée de la fonction logarithme népérien',
            metaContent: 'Dérivée de la fonction logarithme népérien : démonstration.',
            relativePath: '/derivee-de-ln-de-x'
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
            component: <EquationDeLaTangente />,
            title: 'Équation de la tangente',
            metaContent: 'Équation de la tangente du nombre dérivée d\'une fonction en point.',
            relativePath: '/equation-de-la-tangente'
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
            component: <DeriveeDeLaReciproque />,
            title: 'Dérivée de fonction réciproque',
            metaContent: 'Dérivée de fonction réciproque : démonstration.',
            relativePath: '/derivee-de-fonction-reciproque'
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
        },
        {
            id: k++,
            component: <TheoremeDeLHopital />,
            title: 'Théorème de l\'Hôpital',
            metaContent: 'Théorème de l\'Hôpital (ou règle de Bernouilli) : présentation.',
            relativePath: '/theoreme-de-l-hopital'
        },
        {
            id: k++,
            component: <MethodeDeNewton />,
            title: 'Méthode de Newton',
            metaContent: 'Méthode de Newton par projection des tangentes sur l\'axe des abscisses.',
            relativePath: '/methode-de-newton'
        },
        {
            id: k++,
            component: <MethodeDeNewtonExemple />,
            title: 'Méthode de Newton : approximer la valeur la racine de 2',
            metaContent: 'Méthode de Newton : approximer la valeur la racine de 2.',
            relativePath: '/methode-de-newton-exemple'
        },
    ];
}

export default getDerivativesChapters;
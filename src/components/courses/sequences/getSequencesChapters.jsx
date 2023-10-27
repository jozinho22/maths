import DifferentesFaconDeDefinirUneSuite from "./chapters/DifferentesFaconDeDefinirUneSuite";
import LimitesDeSuites from "./chapters/LimitesDeSuites";
import LimitesDeSuitesExtraites from "./chapters/LimitesDeSuitesExtraites";
import Presentation from "./chapters/Presentation";
import RaisonnementParRecurrence from "./chapters/RaisonnementParRecurrence";
import SommeDesNPlus1PremieresPuissanceDeN from "./chapters/SommeDesNPlus1PremieresPuissanceDeN";
import SommeDesNPlus1PremiersEntiers from "./chapters/SommeDesNPlus1PremiersEntiers";
import SommeDesNPlus1TermesSuiteArithmetique from "./chapters/SommeDesNPlus1TermesSuiteArithmetique";
import SommeDesNPlus1TermesSuiteGeometrique from "./chapters/SommeDesNPlus1TermesSuiteGeometrique";
import SuitesArithmetiques from "./chapters/SuitesArithmetiques";
import SuitesBornees from "./chapters/SuitesBornees";
import SuitesGeometriques from "./chapters/SuitesGeometriques";
import SuitesMonotones from "./chapters/SuitesMonotones";
import TheoremeDeLaConvergenceUniforme from "./chapters/TheoremeDeLaConvergenceUniforme";
import TableauRecapOperationsLimitesDeSuites from "./chapters/TableauRecapOperationsLimitesDeSuites";

const getSequencesChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation des suites numériques',
            metaContent: 'Présentation des suites numériques.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <DifferentesFaconDeDefinirUneSuite />,
            title: 'Différentes façons de définir une suite',
            metaContent: 'Différentes façons de définir une suite : suite explicites et suite récurrentes.',
            relativePath: '/differentes-facons-de-definir-une-suite'
        },
        {
            id: k++,
            component: <SuitesMonotones />,
            title: 'Suites monotones',
            metaContent: 'Suites monotones : étude de variations.',
            relativePath: '/suites-monotones'
        },
        {
            id: k++,
            component: <SuitesBornees />,
            title: 'Suites bornées',
            metaContent: 'Suites bornées : majorants et minorants.',
            relativePath: '/suites-bornees'
        },
        {
            id: k++,
            component: <RaisonnementParRecurrence />,
            title: 'Raisonnement par récurrence',
            metaContent: 'Raisonnement par récurrence : exemple avec la dérivée.',
            relativePath: '/raisonnement-par-recurrence'
        },
        {
            id: k++,
            component: <SuitesArithmetiques />,
            title: 'Suites arithmétiques',
            metaContent: 'Suites arithmétiques : présentation.',
            relativePath: '/suites-arithmetiques'
        },
        {
            id: k++,
            component: <SommeDesNPlus1PremiersEntiers />,
            title: 'Somme des (n+1) premiers entiers',
            metaContent: 'Somme des (n+1) premiers entiers : démonstration.',
            relativePath: '/somme-des-n-plus-1-premiers-entiers'
        },
        {
            id: k++,
            component: <SommeDesNPlus1TermesSuiteArithmetique />,
            title: 'Somme des (n+1) premiers termes d\'une suite arithmétique',
            metaContent: 'Somme des (n+1) premiers termes d\'une suite arithmétique : démonstration.',
            relativePath: '/somme-des-n-plus-1-premiers-termes-d-une-suite-arithmetique'
        },
        {
            id: k++,
            component: <SuitesGeometriques />,
            title: 'Suites géométriques',
            metaContent: 'Suites géométriques : présentation.',
            relativePath: '/suites-geometriques'
        },
        {
            id: k++,
            component: <SommeDesNPlus1PremieresPuissanceDeN />,
            title: 'Somme des (n+1) premières puissances de n',
            metaContent: 'Somme des (n+1) premières puissances de n : démonstration.',
            relativePath: '/somme-des-n-plus-1-premieres-puissances-de-n'
        },
        {
            id: k++,
            component: <SommeDesNPlus1TermesSuiteGeometrique />,
            title: 'Somme des (n+1) premiers termes d\'une suite géométrique',
            metaContent: 'Somme des (n+1) premiers termes d\'une suite géométrique.',
            relativePath: '/somme-des-n-plus-1-premiers-termes-d-une-suite-geometrique'
        },
        {
            id: k++,
            component: <LimitesDeSuites />,
            title: 'Limites de suites',
            metaContent: 'Limites de suites : convergence, théorème lié à l\'ordre, étude de fonction.',
            relativePath: '/limites-de-suites'
        },
        {
            id: k++,
            component: <TheoremeDeLaConvergenceUniforme />,
            title: 'Théorème de la convergence uniforme',
            metaContent: 'Théorème de la convergence uniforme : exemple de calcul de la convergence d\'une suite.',
            relativePath: '/theoreme-de-la-convergence-uniforme'
        },
        {
            id: k++,
            component: <LimitesDeSuitesExtraites />,
            title: 'Limites de suites extraites',
            metaContent: 'Limites de suites extraites : suites extraites, convergence par complémentarité.',
            relativePath: '/limites-de-suites-extraites'
        },
        {
            id: k++,
            component: <TableauRecapOperationsLimitesDeSuites />,
            title: 'Opérations sur les limites de suites',
            metaContent: 'Opérations sur les limites : addition, mulitplication, quotient..etc.',
            relativePath: '/opérations-sur-les-limites'
        }
    ];
}

export default getSequencesChapters;
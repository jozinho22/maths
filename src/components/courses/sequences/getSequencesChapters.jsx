import DifferentesFaconDeDefinirUneSuite from "./chapters/DifferentesFaconDeDefinirUneSuite";
import Presentation from "./chapters/Presentation";
import SommeDesNPlus1PremieresPuissanceDeN from "./chapters/SommeDesNPlus1PremieresPuissanceDeN";
import SommeDesNPlus1PremiersEntiers from "./chapters/SommeDesNPlus1PremiersEntiers";
import SommeDesNPlus1TermesSuiteArithmetique from "./chapters/SommeDesNPlus1TermesSuiteArithmetique";
import SommeDesNPlus1TermesSuiteGeometrique from "./chapters/SommeDesNPlus1TermesSuiteGeometrique";
import SuitesArithmetiques from "./chapters/SuitesArithmetiques";
import SuitesBornees from "./chapters/SuitesBornees";
import SuitesGeometriques from "./chapters/SuitesGeometriques";
import SuitesMonotones from "./chapters/SuitesMonotones";

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
        }
    ];
}

export default getSequencesChapters;
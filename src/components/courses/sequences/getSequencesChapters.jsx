import DifferentesFaconDeDefinirUneSuite from "./chapters/DifferentesFaconDeDefinirUneSuite";
import Presentation from "./chapters/Presentation";
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
        }
    ];
}

export default getSequencesChapters;
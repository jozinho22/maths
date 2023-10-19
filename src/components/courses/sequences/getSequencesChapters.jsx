import Presentation from "./chapters/Presentation";

const getSequencesChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation des suites numériques',
            metaContent: 'Présentation des suites numériques : différents types et exemple',
            relativePath: '/presentation'
        }
    ];
}

export default getSequencesChapters;
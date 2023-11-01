import Presentation from "./chapters/Presentation";

const getComplexNumbersChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation des nombres complexes',
            metaContent: 'Présentation des nombres complexes.',
            relativePath: '/presentation'
        }

    ];
}

export default getComplexNumbersChapters;
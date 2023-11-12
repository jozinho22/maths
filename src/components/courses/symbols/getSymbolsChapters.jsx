import AlphabetGrec from "./chapters/AlphabetGrec";
import LesSymbolesUsuels from "./chapters/LesSymbolesUsuels";
import LesSymbolesUsuels2 from "./chapters/LesSymbolesUsuels2";

const getSymbolsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <LesSymbolesUsuels />,
            title: 'Les symboles mathématiques usuels',
            metaContent: 'Les symboles mathématiques usuels : la plupart des symboles utilisés.',
            relativePath: '/les-symboles-usuels'
        },
        {
            id: k++,
            component: <LesSymbolesUsuels2 />,
            title: 'Les symboles mathématiques usuels (2)',
            metaContent: 'Les symboles mathématiques usuels : la plupart des symboles utilisés (2).',
            relativePath: '/les-symboles-usuels-2'
        },
        {
            id: k++,
            component: <AlphabetGrec />,
            title: 'Alphabet grec',
            metaContent: 'Alphabet grec : les symboles modernes.',
            relativePath: '/alphabet-grec'
        }            
    ];
}

export default getSymbolsChapters;
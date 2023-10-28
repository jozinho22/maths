import AlphabetGrec from "./chapters/AlphabetGrec";
import IndexDesSymboles from "./chapters/IndexDesSymboles";
import IndexDesSymboles2 from "./chapters/IndexDesSymboles2";

const getSymbolsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <IndexDesSymboles />,
            title: 'Index des symboles mathématiques',
            metaContent: 'Index des symboles mathématiques : la plupart des symboles utilisés.',
            relativePath: '/index'
        },
        {
            id: k++,
            component: <IndexDesSymboles2 />,
            title: 'Index des symboles mathématiques (2)',
            metaContent: 'Index des symboles mathématiques : la plupart des symboles utilisés (2).',
            relativePath: '/index-2'
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
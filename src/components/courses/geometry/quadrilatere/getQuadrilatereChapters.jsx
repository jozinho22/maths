import LeCarre from "./chapters/LeCarre";
import LeCube from "./chapters/LeCube";

const getQuadrilatereChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <LeCarre />,
            title: 'Le carré',
            metaContent: 'La présentation du carré et de ses propriétés.',
            relativePath: '/le-carre'
        },  
        {
            id: k++,
            component: <LeCube />,
            title: 'Le cube',
            metaContent: 'La présentation du cube : volume et surface.',
            relativePath: '/le-cube'
        }
    ];
}

export default getQuadrilatereChapters;
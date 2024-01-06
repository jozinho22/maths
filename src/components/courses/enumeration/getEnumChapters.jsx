import Presentation from './chapters/Presentation';

const getEnumChapters = () => {

    var k = 0;

    return [
        {
            title: 'Généralités'
        }, 
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation de ce qu\'est une puissance et la méthode de calcul.',
            relativePath: '/presentation'
        },
        
    ];
}

export default getEnumChapters;
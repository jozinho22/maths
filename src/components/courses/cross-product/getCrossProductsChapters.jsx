import Presentation from './chapters/Presentation';
import Demonstration from './chapters/Demonstration';
import Exercices from './chapters/Exercices';

const getCrossProductsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation du produit en croix : explications de la méthode',
            relativePath: '/presentation'
        },  
        {
            id: k++,
            component: <Demonstration />,
            title: 'Démonstration',
            metaContent: 'Démonstration de la méthode de calcul du produit en croix',
            relativePath: '/demonstration'
        },
        {
            id: k++,
            component: <Exercices />,
            title: 'Exercices',
            metaContent: 'Exercices pour s\'entraîner à patiquer le produit en croix',
            relativePath: '/exercices'
        }
    ];
}

export default getCrossProductsChapters;
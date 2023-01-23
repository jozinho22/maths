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
            relativePath: 'presentation'
        },  
        {
            id: k++,
            component: <Demonstration />,
            title: 'Démonstration',
            relativePath: 'demonstration'
        },
        {
            id: k++,
            component: <Exercices />,
            title: 'Exercices',
            relativePath: 'exercices'
        }
    ];
}

export default getCrossProductsChapters;
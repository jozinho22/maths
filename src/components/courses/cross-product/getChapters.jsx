import Presentation from './chapters/Presentation';
import Demonstration from './chapters/Demonstration';
import Exercices from './chapters/Exercices';

const getChapters = () => {

    var k = 1;

    return [      
        {
            id: k++,
            component: <Presentation />,
            name: 'Présentation'
        },  
        {
            id: k++,
            component: <Demonstration />,
            name: 'Démonstration'
        },
        {
            id: k++,
            component: <Exercices />,
            name: 'Exercices'
        }
    ];
}

export default getChapters;
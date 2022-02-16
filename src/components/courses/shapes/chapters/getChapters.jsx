import Presentation from './Presentation';
import LeCube from './LeCube';
import LaSphere from './LaSphere';

const getChapters = () => {
    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            name: 'Présentation'
        },
        {
            id: k++,
            component: <LeCube />,
            name: 'Le cube'
        },
        {
            id: k++,
            component: <LaSphere />,
            name: 'La sphère'
        }
    ];
}

export default getChapters;
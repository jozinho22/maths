import Presentation from './Presentation';
import LesBoucles from './LesBoucles';

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
            component: <LesBoucles />,
            name: 'Les boucles'
        }
    ];
}

export default getChapters;
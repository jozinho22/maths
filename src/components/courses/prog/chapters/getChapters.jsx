import LesBoucles from './LesBoucles';

const getChapters = () => {
    
    var k = 1;

    return [
        {
            id: k++,
            component: <LesBoucles />,
            name: 'Les boucles'
        }
    ];
}

export default getChapters;
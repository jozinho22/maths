import LesBoucles from './LesBoucles';

const getChapters = () => {
    
    var k = 0;

    return [
        {
            id: k++,
            component: <LesBoucles />,
            name: 'Les boucles'
        }
    ];
}

export default getChapters;
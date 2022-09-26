

const getChapters = () => {

    var k = 1;

    return [      
        {
            id: k++,
            component: '',
            name: 'Présentation'
        },  
        {
            id: k++,
            component: '',
            name: 'Démonstration'
        },
        {
            id: k++,
            component: '',
            name: 'Exercices'
        }
    ];
}

export default getChapters;
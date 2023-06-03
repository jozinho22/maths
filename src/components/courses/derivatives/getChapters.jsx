

const getChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: '',
            title: 'Présentation'
        },  
        {
            id: k++,
            component: '',
            title: 'Démonstration'
        },
        {
            id: k++,
            component: '',
            title: 'Exercices'
        }
    ];
}

export default getChapters;
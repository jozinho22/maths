import Equations from './chapters/Equations';

const getEquationsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Equations />,
            title: 'Résolution d\'équations',
            relativePath: 'resolution-d-equations'
        }
    ];
}

export default getEquationsChapters;
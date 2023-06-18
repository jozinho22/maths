import LesOperationsDeBase from './chapters/LesOperationsDeBase';

const getElementaryCalculusChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <LesOperationsDeBase />,
            title: 'Les opérations de base',
            metaContent: 'Les opérations de base : addition, soustraction, multiplication, division.',
            relativePath: '/resolution'
        }
    ];
}

export default getElementaryCalculusChapters;
import LeProduitEnCroix from './chapters/LeProduitEnCroix';
/* import LesOperationsDeBase from './chapters/LesOperationsDeBase';
 */
const getElementaryCalculusChapters = () => {

    var k = 0;

    return [      
        /* {
            id: k++,
            component: <LesOperationsDeBase />,
            title: 'Les opérations de base',
            metaContent: 'Les opérations de base : addition, soustraction, multiplication, division.',
            relativePath: '/resolution'
        }, */
        {
            id: k++,
            component: <LeProduitEnCroix />,
            title: 'Le produit en croix',
            metaContent: 'Le produit en croix : présentation, démonstration et exercices.',
            relativePath: '/le-produit-en-croix'
        }
    ];
}

export default getElementaryCalculusChapters;
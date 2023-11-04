import Resolution from './chapters/Resolution';
import Aspect from './chapters/Aspect';
import Inequations from './chapters/Inequations';
import TableauxDeSignes from './chapters/TableauxDeSignes';

const getEquationsFirstDegreeChapters = () => {

    var k = 0;

    return [    
        {
            title: 'Équations'
        },    
        {
            id: k++,
            component: <Resolution />,
            title: 'Résolution d\'équations',
            metaContent: 'Résolution d\'équations du premier degré : explications.',
            relativePath: '/resolution'
        },
        {
            id: k++,
            component: <Aspect />,
            title: 'Aspect des fonctions affines',
            metaContent: 'L\'aspect des fonctions affines dans un repère.',
            relativePath: '/aspect'
        },
        {
            title: 'Inéquations'
        }, 
        {
            id: k++,
            component: <Inequations />,
            title: 'Résolution d\'inéquations',
            metaContent: 'Résolution d\'inéquations du premier degré : explications.',
            relativePath: '/resolution-d-inequations'
        },
        {
            title: 'Tableaux de signes'
        }, 
        {
            id: k++,
            component: <TableauxDeSignes />,
            title: 'Tableaux de signes',
            metaContent: 'Tableaux de signes pour les inéquations du premier degré.',
            relativePath: '/tableaux-de-signes'
        }
    ];
}

export default getEquationsFirstDegreeChapters;
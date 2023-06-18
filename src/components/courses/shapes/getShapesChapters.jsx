import LeCarreLeCube from './chapters/LeCarreLeCube';
import LeCercle from './chapters/LeCercle';
import LaSphere from './chapters/LaSphere';
import LeTriangle from './chapters/LeTriangle';
import LeCone from './chapters/LeCone';

const getShapesChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <LeCarreLeCube />,
            title: 'Le carré - Le cube',
            metaContent: 'La présentation du carré (calcul de l\'aire et caractéristiques) ainsi que du cube (calcul du volume).',
            relativePath: '/le-carre-le-cube'
        },  
        {
            id: k++,
            component: <LeCercle />,
            title: 'Le cercle',
            metaContent: 'La présentation du cercle (calcul du périmètre et de l\'aire par intégration) ainsi son lien avec Pi.',
            relativePath: '/le-cercle'
        },  
        {
            id: k++,
            component: <LaSphere />,
            title: 'La sphère',
            metaContent: 'La présentation de la sphère (calcul de l\'aire et du volume, les deux par intégration).',
            relativePath: '/la-sphere'
        },
        {
            id: k++,
            component: <LeTriangle />,
            title: 'Le triangle',
            metaContent: 'La présentation du triangle, ses caractéristiques et lois.',
            relativePath: '/le-triangle'
        },
/*         {
            id: k++,
            component: <LeCylindre />,
            title: 'Le cylindre'
        }, */
        {
            id: k++,
            component: <LeCone />,
            title: 'Le cône',
            relativePath: '/le-cone'
        }
        /*
        ,{
            id: k++,
            component: <LaPyramide />,
            title: 'La pyramide'
        } */
    ];
}

export default getShapesChapters;
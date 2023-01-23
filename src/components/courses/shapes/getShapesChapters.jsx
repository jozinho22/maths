import LeCarreLeCube from './chapters/LeCarreLeCube';
import LeCercle from './chapters/LeCercle';
import LaSphere from './chapters/LaSphere';
import LeCylindre from './chapters/LeCylindre';
import LeTriangle from './chapters/LeTriangle';
import LeCone from './chapters/LeCone';
import LaPyramide from './chapters/LaPyramide';

const getShapesChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <LeCarreLeCube />,
            title: 'Le carré - Le cube',
            relativePath: 'le-carre-le-cube'
        },  
        {
            id: k++,
            component: <LeCercle />,
            title: 'Le cercle',
            relativePath: 'le-cercle'
        },  
        {
            id: k++,
            component: <LaSphere />,
            title: 'La sphère',
            relativePath: 'la-sphere'
        },
        {
            id: k++,
            component: <LeTriangle />,
            title: 'Le triangle',
            relativePath: 'le-triangle'
        }/*,
        {
            id: k++,
            component: <LeCylindre />,
            title: 'Le cylindre'
        },
        {
            id: k++,
            component: <LeCone />,
            title: 'Le cône'
        },
        {
            id: k++,
            component: <LaPyramide />,
            title: 'La pyramide'
        } */
    ];
}

export default getShapesChapters;
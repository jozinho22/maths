import LeCarreLeCube from './chapters/LeCarreLeCube';
import LeCercle from './chapters/LeCercle';
import LaSphere from './chapters/LaSphere';
import LeCylindre from './chapters/LeCylindre';
import LeTriangle from './chapters/LeTriangle';
import LeCone from './chapters/LeCone';
import LaPyramide from './chapters/LaPyramide';

const getShapesChapters = () => {

    var k = 1;

    return [
        {
            id: k++,
            component: <LeCarreLeCube />,
            name: 'Le carré - Le cube'
        },  
        {
            id: k++,
            component: <LeCercle />,
            name: 'Le cercle'
        },  
        {
            id: k++,
            component: <LaSphere />,
            name: 'La sphère'
        },
        {
            id: k++,
            component: <LeTriangle />,
            name: 'Le triangle'
        }/*,
        {
            id: k++,
            component: <LeCylindre />,
            name: 'Le cylindre'
        },
        {
            id: k++,
            component: <LeCone />,
            name: 'Le cône'
        },
        {
            id: k++,
            component: <LaPyramide />,
            name: 'La pyramide'
        } */
    ];
}

export default getShapesChapters;
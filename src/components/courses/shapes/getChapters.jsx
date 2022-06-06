import { Container } from 'react-bootstrap';
import GenericShape from './GenericShape';
import ShapeType from './ShapeType';
import LeCarreLeCube from './chapters/LeCarreLeCube';
import LeCercle from './chapters/LeCercle';
import LaSphere from './chapters/LaSphere';
import LeCylindre from './chapters/LeCylindre';
import LeTriangle from './chapters/LeTriangle';
import LeCone from './chapters/LeCone';
import LaPyramide from './chapters/LaPyramide';

const getChapters = () => {

    var k = 1;

    return [
        {
            id: k++,
            component: <LeCarreLeCube />,
            name: 'Le carré - Le cube'
            /* ,
            picture: <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.CUBE}
                            dimensions={[2]}
                            prez={true} 
                            staticDim={true} />  
                    </Container> */
        },  
        {
            id: k++,
            component: <LeCercle />,
            name: 'Le cercle'
            /* ,
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.CIRCLE}
                            dimensions={[2]} 
                            prez={true} 
                            staticDim={true} /> 
                    </Container> */
        },  
        {
            id: k++,
            component: <LaSphere />,
            name: 'La sphère'
            /* ,
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.SPHERE}
                            dimensions={[2]} 
                            prez={true} 
                            staticDim={true} />   
                    </Container> */
        },
        {
            id: k++,
            component: <LeTriangle />,
            name: 'Le triangle'
            /* ,
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.TRIANGLE}
                            dimensions={[2, 3]} 
                            prez={true} 
                            staticDim={true} />  
                    </Container> */
        }
        /* ,          
        {
            id: k++,
            component: <LeCylindre />,
            name: 'Le cylindre',
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.CYLINDER}
                            dimensions={[1, 4]} 
                            prez={true} 
                            staticDim={true} /> 
                    </Container>
        },

        {
            id: k++,
            component: <LeCone />,
            name: 'Le cône',
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.CONE}
                            dimensions={[2, 3]} 
                            prez={true} 
                            staticDim={true} />  
                    </Container>
        },
        {
            id: k++,
            component: <LaPyramide />,
            name: 'La pyramide',
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.PYRAMIDE}
                            dimensions={[2, 3, 3]} 
                            prez={true} 
                            staticDim={true} />   
                    </Container>
        } */
    ];
}

export default getChapters;
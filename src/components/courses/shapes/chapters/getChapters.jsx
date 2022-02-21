import { Container } from 'react-bootstrap';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import LeCarre from './LeCarre';
import LeCube from './LeCube';
import LeCercle from './LeCercle';
import LaSphere from './LaSphere';
import LeCylindre from './LeCylindre';
import LeTriangle from './LeTriangle';
import LeCone from './LeCone';
import LaPyramide from './LaPyramide';

const getChapters = () => {

    var k = 0;

    return [
/*         {
            id: k++,
            component: <LeCarre />,
            name: 'Le carré',
            picture: <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.SQUARE}
                            dimensions={[2]}
                            prez={true}
                            staticDim={true} /> 
                    </Container>
        }, */
        {
            id: k++,
            component: <LeCube />,
            name: 'Le cube',
            picture: <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.CUBE}
                            dimensions={[2]}
                            prez={true} 
                            staticDim={true} />  
                    </Container>
        },
        {
            id: k++,
            component: <LeCercle />,
            name: 'Le cercle',
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.CIRCLE}
                            dimensions={[2]} 
                            prez={true} 
                            staticDim={true} /> 
                    </Container>
        }, 
        {
            id: k++,
            component: <LaSphere />,
            name: 'La sphère',
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.SPHERE}
                            dimensions={[2]} 
                            prez={true} 
                            staticDim={true} />   
                    </Container>
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
            component: <LeTriangle />,
            name: 'Le triangle',
            picture:  <Container className="ShapesContainer">
                        <GenericShape 
                            type={ShapeType.TRIANGLE}
                            dimensions={[2, 3]} 
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
import { Container } from 'react-bootstrap';
import GenericShape from './GenericShape';
import ShapeType from './ShapeType';

const LeCube = () => {
    return (
        <>
            <p className="Title1">Le cube</p>
            <p>
                ...
            </p>  
            <Container className="ShapesContainer">
                <GenericShape 
                    className="ShapesContainer"
                    type={ShapeType.CUBE}
                    dimension={1} /> 
            </Container>
        </>
    )
}

export default LeCube;
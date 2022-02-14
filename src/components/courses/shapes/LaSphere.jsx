import { Container } from 'react-bootstrap';
import GenericShape from './GenericShape';
import ShapeType from './ShapeType';

const LaSphere = () => {
    return (
        <>
            <p className="Title1">La sphère</p>
            <p>
                ...
            </p>  
            <Container className="ShapesContainer">
                <GenericShape 
                    className="ShapesContainer"
                    type={ShapeType.SPHERE}
                    dimension={1} /> 
            </Container>
        </>
    )
}

export default LaSphere;
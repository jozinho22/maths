import { Container, Row, Col } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';

const Presentation = () => {

    return (
        <>
            <Row>
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>Le carré</p>
                        <GenericShape 
                            type={ShapeType.SQUARE}
                            dimensions={[2]}
                            prez={true}
                            staticDim={true} /> 
                    </Container>
                </Col>
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>Le cube</p>
                        <GenericShape 
                            type={ShapeType.CUBE}
                            dimensions={[2]}
                            prez={true} 
                            staticDim={true} />  
                    </Container>
                </Col>
          
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>Le cercle</p>
                        <GenericShape 
                            type={ShapeType.CIRCLE}
                            dimensions={[2]} 
                            prez={true} 
                            staticDim={true} /> 
                    </Container>
                </Col>
                  <Col xs={12} md={6}>         
                    <Container className="ShapesContainer">
                        <p>La sphère</p>
                        <GenericShape 
                            type={ShapeType.SPHERE}
                            dimensions={[2]} 
                            prez={true} 
                            staticDim={true} />   
                    </Container>
                </Col>
         
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>Le cylindre</p>
                        <GenericShape 
                            type={ShapeType.CYLINDER}
                            dimensions={[1, 4]} 
                            prez={true} 
                            staticDim={true} /> 
                    </Container>
                </Col>
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>Le triangle</p>
                        <GenericShape 
                            type={ShapeType.TRIANGLE}
                            dimensions={[2, 3]} 
                            prez={true} 
                            staticDim={true} />  
                    </Container>
                </Col> 
                       
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>Le cône</p>
                        <GenericShape 
                            type={ShapeType.CONE}
                            dimensions={[2, 3]} 
                            prez={true} 
                            staticDim={true} />  
                    </Container>          
                </Col>              
                <Col xs={12} md={6}>
                    <Container className="ShapesContainer">
                        <p>La pyramide</p>
                        <GenericShape 
                            type={ShapeType.PYRAMIDE}
                            dimensions={[2, 3, 3]} 
                            prez={true} 
                            staticDim={true} />   
                    </Container>
                </Col>
            </Row>
        </>
    )

}

export default Presentation;
import React from 'react';
import { Container, Button } from 'react-bootstrap'

const ImageZoom = ( {src, name} ) => {

    const [zoom, setZoom] = React.useState(false);

    return (
            <Container className="ZoomContainer">     
                <div 
                    className={`${zoom ? "OnZoom" : ''}`}
                    onClick={() => setZoom(!zoom)} >
                        <img 
                            alt={name}
                            src= {src} 
                        />
                </div>   
            </Container>
        );
}

export default ImageZoom;
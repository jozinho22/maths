import React from 'react';
import { Container, Button } from 'react-bootstrap'

const ImageZoom = ( {src, name} ) => {

    const [zoom, setZoom] = React.useState(false);
    console.log(zoom)

    var w = getComputedStyle(document.body).getPropertyValue('width');
    var wSliced = w.slice(0, w.length - 2);
    var wInNumbers = parseInt(wSliced);

    return (
            <Container className="ZoomContainer">
                <figure>
                    <img 
                        alt={name}
                        src= {src} 
                        style={
                                {
                                    width: zoom ? "200%" : "100%", 
                                    position: 'relative' ,
                                    right: zoom ? "50%" : "0%"
                                }
                            } />
                    <figcaption>{name}</figcaption>
                </figure>
                {
                    wInNumbers < 500 ? 
                        <Button 
                            className="DefaultButton"
                            onClick={() => setZoom(!zoom)} >
                            Cliquez pour agrandir
                        </Button> : <></>

                }
               
            </Container>
        );
}

export default ImageZoom;
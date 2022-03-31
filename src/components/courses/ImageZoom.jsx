import React from 'react';
import { Container } from 'react-bootstrap';
import { HiOutlineZoomIn } from 'react-icons/hi';
import SizeContext from '../context/SizeContext';

const ImageZoom = ( {src, name, n} ) => {

    const [zoom, setZoom] = React.useState(false);

    var [width] = React.useContext(SizeContext);
    var mobile = width < 450;

    return (
            <Container className="ZoomContainer">     
                <div 
                    className={`${zoom && mobile ? "OnZoom" : ''}`}
                    onClick={() => setZoom(!zoom)} >
                        <HiOutlineZoomIn className={`ZoomIcon ${!mobile ? "Hidden": ''}`}/>
                        <figure>
                            <img className={`${mobile ? "Clickable" : ''}`}
                                alt={name}
                                src= {src} 
                            />
                            <figcaption>{"figure " + n + " : " + name}</figcaption>
                        </figure>
                </div>   
            </Container>
        );
}

export default ImageZoom;
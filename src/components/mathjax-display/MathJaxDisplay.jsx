import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';
import mathJaxConfig from './MathJaxConfig';

import './MathJax.css';

const MathJaxDisplay = ({toShow, demo, fRef, infiniteFrac, color}) => {

    /* -2 et non -3 car les 2 backslashs ne sont plus qu'un */
    toShow = fRef ? 
                (toShow.slice(0, toShow.length - 2)
                .concat("\\hspace{2cm} ")
                .concat("(")
                .concat(fRef)
                .concat(")")
                .concat(toShow.slice(toShow.length - 2))) 
                    : toShow;
    
    var config = mathJaxConfig();
    const memoizedDisplay = React.useMemo(() =>  (
            <Container className={`MathJaxDisplay ${demo ? "Demo": ''} ${infiniteFrac ? "InfiniteFrac" : ''} ${color ? color + "MathJaxText" : '' }`}>      
                <MathJaxContext config={config}>
                    <MathJax dynamic hideUntilTypeset={ "every" } >
                        {toShow}
                    </MathJax>
                </MathJaxContext>
            </Container>
    ), [toShow, demo, infiniteFrac, color, config]);

    return memoizedDisplay;
}

export default MathJaxDisplay;
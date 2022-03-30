import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';
import mathJaxConfig from './MathJaxConfig';

import './MathJaxDisplay.css';
const MathJaxDisplay = ({toShow, demo, fRef, infiniteFrac, color}) => {

    toShow = fRef ? (toShow.slice(0, toShow.length - 3) + "\\hspace{2cm} " + "(" + fRef + ")" + toShow.slice(toShow.length - 3)) : toShow;
    
    var config = mathJaxConfig();
    const memoizedDisplay = React.useMemo(() =>  (
            <Container className={`MathJaxDisplayContainer ${demo ? "Demo": ''} ${infiniteFrac ? "InfiniteFrac" : ''} ${color ? color + "MathJaxText" : '' }`}>      
                <MathJaxContext config={config}>
                    <MathJax dynamic hideUntilTypeset={ "every" } >
                        {toShow}
                    </MathJax>
                </MathJaxContext>
            </Container>
    ), [toShow, demo, fRef, infiniteFrac, color, config]);

    return memoizedDisplay;
}

export default MathJaxDisplay;
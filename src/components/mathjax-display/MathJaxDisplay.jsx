import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';
import mathJaxConfig from './MathJaxConfig';

import './MathJaxDisplay.css';
const MathJaxDisplay = ({toShow, demo, infiniteFrac, color}) => {

    var config = mathJaxConfig();
    const memoizedDisplay = React.useMemo(() =>  (
            <Container className={`MathJaxDisplayContainer ${demo ? "Demo": ''} ${infiniteFrac ? "InfiniteFrac" : ''} ${color ? color + "MathJaxText" : '' }`}>      
                <MathJaxContext config={config}>
                    <MathJax dynamic hideUntilTypeset={ "every" } >
                        {toShow}
                    </MathJax>
                </MathJaxContext>
            </Container>
    ), [toShow]);

    return memoizedDisplay;
}

export default MathJaxDisplay;
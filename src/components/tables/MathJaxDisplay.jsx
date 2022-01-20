import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

const MathJaxDisplay = ({toShow}) => {

    return (
        
        <MathJaxContext>
            <MathJax dynamic hideUntilTypeset={ "every" } >
                {toShow}
            </MathJax>
        </MathJaxContext>
    );
}

export default MathJaxDisplay;
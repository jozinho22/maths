import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

const MathJaxDisplay = ({enounceModel}) => {

    return (
        
        <MathJaxContext>
            <MathJax>
                {enounceModel}
            </MathJax>
        </MathJaxContext>
    );
}

export default MathJaxDisplay;
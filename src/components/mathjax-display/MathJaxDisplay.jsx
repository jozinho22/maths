import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';

import './MathJaxDisplay.css';
const MathJaxDisplay = ({toShow, color}) => {

    const config =  {
                        loader: { load: ["[tex]/html"] },
                        tex: {
                            packages: { "[+]": ["html"] },
                            inlineMath: [["$", "$"]],
                            displayMath: [["\\(", "\\)"]]
                        }
                    }

    return (
        <Container className={`MathJaxDisplayContainer ${color}MathJaxText`}>      
            <MathJaxContext config={config}>
                <MathJax dynamic hideUntilTypeset={ "every" } >
                    {toShow}
                </MathJax>
            </MathJaxContext>
        </Container>
    );
}

export default MathJaxDisplay;
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';

import './MathJaxDisplay.css';
const MathJaxDisplay = ({toShow, demo, color}) => {

    const config =  {
                        loader: { load: ["[tex]/html"] },
                        tex: {
                            packages: { "[+]": ["html"] },
                            inlineMath: [["$", "$"]],
                            displayMath: [["\\(", "\\)"]]
                        }
                    }

    return (
        <Container className={`MathJaxDisplayContainer ${demo ? "Demo": ''} ${color ? color + "MathJaxText" : '' }`}>      
            <MathJaxContext config={config}>
                <MathJax dynamic hideUntilTypeset={ "every" } >
                    {toShow}
                </MathJax>
            </MathJaxContext>
        </Container>
    );
}

export default MathJaxDisplay;
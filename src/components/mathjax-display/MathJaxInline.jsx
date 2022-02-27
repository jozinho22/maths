import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Container } from 'react-bootstrap';

import './MathJaxDisplay.css';
const MathJaxInline = ({toShow}) => {

    const config =  {
                        loader: { load: ["[tex]/html"] },
                        tex: {
                            packages: { "[+]": ["html"] },
                            inlineMath: [["$", "$"]],
                            displayMath: [["\\(", "\\)"]]
                        }
                    }

    return (
            <MathJaxContext className="MathJaxInline" config={config}>
                <MathJax dynamic hideUntilTypeset={ "every" } inline >
                    {toShow}
                </MathJax>
            </MathJaxContext>
    );
}

export default MathJaxInline;
import { MathJax, MathJaxContext } from "better-react-mathjax";

import './MathJax.css';

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
            <MathJaxContext config={config}>
                <MathJax dynamic hideUntilTypeset={ "every" } inline >
                    {toShow}
                </MathJax>
            </MathJaxContext>
    );
}

export default MathJaxInline;
import { MathJax, MathJaxContext } from "better-react-mathjax";
import mathJaxConfig from './MathJaxConfig';

import './MathJax.css';

const MathJaxInline = ({toShow}) => {

    const config = mathJaxConfig();

    return (
            <MathJaxContext config={config}>
                <MathJax dynamic hideUntilTypeset={ "every" } inline >
                    {toShow}
                </MathJax>
            </MathJaxContext>
    );
}

export default MathJaxInline;
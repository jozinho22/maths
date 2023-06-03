import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const Demonstration = () => {

    var abcdBase = "\\(\\frac{a}{b} = \\frac{c}{d}\\)";
    var adEqubc = "\\(a.d = b.c\\)";

    var abbEqucbd = "\\(\\frac{a.b}{b} = \\frac{c.b}{d}\\)";
    var aEqucbd = "\\(a = \\frac{c.b}{d}\\)";
    var adEqucbdd = "\\(a.d = \\frac{c.b.d}{d}\\)";
    var adcb = "\\(a.d = c.b\\)";

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <p>
                Partons à nouveau de notre équation de départ.
                {"\n"} Pour tout <MathJaxInline toShow={"$a,b,c,d \\neq 0$"} />
            </p>
            <MathJaxDisplay toShow={abcdBase} demo/>
            <p>On multiplie les deux membres par le même nombre <MathJaxInline toShow={"$b$"} /></p>
            <MathJaxDisplay toShow={abbEqucbd} demo />
            <MathJaxDisplay toShow={aEqucbd} demo />
            <p>À présent, on multiplie les deux membres par le même nombre <MathJaxInline toShow={"$d$"} /></p>
            <MathJaxDisplay toShow={adEqucbdd} demo />
            <MathJaxDisplay toShow={adcb} demo />
            <p>On retrouve bien notre équation de départ </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={adEqubc}/>
            </Container>
        </>
    )

}

export default Demonstration;
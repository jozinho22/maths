import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Aside from '../../helpers/Aside';

const FormulesDeDuplication = () => {

    var cos2a = "\\(cos(2\\alpha) = cos^2(\\alpha) - sin^2(\\alpha)  \\)";
    var cos2aBis = "\\(cos(2\\alpha) = 2cos^2(\\alpha) - 1  \\)";
    var cos2aTer = "\\(cos(2\\alpha) = 1 - 2sin^2(\\alpha) \\)";
    var sin2a =  "\\(sin(2\\alpha) = 2 sin(\\alpha)cos(\\alpha) \\)";

    var eiTheta2Agen = "\\( e^{i(2\\alpha)} = e^{i(\\alpha + \\alpha)} = cos(\\alpha + \\alpha)  + i.sin(\\alpha + \\alpha)  \\)";
    var eiTheta2A = "\\( e^{i(\\alpha + \\alpha)} = e^{i\\alpha}e^{i\\alpha}  \\)";
    var eiTheta2A2 = "\\( e^{i(2\\alpha)} = \\bigl(cos(\\alpha) + i.sin(\\alpha)\\bigr) \\bigl(cos(\\alpha) + i.sin(\\alpha)\\bigr) \\)";
    var eiTheta2A3 = "\\( e^{i(2\\alpha)} = cos^2(\\alpha) + 2i.sin(\\alpha).cos(\\alpha) - sin^2(\\alpha)\\)";
    var eiTheta2A4 = "\\( e^{i(2\\alpha)} = \\underbrace{ cos^2(\\alpha) - sin^2(\\alpha)} _\\text{partie réelle}  + i.\\underbrace{2.sin(\\alpha).cos(\\alpha) } _\\text{ partie imaginaire } \\)";

    var results = `\\( \\Biggl\\{ \\begin{gather*} \\enspace \\enspace cos(2\\alpha) = cos^2(\\alpha) - sin^2(\\alpha) \\\\ sin(2\\alpha) = 2 sin(\\alpha)cos(\\alpha) \\end{gather*} \\)`;

    return (
        <>      
            <Container className="Focus">
                <MathJaxDisplay toShow={sin2a} />
            </Container>
            <Container className="Focus">
                <MathJaxDisplay toShow={cos2a} />
                <MathJaxDisplay toShow={cos2aBis} />
                <MathJaxDisplay toShow={cos2aTer} />
            </Container>

            <Title1 title="Démonstration" />
            <p>En écrivant le complexe d'argument <MathJaxInline toShow={"$ 2\\alpha$"}/> sous sa forme complexe exponentielle, on obtient : </p>
            <MathJaxDisplay toShow={eiTheta2Agen} demo />
            <Aside>
                <p>Mais,</p>
                <MathJaxDisplay toShow={eiTheta2A} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={eiTheta2A2} demo />
                <MathJaxDisplay toShow={eiTheta2A3} demo />
                <MathJaxDisplay toShow={eiTheta2A4} demo />
            </Aside>
            <p>- <MathJaxInline toShow={"$\\mathcal{Re} \\left(e^{i(2\\alpha )}\\right) = (cos^2(\\alpha) - sin^2(\\alpha)$"}/> est la partie réelle de <MathJaxInline toShow={"$e^{i(\\alpha + \\alpha)}$"}/>.</p>
            <p>- <MathJaxInline toShow={"$\\mathcal{Im} \\left(e^{i(2\\alpha)}\\right) = 2.sin(\\alpha).cos(\\alpha)$"}/> est sa partie imaginaire.</p>
            <p>Soit en identifiant les parties correspondantes entre elles on a : </p>
            <MathJaxDisplay toShow={results} demo />

            <p>Pour la démonstration des deux autres formules de <MathJaxInline toShow={"$cos(2\\alpha)$"}/>, on se sert de l'expression <MathJaxInline toShow={"$cos^2(\\alpha) + sin^2(\\alpha) = 1$"}/>.</p>
        </>
    )
}

export default FormulesDeDuplication;
import React from 'react';
import { Container } from 'react-bootstrap';
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';
import thales from '../assets/thales.png';

const Presentation = () => {

    var thalesTheorem = "\\( \\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE} \\)";
    var thalesTheoremInv = "\\( \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC} \\)";

    var thalesTheoremRecip = "\\(BC // DE \\)";

    return (
        <>
            <Title1 title={"Le théorème"} />
            <p>Le théorème de Thalès implique des rapports de proportionnalité entre les longeurs dans un triangle.</p>
            <p>Dans un triangle quelconque, on trace une parallèle à un des côtes : </p>
            <ImageZoom src={thales} name="Le théorème de Thalès" n={1} />
            <p>Avec le théorème de Thalès, on a les relations suivantes :</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={thalesTheorem} />
            </Container>
            <p>Par extension, on a aussi les relations inversées : </p>
            <MathJaxDisplay toShow={thalesTheoremInv} />

            <Title1 title={"La réciproque du théorème"} />
            <p>Si :</p>
            <MathJaxDisplay toShow={thalesTheorem} demo />
            <p>Cela signifie que : </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={thalesTheoremRecip} fRef={1} />
            </Container>
            <p>Où <MathJaxInline toShow={"$ // $"} /> signifie "est parallèle à".</p>
        </>
    );
}

export default Presentation;
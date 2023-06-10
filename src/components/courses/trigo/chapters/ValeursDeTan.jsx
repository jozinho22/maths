import React from 'react';
import { Container } from 'react-bootstrap';
import TanValuesTable from '../TanValuesTable';
import TanFormulasTable from '../TanFormulasTable';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const ValeursDeTan = () => {

    var tan = "\\(tan(\\alpha) = \\frac{sin(\\alpha)}{cos(\\alpha)}  \\)";

    return (
            <>
                <p>Étant donné que : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={tan} />
                </Container>
                <p>Les valeurs du tableau précédents seront à nouveau présentes.</p>
                <TanValuesTable />
                <p className="Title1">Formules de cos(α) et sin(α) en fonction de π </p>
                <TanFormulasTable />
            </>
    )

}

export default ValeursDeTan;
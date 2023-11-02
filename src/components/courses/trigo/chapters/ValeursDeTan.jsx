import React from 'react';
import { Container } from 'react-bootstrap';
import TanValuesTable from '../helpers/TanValuesTable';
import TanFormulasTable from '../helpers/TanFormulasTable';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';

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

                <Title1 title={"Formules de cos(α) et sin(α) en fonction de π"} />
                <TanFormulasTable />
            </>
    )

}

export default ValeursDeTan;
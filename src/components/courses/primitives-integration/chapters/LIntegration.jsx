import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import Title1 from '../../helpers/Title1';

import integration3 from '../assets/integration3.png';

const LIntegration = () => {

    var n = 0;

    return  <>
                <ImageZoom src={integration3} name="Intégration de a vers b" n={++n} />
            
            </>
}

export default LIntegration;
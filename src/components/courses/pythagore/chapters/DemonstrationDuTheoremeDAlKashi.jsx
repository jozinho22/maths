import React from 'react';

import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import alKashi from '../../shapes/assets/alKashi.png';

const DemonstrationDuTheoremeDAlKashi = () => {

    var gen = "\\(a^2 + b^2 = c^2\\)";
    var alKashi1 = "\\(a^2 + b^2 -2ab.cos(\\gamma) = c^2\\)";

    return (
        <> 
            <ImageZoom src={alKashi} name="Théorème d'Al-Kashi" n={4} />

        </>
    );

}

export default DemonstrationDuTheoremeDAlKashi;
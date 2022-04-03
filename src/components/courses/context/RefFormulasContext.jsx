import React from 'react';
import addRefFormulas from '../addRefFormulas';

export default React.createContext(
    {
        refFormulas: [],
        updateRefFormulas: (refFormulas, formula, index) => addRefFormulas(refFormulas, formula, index)
    }
);
import React from 'react';

export default React.createContext(
    {
        size: [],
        updateSize: ([width, height]) => []
    }
);
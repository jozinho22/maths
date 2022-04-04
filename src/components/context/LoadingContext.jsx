import React from 'react';

export default React.createContext(
    {
        isLoading: {},
        updateIsLoading: (isLoading) => isLoading
    }
);
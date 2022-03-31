import React from 'react';
import BasicSpinner from './spinners/BasicSpinner';

const ComponentManager = ( {isLoading, setIsLoading, children} ) => {

    React.useEffect(() => {
        var interval = setInterval(function () {
            if (document.readyState === 'complete') setIsLoading(false); 
            clearInterval(interval);       
        }, 1000);
    });

    return (
        isLoading ? 
            <BasicSpinner />
                : children
    );

}

export default ComponentManager;
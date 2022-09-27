import React from "react";

const useIsLoading = ( isLoading, setIsLoading ) => {

    console.log('avant useEffect ' + document.readyState)

    React.useEffect(() => {
        if(isLoading) {
            console.log(document.readyState)
            var interval = setInterval(function () {
                console.log(interval)
                if (document.readyState === 'complete') {
                    clearInterval(interval);       
                    setIsLoading(false); 
                }

            }, 1000);
        } 
    }, [isLoading]);

}

export default useIsLoading;
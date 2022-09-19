import React from "react";

const useIsLoading = ( isLoadingLink, setIsLoadingLink, isLoadingChapter, setIsLoadingChapter ) => {

    React.useEffect(() => {
        if(isLoadingLink) {
            var interval = setInterval(function () {
                if (document.readyState === 'complete') setIsLoadingLink(false); 
                clearInterval(interval);       
                // do your work
            }, 1000);
        } 
        if(isLoadingChapter) {
            var interval = setInterval(function () {
                if (document.readyState === 'complete') setIsLoadingChapter(false); 
                clearInterval(interval);       
                // do your work
            }, 1000);
        }
    }, [isLoadingLink, isLoadingChapter]);

}

export default useIsLoading;
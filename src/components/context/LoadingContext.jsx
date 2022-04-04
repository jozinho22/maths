import React from 'react';

export default React.createContext(
    {
        isLoadingLink: {},
        updateIsLoadingLink: (isLoadingLink) => isLoadingLink,
        isLoadingChapter: {},
        updateIsLoadingChapter: (isLoadingChapter) => isLoadingChapter
    }
);
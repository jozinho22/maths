import React from 'react';

export default React.createContext(
    {
        font: "",
        updateFont: (name) => {},
        playMode: false,
        updatePlayMode: (playMode) => {},
        theme: "",
        updateTheme: (name) => {}
    }
);
import React from 'react';

export default React.createContext(
    {
        font: "",
        updateFont: (name) => {},
        playMode: false,
        updatePlayMode: (playMode) => playMode,
        theme: "",
        updateTheme: (name) => {}
    }
);
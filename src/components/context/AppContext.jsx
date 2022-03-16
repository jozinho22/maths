import React from 'react';

export default React.createContext(
    {
        component: {},
        updateComponent: (component) => {},
        font: "",
        updateFont: (name) => {},
        playMode: false,
        updatePlayMode: (playMode) => playMode,
        theme: "",
        updateTheme: (name) => {}
    }
);
import React from 'react';

export default React.createContext(
    {
        playMode: false,
        updatePlayMode: (playMode) => playMode
    }
);
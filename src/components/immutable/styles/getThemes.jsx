const getThemes = () => {
    
    var j = -1;
    return [
                    {id: ++j, name: 'Algeria'},
                    {id: ++j, name: 'Brazil'},
                    {id: ++j, name: 'Darcula'},
                    {id: ++j, name: 'Germany'},
                    {id: ++j, name: 'France'},
                    {id: ++j, name: 'Senegal'}
                ];
}

const getThemeIfStoredThemeExists = (theme) => {

    var themes = getThemes();
    for(var t of themes) {
        if(t === theme) {
            return t;
        }
    }
}

export {getThemes, getThemeIfStoredThemeExists};
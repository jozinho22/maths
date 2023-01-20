const getFonts = () => {

        var k = -1;
        return [
                    {id: ++k, name: 'Arabic'},
                    {id: ++k, name: 'BlackChancery'},
                    {id: ++k, name: 'Chinese'},
                    {id: ++k, name: 'Dragons'},
                    {id: ++k, name: 'Gothic'},
                    {id: ++k, name: 'Indian'},
                    {id: ++k, name: 'Scribe'},
                    {id: ++k, name: 'Xmas'},
                    {id: ++k, name: 'Xfiles'}
                ];
}

const getFontIfStoredFontExists = (font) => {

    var fonts = getFonts();
    for(var f of fonts) {
        if(f === font) {
            return f.name;
        }
    }
}

export {getFonts, getFontIfStoredFontExists};
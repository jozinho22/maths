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
        if(f.name === font) {
            return f.name;
        }
    }
}

const getRandomFont = () => {
    var fonts = getFonts();
    console.log(fonts[getRandomInt(fonts.length - 1)])
    return fonts[getRandomInt(fonts.length - 1)].name;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

export {getFonts, getFontIfStoredFontExists, getRandomFont};
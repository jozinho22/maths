import Themes from "./Themes";

const getThemeIfStoredThemeExists = (theme) => {

    for(var key of Object.keys(Themes)) {

        if(Themes[key] === theme) {
            return Themes[key];
        }
    } 
}

export {getThemeIfStoredThemeExists};
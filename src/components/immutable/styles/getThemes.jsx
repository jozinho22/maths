import Themes from "./Themes";

const getThemeIfStoredThemeExists = (theme) => {

    for(var key of Object.keys(Themes)) {

        if(Themes[key] === theme) {
            console.log(Themes[key])
            return Themes[key];
        }
    } 
}

export {getThemeIfStoredThemeExists};
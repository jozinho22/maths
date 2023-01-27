import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/immutable/styles/Fonts.css';
import './components/immutable/styles/Themes.css';
import './components/immutable/styles/Commons.css';
import './components/alert/Alert.css';
import './App.css';

import AppContext from './components/context/AppContext';
import LoadingContext from './components/context/LoadingContext';

import BlurryingSpinner from './components/immutable/spinners/BlurryingSpinner';
import useIsLoading from './components/immutable/spinners/useIsLoading';

import Header from './components/immutable/nav/Header';
import Footer from './components/immutable/nav/Footer';

import coursesResourceBuilder from './components/courses/coursesResourceBuilder';
import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import gamesResourceBuilder from './components/games/gamesResourceBuilder';

import { getFontIfStoredFontExists } from './components/immutable/styles/getFonts';
import { getThemeIfStoredThemeExists } from './components/immutable/styles/getThemes';
import AppRoutes from './AppRoutes';

function App() {

    const [isLoading, setIsLoading] = React.useState(true);

    const [font, setFont] = React.useState(getFontIfStoredFontExists(JSON.parse(sessionStorage.getItem('ma-thematique-font'))) ? JSON.parse(sessionStorage.getItem('ma-thematique-font')) : "Dragons");
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState(getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('ma-thematique-theme'))) ? JSON.parse(sessionStorage.getItem('ma-thematique-theme')) : "Brazil");
 
    const appContext = {
        font: font,
        updateFont: setFont, 
        playMode: playMode,
        updatePlayMode: setPlayMode,
        theme: theme,
        updateTheme: setTheme
    }

    const loadingContext = {
        isLoading: isLoading,
        updateIsLoading: setIsLoading
    }

    useIsLoading(isLoading, setIsLoading);

    var courseItems = coursesResourceBuilder();
    var pdfItems = pdfResourceBuilder();
    var gameItems = gamesResourceBuilder();
    
    return ( 
        <div className="App" >     
            <AppContext.Provider value={appContext} > 
            <LoadingContext.Provider value={loadingContext} >
                <div className={`${theme} ${font} CopyBook`}>
                    <BrowserRouter>
                        {isLoading ? <BlurryingSpinner /> : ''}
                        <Header courseItems = {courseItems} pdfItems ={pdfItems} gameItems={gameItems} /> 
                            <Container className = {` RelativeContainer ${playMode ? "PlayMode" : ''}  ${isLoading ? "Blur" : ''} `} >                           
                                <AppRoutes courseItems={courseItems} pdfItems={pdfItems} gameItems={gameItems} />
                            </Container> 
                        <Footer /> 
                    </BrowserRouter>
                </div> 
            </LoadingContext.Provider>
            </AppContext.Provider> 
        </div>
    );
}

export default App;
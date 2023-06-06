import React, { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/immutable/styles/Fonts.css';
import './components/immutable/styles/Themes.css';
import './components/immutable/styles/Commons.css';
import './components/alert/Alert.css';
import './App.css';

import AppContext from './components/context/AppContext';
import BlurryingSpinner from './components/immutable/spinners/BlurryingSpinner';

import Header from './components/immutable/nav/Header';
import Footer from './components/immutable/nav/Footer';

import coursesResourceBuilder from './components/courses/coursesResourceBuilder';
import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import gamesResourceBuilder from './components/games/gamesResourceBuilder';

import { getFontIfStoredFontExists, getRandomFont } from './components/immutable/styles/getFonts';
import { getThemeIfStoredThemeExists } from './components/immutable/styles/getThemes';
import AppRoutes from './AppRoutes';

function App() {

    const [font, setFont] = React.useState(getFontIfStoredFontExists(JSON.parse(sessionStorage.getItem('ma-thematique-font'))) ? JSON.parse(sessionStorage.getItem('ma-thematique-font')) : getRandomFont());
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

    var courseItems = coursesResourceBuilder();
    var pdfItems = pdfResourceBuilder();
    var gameItems = gamesResourceBuilder();
    
    return ( 
        <>
            <div className="App" id="capture">     
                <AppContext.Provider value={appContext} >                     
                    <div className={`${theme} ${font} CopyBook`}>
                        <BrowserRouter>
                            <Header courseItems={courseItems} pdfItems ={pdfItems} gameItems={gameItems} /> 
                                <Suspense fallback={<BlurryingSpinner />}>
                                    <Container className={`RelativeContainer ${playMode ? "PlayMode" : ''} `} >                           
                                        <AppRoutes courseItems={courseItems} pdfItems={pdfItems} gameItems={gameItems} />
                                    </Container> 
                                </Suspense>
                            <Footer /> 
                        </BrowserRouter>
                    </div> 
                </AppContext.Provider> 
            </div>
            <div id="doc-to-print"></div>
        </>
    );
}

export default App;
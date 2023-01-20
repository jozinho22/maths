import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/immutable/styles/Fonts.css';
import './components/immutable/styles/Themes.css';
import './components/immutable/styles/Commons.css';
import './components/alert/Alert.css';
import './App.css';

import AppContext from './components/context/AppContext';
import LoadingContext from './components/context/LoadingContext';

import SizeContext from './components/context/SizeContext';

import useWindowSize from './components/immutable/dimensions/useWindowSize';
import updateDimensions from './components/immutable/dimensions/updateDimensions';

import BlurryingSpinner from './components/immutable/spinners/BlurryingSpinner';
import useIsLoading from './components/immutable/spinners/useIsLoading';

import Header from './components/immutable/nav/Header';

import Home from './components/home/Home';

import coursesResourceBuilder from './components/courses/coursesResourceBuilder';
import CoursesTableOfContents from './components/courses/CoursesTableOfContents';

import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import PdfTableOfContents from './components/pdf-viewer/PdfTableOfContents';

import gamesResourceBuilder from './components/games/gamesResourceBuilder';
import GamesTableOfContents from './components/games/GamesTableOfContents';

import Links from './components/links/Links';

import Contact from './components/contact/Contact';
import Error from './components/immutable/Error';

import Footer from './components/immutable/nav/Footer';

import { getFontIfStoredFontExists } from './components/immutable/styles/getFonts';
import { getThemeIfStoredThemeExists } from './components/immutable/styles/getThemes';

function App() {

    const [isLoading, setIsLoading] = React.useState(true);

    const [font, setFont] = React.useState(getFontIfStoredFontExists(JSON.parse(sessionStorage.getItem('font'))) ? JSON.parse(sessionStorage.getItem('font')) : "Dragons");
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState(getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('theme'))) ? getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('theme'))) : "Brazil");
 
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

    const [width, height] = useWindowSize();
    const sizeContext = [width, height];

    React.useLayoutEffect(() => {
        updateDimensions([width, height]);
    }, [width, height]); 

    useIsLoading(isLoading, setIsLoading);

    var courseItems = coursesResourceBuilder();
    var pdfItems = pdfResourceBuilder();
    var gameItems = gamesResourceBuilder();
    
    return ( 
        <div className="App" >     
            <AppContext.Provider value={appContext} > 
            <LoadingContext.Provider value={loadingContext} >
            <SizeContext.Provider value={sizeContext} >
                <div  className={`${theme} ${font} CopyBook`}>
                    <BrowserRouter>
                        {isLoading ? <BlurryingSpinner /> : ''}
                        <Header courseItems = {courseItems} pdfItems ={pdfItems} gameItems={gameItems} /> 
                            <Container className = {` RelativeContainer ${playMode ? "PlayMode" : ''}  ${isLoading ? "Blur" : ''} `} >                           
                                
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="/cours" element={<CoursesTableOfContents courseItems={courseItems} />} />
                                    {courseItems.map(courseItem => (
                                            <Route 
                                                key={courseItem.id}
                                                path={`/cours/${courseItem.relativePath}`}
                                                element={courseItem.component} />
                                    ))}
                                    <Route path="/bds-de-jpp" element={<PdfTableOfContents pdfItems={pdfItems} />} />
                                    {pdfItems.map(pdfItem => (
                                            <Route 
                                                key={pdfItem.id}
                                                path={`/bds-de-jpp/${pdfItem.relativePath}`}
                                                element={<PDFViewerPage pdfItem={pdfItem} />} />
                                    ))}
                                    <Route path="/jeux" element={<GamesTableOfContents gameItems={gameItems} />} />
                                    {gameItems.map(gameItem => (
                                            <Route 
                                                key={gameItem.id}
                                                path={`/jeux/${gameItem.relativePath}`}
                                                element={gameItem.component} />
                                    ))}
                                    <Route path="/liens" element={<Links />} />

                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="*" element={<Error />} status={404} />
                                </Routes>

                            </Container> 
                        <Footer /> 
                    </BrowserRouter>
                </div> 
            </SizeContext.Provider>
            </LoadingContext.Provider>
            </AppContext.Provider> 
        </div>
    );
}

export default App;
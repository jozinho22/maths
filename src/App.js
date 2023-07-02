import React, { Suspense } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';
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

import { getThemeIfStoredThemeExists } from './components/immutable/styles/getThemes';
import AppRoutes from './AppRoutes';
import Fonts from './components/immutable/styles/Fonts';
import Themes from './components/immutable/styles/Themes';
import verifyUrlCountInApp from './components/helpers/verifyUrlCountInApp';

function App() {

    const [font, setFont] = React.useState(Fonts.BLACK_CHANCELRY);
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState(getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('ma-thematique-theme'))) ? JSON.parse(sessionStorage.getItem('ma-thematique-theme')) : Themes.BRAZIL);
    const [loc, setLoc] = React.useState("");

    const [indexToSeek, setIndexToSeek] = React.useState(0);
    const [prevIndex, setPrevIndex] = React.useState(0);

    const [currentElement, setCurrentElement] = React.useState({});
    const [numberOfElementsInPage, setNumberOfElementsInPage] = React.useState(0);
    const [scrollPos, setScrollPos] = React.useState(0);
    const [scrollDir, setScrollDir] = React.useState(0);

    const appContext = {
        font: font,
        updateFont: setFont, 
        playMode: playMode,
        updatePlayMode: setPlayMode,
        theme: theme,
        updateTheme: setTheme,
        loc: loc,
        updateLoc: setLoc
    }

    var courseItems = coursesResourceBuilder();
    var pdfItems = pdfResourceBuilder();
    var gameItems = gamesResourceBuilder();

    /* if(process.env.NODE_ENV === 'development') {
        verifyUrlCountInApp();
    }  */

    React.useEffect(() => {
        setNumberOfElementsInPage(document.getElementsByClassName('ZoomContainer').length);
    }, [loc]);

    console.log("numberOfElementsInPage", numberOfElementsInPage)
    console.log("loc", loc)

    const getDirection = (rect) => {
        // detects new state and compares it with the new one

        if(scrollPos === 0) 
            setScrollDir(-1)
        // UP
        else if(rect.top > scrollPos)
            setScrollDir(1)
        // DOWN
        else
            setScrollDir(-1)
        // saves the new position for iteration.
        setScrollPos(rect.top);
        
        return scrollDir;
    }

    const handleScroll = (event) => {
        console.log("------------");
        console.log("Scroll");
        console.log("indexToSeek", indexToSeek);
        console.log("currentElement", currentElement);

        let elementToSeek = document.getElementsByClassName('ZoomContainer')[indexToSeek];
        console.log("elementToSeek", elementToSeek );
       
        let isVisibleElToSeek = isInViewport(elementToSeek);
        let isVisibleCurrentEl = isInViewport(currentElement);
        console.log(isVisibleElToSeek ? "VISIBLE" : "NOT VISIBLE");

        if(isVisibleElToSeek && (Object.keys(currentElement).length === 0 || elementToSeek !== currentElement)) {
            setCurrentElement(elementToSeek);
            if(indexToSeek < numberOfElementsInPage - 1 && indexToSeek > 0) {
                if(scrollDir < 0) {
                    setIndexToSeek(indexToSeek + 1);
                } else if(scrollDir > 0) {
                    setIndexToSeek(indexToSeek - 1);
                } 
                setPrevIndex(indexToSeek);
            } 
        } else if(!isVisibleCurrentEl) {
            if(prevIndex < indexToSeek && scrollDir > 0) {
                setIndexToSeek(indexToSeek - 1);
            } else if(prevIndex > indexToSeek && scrollDir > 0) {
                setIndexToSeek(indexToSeek - 1);
            }
        }
        console.log("------------");
    }

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const dir = getDirection(rect);
        console.log("dir", dir)
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

/*     <Link url={pathBuilder(`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/presentation`)} external>le premier chapitre sur la dérivée</Link>
 */    
    return ( 
        <div className="AppScroll" /* onScroll={handleScroll} */>
            <div className="App" id="capture">     
                <AppContext.Provider value={appContext} >                     
                    <div className={`${theme} ${font} CopyBook`}>
                        <BrowserRouter>
                            <Header courseItems={courseItems} pdfItems ={pdfItems} gameItems={gameItems} /> 
                                <Suspense fallback={<BlurryingSpinner />}>
                                    <Container className={`RelativeContainer ${playMode ? "PlayMode" : ''} `} >                           
                                        <AppRoutes courseItems={courseItems} pdfItems={pdfItems} gameItems={gameItems} setLoc={setLoc}/>
                                    </Container> 
                                </Suspense>
                            <Footer /> 
                        </BrowserRouter>
                    </div> 
                </AppContext.Provider> 
            </div>
            <div id="doc-to-print"></div>
        </div>
    );
}

export default App;
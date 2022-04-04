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

import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import SizeContext from './components/context/SizeContext';

import useWindowSize from './components/immutable/dimensions/useWindowSize';
import updateDimensions from './components/immutable/dimensions/updateDimensions';

import BlurryingSpinner from './components/immutable/spinners/BlurryingSpinner';
import useIsLoading from './components/immutable/spinners/useIsLoading';

import Header from './components/immutable/nav/Header';
import Home from './components/home/Home';
import LeNombrePi from './components/courses/pi/LeNombrePi';
import LeNombreDOr from './components/courses/nbOr/LeNombreDOr';
import LaTrigonometrie from './components/courses/trigo/LaTrigonometrie';
import LesPuissances from './components/courses/powers/LesPuissances';
import LesFormes from './components/courses/shapes/LesFormes';
import LesFonctionsUsuelles from './components/courses/usual-functions/LesFonctionsUsuelles';
import LeProduitEnCroix from './components/courses/cross-product/LeProduitEnCroix';
import TablesTest from './components/tables-test/TablesTest';
import ToutesLesBDs from './components/pdf-viewer/ToutesLesBDs';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import Contact from './components/contact/Contact';
import Error from './components/immutable/Error';
import Footer from './components/immutable/nav/Footer';

function App() {

    const [isLoadingLink, setIsLoadingLink] = React.useState(true);
    const [isLoadingChapter, setIsLoadingChapter] = React.useState(false);

    const [font, setFont] = React.useState("Dragons");
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState("Brazil");

    const appContext = {
        font: font,
        updateFont: setFont,
        playMode: playMode,
        updatePlayMode: setPlayMode,
        theme: theme,
        updateTheme: setTheme
    }

    var pdfItems = pdfResourceBuilder();

    const loadingContext = {
        isLoadingLink: isLoadingLink,
        updateIsLoadingLink: setIsLoadingLink,
        isLoadingChapter: isLoadingChapter,
        updateIsLoadingChapter: setIsLoadingChapter
    }

    const [width, height] = useWindowSize();
    const sizeContext = [width, height];

    React.useLayoutEffect(() => {
        updateDimensions([width, height]);
    }, [width, height]); 

    /* React.useEffect(() => { */
/*         if(isLoadingLink) {
            var interval = setInterval(function () {
                if (document.readyState === 'complete') setIsLoadingLink(false); 
                clearInterval(interval);       
                // do your work
            }, 1000);
        }  else if(isLoadingChapter) {
            var interval = setInterval(function () {
                if (document.readyState === 'complete') setIsLoadingChapter(false); 
                clearInterval(interval);       
                // do your work
            }, 1000);
        } */

        useIsLoading(isLoadingLink, setIsLoadingLink, isLoadingChapter, setIsLoadingChapter);

    /* }); */

    console.log(isLoadingLink, isLoadingChapter)
    return ( 
        <div className="App" >     
            <AppContext.Provider value={appContext} >
            <LoadingContext.Provider value={loadingContext} >
            <SizeContext.Provider value={sizeContext} >
                <div className={`${theme} ${font}`}>
                    <BrowserRouter>
                        {isLoadingLink || isLoadingChapter ? <BlurryingSpinner /> : ''}
                        <Header pdfItems ={pdfItems} /> 
                            <Container className = {` RelativeContainer ${playMode ? "PlayMode" : ''}  ${isLoadingLink || isLoadingChapter ? "Blur" : ''} `} >                           
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="/cours/le-produit-en-croix" element={<LeProduitEnCroix />} />
                                    <Route path="/cours/les-puissances" element={<LesPuissances />} />
                                    <Route path="/cours/le-nombre-pi" element={<LeNombrePi />} />
                                    <Route path="/cours/le-nombre-d-or" element={<LeNombreDOr />} />
                                    <Route path="/cours/la-trigonometrie" element={<LaTrigonometrie />} />
                                    <Route path="/cours/les-formes" element={<LesFormes />} />
                                    <Route path="/cours/les-fonctions-usuelles" element={<LesFonctionsUsuelles />} />
                                    
                                    <Route path="/bds-de-jpp" element={<ToutesLesBDs pdfItems={pdfItems} />} />
                                    {pdfItems.map(pdfItem => (
                                            <Route 
                                                key={pdfItem.id}
                                                path={`/bds-de-jpp/${pdfItem.relativePath}`}
                                                element={<PDFViewerPage pdfItem={pdfItem} />} />
                                    ))}

                                    <Route path="/jeux/reviser-ses-tables" element={<TablesTest />} />

                                    <Route path="/contact" element={<Contact />} />

                                    <Route path="*" element={<Error />} />
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
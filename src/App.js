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



import PdfTableOfContents from './components/pdf-viewer/PdfTableOfContents';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';

import TablesTest from './components/tables-test/TablesTest';
import Links from './components/links/Links';

import Contact from './components/contact/Contact';
import Error from './components/immutable/Error';

import Footer from './components/immutable/nav/Footer';
import coursesResourceBuilder from './components/courses/coursesResourceBuilder';

function App() {

    const [isLoadingLink, setIsLoadingLink] = React.useState(true);
    const [isLoadingChapter, setIsLoadingChapter] = React.useState(false);

    const [font, setFont] = React.useState(JSON.parse(localStorage.getItem('font')) ? JSON.parse(localStorage.getItem('font')) : "Dragons");
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState(JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : "Brazil");

    const appContext = {
        font: font,
        updateFont: setFont,
        playMode: playMode,
        updatePlayMode: setPlayMode,
        theme: theme,
        updateTheme: setTheme
    }

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

    useIsLoading(isLoadingLink, setIsLoadingLink, isLoadingChapter, setIsLoadingChapter);

    var pdfItems = pdfResourceBuilder();
    var coursesItems = coursesResourceBuilder();

    return ( 
        <div className="App" >     
            <AppContext.Provider value={appContext} >
            <LoadingContext.Provider value={loadingContext} >
            <SizeContext.Provider value={sizeContext} >
                <div className={`${theme} ${font}`}>
                    <BrowserRouter>
                        {isLoadingLink || isLoadingChapter ? <BlurryingSpinner /> : ''}
                        <Header coursesItems = {coursesItems} pdfItems ={pdfItems} /> 
                            <Container className = {` RelativeContainer ${playMode ? "PlayMode" : ''}  ${isLoadingLink || isLoadingChapter ? "Blur" : ''} `} >                           
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                   
                                    {coursesItems.map(coursesItem => (
                                            <Route 
                                                key={coursesItem.id}
                                                path={coursesItem.relativePath}
                                                element={coursesItem.component} />
                                    ))}

                                    <Route path="/bds-de-jpp" element={<PdfTableOfContents pdfItems={pdfItems} />} />
                                    {pdfItems.map(pdfItem => (
                                            <Route 
                                                key={pdfItem.id}
                                                path={`/bds-de-jpp/${pdfItem.relativePath}`}
                                                element={<PDFViewerPage pdfItem={pdfItem} />} />
                                    ))}

                                    <Route path="/jeux/reviser-ses-tables" element={<TablesTest />} />
                                    <Route path="/liens" element={<Links />} />

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
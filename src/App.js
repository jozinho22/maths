import React, { Suspense } from 'react';

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
import { HashRouter, /* RouterProvider */ } from 'react-router-dom';
import AppRoutes from './AppRoutes'
/* import useRouter from './useRouter'; */
import Fonts from './components/immutable/styles/Fonts';
import Themes from './components/immutable/styles/Themes';
import verifyUrlCountInApp from './components/helpers/verifyUrlCountInApp';

function App() {

    const [font, setFont] = React.useState(Fonts.BLACK_CHANCELRY);
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState(process.env.NODE_ENV === 'development' ?  Themes.DARCULA : Themes.BRAZIL);

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

    /* if(process.env.NODE_ENV === 'development') {
        verifyUrlCountInApp();
    }  */

/* 

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
<Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.COMPLEXES}/interpretation-geometrique`} external></Link>
  
*/
    return ( 
        <>
            <div className="App" id="capture">     
                <AppContext.Provider value={appContext} >                     
                    <div className={`${theme} ${font} CopyBook`}>
                        <HashRouter>
                            <Header courseItems={courseItems} gameItems={gameItems}  pdfItems ={pdfItems} /> 
                                <Suspense fallback={<BlurryingSpinner />}>
                                    <Container className={`RelativeContainer ${playMode ? "PlayMode" : ''} `} >                           
                                        {/* <RouterProvider router={useRouter(courseItems, pdfItems, gameItems)} /> */}
                                        {<AppRoutes courseItems={courseItems} pdfItems={pdfItems} gameItems={gameItems} />}
                                    </Container> 
                                </Suspense>
                            <Footer /> 
                       </HashRouter>
                    </div> 
                </AppContext.Provider> 
            </div>
            <div id="doc-to-print"></div>
        </>
    );
}

export default App;
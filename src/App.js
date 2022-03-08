import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/immutable/styles/Fonts.css';
import './components/immutable/styles/Themes.css';
import './components/immutable/styles/Commons.css';
import './components/alert/Alert.css';
import './App.css';

import { Container } from 'react-bootstrap';

import AppContext from './components/context/AppContext';

import FontContext from './components/context/FontContext';
import ThemeContext from './components/context/ThemeContext';
import PlayModeContext from './components/context/PlayModeContext';

import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import initDimensions from './components/immutable/initDimensions';

import Header from './components/immutable/Header';
import Home from './components/home/Home';
import LaProgrammation from './components/courses/prog/LaProgrammation';
import LesFormes from './components/courses/shapes/LesFormes';
import LeCercle from './components/courses/shapes/chapters/LeCercle';

import LeProduitEnCroix from './components/courses/cross-product/LeProduitEnCroix';
import CurriculumVitae from './components/cv/CurriculumVitae';

import Footer from './components/immutable/Footer';

function App() {

    const [font, setFont] = React.useState("Dragons");
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState("Brazil");

    const [component, setComponent] = React.useState( 
        process.env.NODE_ENV === 'development' ? 
            <CurriculumVitae /> 
                : <Home />
    );

    const appContext = {
        component: component,
        updateComponent: setComponent,
        font: font,
        updateFont: setFont,
        playMode: playMode,
        updatePlayMode: setPlayMode,
        theme: theme,
        updateTheme: setTheme
    }

    var pdfItems = pdfResourceBuilder();

    React.useEffect(() => {
        initDimensions();
    }, []);

    return ( 
        <div className = "App" >     
            <AppContext.Provider value = {appContext} >
                <div className = {`${theme} ${font}`} >
                    <Header 
                        pdfItems = {pdfItems} /> 
                    <Container className = {`RelativeContainer ${playMode ? "PlayMode" : ''}`} > 
                        {component} 
                    </Container> 
                    <Footer /> 
                </div> 
            </AppContext.Provider> 
        </div>
    );
}

export default App;
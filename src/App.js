import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/immutable/Fonts.css';
import './components/immutable/Themes.css';

import './components/general-content/styles/Basic.css';
import './components/alert/Alert.css';

import ThemeContext from './components/context/ThemeContext';
import FontContext from './components/context/FontContext';

import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';

import Header from './components/immutable/Header';
import Home from './components/home/Home';
import Footer from './components/immutable/Footer';

import CustomSpinner from './components/general-content/CustomSpinner';

function App() {

    const [theme, setTheme] = React.useState("Brazil");

    const themeContext = {
        theme: theme,
        updateTheme: setTheme
    };

    const [font, setFont] = React.useState("Dragons");

    const fontContext = {
        font: font,
        updateFont: setFont
    };

    const [component, setComponent] = React.useState( < Home /> );

    var pdfItems = pdfResourceBuilder();

    return ( 
        <div className = "App" >
            <ThemeContext.Provider value = { themeContext } >
            <FontContext.Provider value = { fontContext } >
                <div className = { `${theme} ${font}` } >
                <Header pdfItems = { pdfItems }
                    setComponent = { setComponent } /> 
                <Container className = "RelativeContainer" > 
                    {component} 
                </Container> 
                <Footer setComponent = { setComponent }/> 
                </div> 
            </FontContext.Provider> 
            </ThemeContext.Provider> 
        </div>
    );
}

export default App;
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/immutable/styles/Fonts.css';
import './components/immutable/styles/Themes.css';
import './components/immutable/styles/Commons.css';
import './components/alert/Alert.css';
import './App.css';

import { Container } from 'react-bootstrap';

import ThemeContext from './components/context/ThemeContext';
import FontContext from './components/context/FontContext';

import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import initDimensions from './components/immutable/initDimensions';

import Header from './components/immutable/Header';
import Home from './components/home/Home';
import LaProgrammation from './components/courses/prog/LaProgrammation';
import LesFormes from './components/courses/shapes/LesFormes';
import LeProduitEnCroix from './components/courses/cross-product/LeProduitEnCroix';

import Footer from './components/immutable/Footer';

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

    const [component, setComponent] = React.useState( 
        process.env.NODE_ENV === 'development' ? 
            <LeProduitEnCroix /> 
                : <Home />
    );

    var pdfItems = pdfResourceBuilder();

    React.useEffect(() => {
        initDimensions();
    }, []);

    return ( 
        <div className = "App" >
            <ThemeContext.Provider value = {themeContext} >
            <FontContext.Provider value = {fontContext} >
                <div className = {`${theme} ${font}`} >
                    <Header 
                        pdfItems = {pdfItems}
                        setComponent = {setComponent} /> 
                    <Container className = "RelativeContainer" > 
                        {component} 
                    </Container> 
                    <Footer 
                        setComponent = {setComponent} /> 
                </div> 
            </FontContext.Provider> 
            </ThemeContext.Provider> 
        </div>
    );
}

export default App;
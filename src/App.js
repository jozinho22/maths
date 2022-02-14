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
import { processNavBarTouch } from './components/immutable/navbarProcesses';

import Header from './components/immutable/Header';
import Home from './components/home/Home';
import ProgrammationBasics from './components/prog-basics/ProgrammationBasics'

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

    const [component, setComponent] = React.useState( <ProgrammationBasics /> );

    var pdfItems = pdfResourceBuilder();

    const [dimensions, setDimensions] = React.useState(
        [{className: 'CustomHeader', height: ''}, {className: 'CustomFooter', height: ''}]
    );

    React.useEffect(() => {
        processNavBarTouch(dimensions);
    }, [dimensions]);

    return ( 
        <div className = "App" >
            <ThemeContext.Provider value = {themeContext} >
            <FontContext.Provider value = {fontContext} >
                <div className = {`${theme} ${font}`} >
                    <Header 
                        pdfItems = {pdfItems}
                        setComponent = {setComponent}
                        setDimensions = {setDimensions} /> 
                    <Container className = "RelativeContainer" > 
                        {component} 
                    </Container> 
                    <Footer 
                        setComponent = {setComponent}/> 
                </div> 
            </FontContext.Provider> 
            </ThemeContext.Provider> 
        </div>
    );
}

export default App;
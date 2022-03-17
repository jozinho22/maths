import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/immutable/styles/Fonts.css';
import './components/immutable/styles/Themes.css';
import './components/immutable/styles/Commons.css';
import './components/alert/Alert.css';
import './App.css';

import { Container } from 'react-bootstrap';
import AppContext from './components/context/AppContext';
import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';
import SizeContext from './components/context/SizeContext';

import useWindowSize from './components/immutable/dimensions/useWindowSize';
import updateDimensions from './components/immutable/dimensions/updateDimensions';
import Header from './components/immutable/Header';
import Home from './components/home/Home';
import Footer from './components/immutable/Footer';
/* import LeNombreDOr from './components/courses/nbOr/LeNombreDOr';
 */
function App() {

    const [font, setFont] = React.useState("Dragons");
    const [playMode, setPlayMode] = React.useState(false);
    const [theme, setTheme] = React.useState("Brazil");

    const [component, setComponent] = React.useState( 
        process.env.NODE_ENV === 'development' ? 
            <Home /> 
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

    const [width, height] = useWindowSize();
    const sizeContext = [width, height];

    React.useLayoutEffect(() => {
        updateDimensions([width, height]);
    }, [width, height]);

    return ( 
        <div className = "App" >     
            <AppContext.Provider value = {appContext} >
            <SizeContext.Provider value ={sizeContext} >
                <div className = {`${theme} ${font}`} >
                    <Header 
                        pdfItems = {pdfItems} /> 
                    <Container className = {`RelativeContainer ${playMode ? "PlayMode" : ''}`} > 
                        {component} 
                    </Container> 
                    <Footer /> 
                </div> 
            </SizeContext.Provider>
            </AppContext.Provider> 
        </div>
    );
}

export default App;
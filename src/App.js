import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/general-content/Basic.css';
import './components/general-content/Canevas.css';
import './components/general-content/Alert.css';

import Header from './components/general-content/Header';
import Home from './components/home/Home';
import TablesTest from './components/tables/TablesTest';
import UsualFunctions from './components/usual-functions/UsualFunctions';

import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import PDFViewerHome from './components/pdf-viewer/PDFViewerHome';
import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';

import Footer from './components/general-content/Footer';
import Error from  './components/general-content/Error';
import ThemeContext from './components/context/ThemeContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {

  const [theme, setTheme] = React.useState("Brazil");

  const themeContext = {
    theme: theme,
    updateTheme: setTheme
  };

  var pdfInfos = pdfResourceBuilder();

/*   var pdfCoursesInfos = [];
  var pdfAlbumsInfos = [];

  for(var k = 0; k < pdfInfos.length; k++) {
      console.log(pdfInfos[k].relativePath)
      if(pdfInfos[k].filePath.startsWith('./courses')) {
        pdfCoursesInfos.push(pdfInfos[k]);
      } else if(pdfInfos[k].filePath.startsWith('./albums')) {
        pdfAlbumsInfos.push(pdfInfos[k]);
      }
  } */

  return (
        <div className="App">
            <ThemeContext.Provider value={themeContext} >
                <div className={theme}>
                    <BrowserRouter>

                        <Header 
                            /* pdfAlbumsInfos={pdfAlbumsInfos}
                            pdfCoursesInfos={pdfCoursesInfos}  */
                            pdfInfos={pdfInfos} />
                        <Container className="RelativeContainer">
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/tables-test" element={<TablesTest />} />
                                <Route path="/usual-functions" element={<UsualFunctions />} />
                                <Route path="/pdf-viewer" element={<PDFViewerHome />} />
                                <Route 
                                    path="/pdf-viewer/:relativePath" 
                                    element={<PDFViewerPage pdfInfos={pdfInfos} />} />
                                <Route path="*" element={<Error />} />
                            </Routes> 
                        </Container>
                        <Footer />

                      </BrowserRouter>
                  </div>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;

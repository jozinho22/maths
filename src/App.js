import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/general-content/Basic.css';
import './components/general-content/Canevas.css';
import './components/general-content/Alert.css';

import Header from './components/general-content/Header';
import Home from './components/home/Home';
import TablesTest from './components/tables/TablesTest';
import Charts from './components/usual-functions/UsualFunctions';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import PDFViewerHome from './components/pdf-viewer/PDFViewerHome';
import pdfCoursesBuilder from './components/pdf-viewer/pdfCoursesBuilder';
import pdfAlbumsBuilder from './components/pdf-viewer/pdfAlbumsBuilder';

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

  var pdfCoursesInfos = pdfCoursesBuilder();
  console.log(pdfCoursesInfos)
  var pdfAlbumsInfos = pdfAlbumsBuilder();
  console.log(pdfAlbumsInfos)

  return (
        <div className="App">
            <ThemeContext.Provider value={themeContext} >
                <div className={theme}>
                    <BrowserRouter>

                        <Header 
                            pdfCoursesInfos={pdfCoursesInfos}
                            pdfAlbumsInfos={pdfAlbumsInfos} />
                        <Container className="RelativeContainer">
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/tables-test" element={<TablesTest />} />
                                <Route path="/charts" element={<Charts />} />
                                <Route path="/pdf-viewer" element={<PDFViewerHome />} />
                                <Route 
                                    path="/pdf-viewer/:relativePath" 
                                    element={<PDFViewerPage pdfInfos={pdfAlbumsInfos} />} />
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

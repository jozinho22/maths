import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/general-content/Basic.css';

import Header from './components/general-content/Header';
import Home from './components/home/Home';
import TablesTest from './components/tables/TablesTest';
import Charts from './components/charts/Charts';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import PDFViewerHome from './components/pdf-viewer/PDFViewerHome';
import pdfViewerPagesBuilder from './components/pdf-viewer/pdfViewerPagesBuilder';
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

  var pdfInfos = pdfViewerPagesBuilder();
  console.log(pdfInfos)

  return (
        <div className="App">
            <ThemeContext.Provider value={themeContext} >
                <div className={theme}>
                    <BrowserRouter>

                        <Header pdfInfos={pdfInfos}/>
                        <Container className="RelativeContainer">
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/tables-test" element={<TablesTest />} />
                                <Route path="/charts" element={<Charts />} />
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

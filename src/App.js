import React from 'react';
import './App.css';

import Header from './components/general-content/Header';
import Home from './components/home/Home';
import TablesTest from './components/tables/TablesTest';
import PDFPageViewer from './components/pdf-viewer/PDFPageViewer';
import PDFViewerHome from './components/pdf-viewer/PDFViewerHome';

import Footer from './components/general-content/Footer';
import Error from  './components/general-content/Error';
import ThemeContext from './components/context/ThemeContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [theme, setTheme] = React.useState("Brazil");

  const themeContext = {
    theme: theme,
    updateTheme: setTheme
  };

  return (
        <div className="App">
            <ThemeContext.Provider value={themeContext} >
                <div className={theme}>
                    <BrowserRouter>

                        <Header />

                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/tables-test" element={<TablesTest />} />
                            <Route path="/pdf-viewer" element={<PDFViewerHome />} />
                            <Route path="/pdf-viewer/nbOr" element={<PDFPageViewer />} />
                            <Route path="*" element={<Error />} />
                        </Routes> 

                        <Footer />

                      </BrowserRouter>
                  </div>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;

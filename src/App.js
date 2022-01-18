import React from 'react';
import './App.css';

import Header from './components/general-content/Header';
import Home from './components/home/Home';
import TablesTest from './components/tables/TablesTest';
import TablesTestResults from './components/tables/TablesTestResults.jsx';

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
                                  <Route path="/test" element={<TablesTest />} />
                                  <Route path="/test-results" element={<TablesTestResults />} />
                                  <Route path="/error" element={<Error />} />
                              </Routes> 
                              <Home />
                          <Footer />
                      </BrowserRouter>
                  </div>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;

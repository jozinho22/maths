import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ThemeContext from './components/context/ThemeContext';
import pdfResourceBuilder from './components/pdf-viewer/pdfResourceBuilder';

import Header from './components/general-content/Header';
import AppManager from './components/AppManager';
import Home from './components/home/Home';
import Footer from './components/general-content/Footer';
import Error from  './components/general-content/Error';

function App() {

  const [theme, setTheme] = React.useState("Brazil");

  const themeContext = {
    theme: theme,
    updateTheme: setTheme
  };

  const [component, setComponent] = React.useState(<Home />);

  var pdfItems = pdfResourceBuilder();

  return (
        <div className="App">
            <ThemeContext.Provider value={themeContext} >
                <div className={theme}>
                    <Header 
                        pdfItems={pdfItems}
                        setComponent={setComponent} />
                    <AppManager
                        component={component}
                        setComponent={setComponent} />
                    <Footer 
                        setComponent={setComponent} />
                </div>
          </ThemeContext.Provider>
      </div>
  );
}

export default App;

function urlsResourceBuilder() {

    var pdfItems = [];
    var i = 0;


    var desmosCalculator = {
      id: i++,
      url: 'https://www.desmos.com/calculator/',
      title: 'Calculatrice scientifique',
      desc: 'Une calculatrice graphique avec de nombreuses fonctionnalités (fonctions, séries, dérivées, intégrales, statistiques...etc.).'
    }
    var geoGebra = {
      id: i++,
      url: 'https://www.geogebra.org/graphing?lang=fr',
      title: 'Calculatrice graphique',
      desc: 'Une calculatrice graphique facile à prendre en main.'
    }
    var geoGebra3D = {
      id: i++,
      url: 'https://www.geogebra.org/graphing?lang=fr',
      title: 'Calculatrice graphique en 3D',
      desc: 'Une calculatrice graphique en trois dimensions.'
    }
    var derivCalculator = {
      id: i++,
      url: 'https://www.derivative-calculator.net/',
      title: 'Calculateur de dérivées',
      desc: 'Une calculatrice de dérivées avec chaque étape du calcul.'
    }
    var integralCalc = {
      id: i++,
      url: 'https://www.integral-calculator.com/',
      title: 'Calculateur d\'intégrales',
      desc: 'Un calculateur d\'intégrales pas à pas.'
    }
    var savoirSansFrontieres = {
      id: i++,
      url: 'http://www.savoir-sans-frontieres.com/',
      title: 'Savoir sans frontières',
      desc: 'Le site de Jean-Pierre Petit, contenant toutes son oeuvre : ses BDs, ses publications et notamment son modèle Janus.'
    }
    var gerardVillemin = {
      id: i++,
      url: 'http://villemin.gerard.free.fr/',
      title: 'Le site de Gérard Villemin',
      desc: 'Le site Gérard Villemin contenant de nombreuses publications, notamment en mathématiques, en sciences, ainsi que des énigmes et des mystères mathématiques.'
    }
    var mathLinux = {
      id: i++,
      url: 'https://www.math-linux.com/mathematiques/',
      title: 'Math Linux',
      desc: 'Un site dédié à Linux, au code et aux mathématiques.'
    }
    var sujetsBrevetsMaths = {
      id: i++,
      url: 'https://www.apmep.fr/Annales-du-Brevet-des-colleges',
      title: 'Sujets de brevet de maths',
      desc: 'APMEP - Tous les sujets de brevets de maths en métropole et outre-mer.'
    }
      var sujetsBacMaths = {
      id: i++,
      url: 'https://www.apmep.fr/Annales-Terminale-Generale',
      title: 'Sujets de bac de maths',
      desc: 'APMEP - Tous les sujets de bac de maths en métropole et outre-mer.'
    }
    
    pdfItems.push(
        desmosCalculator,
        geoGebra,
        geoGebra3D,
        derivCalculator,
        integralCalc,
        savoirSansFrontieres,
        gerardVillemin,
        mathLinux,
        sujetsBrevetsMaths,
        sujetsBacMaths
      );

    return pdfItems;

}

export default urlsResourceBuilder;
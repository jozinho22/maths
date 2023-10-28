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
    var savoirSansFrontieres = {
      id: i++,
      url: 'http://www.savoir-sans-frontieres.com/',
      title: 'Savoir sans frontières',
      desc: 'Le site de Jean-Pierre Petit, contenant toutes son oeuvre : ses BDs, ses publications et notamment son modèle Janus.'
    }
    var mathStackExchange = {
      id: i++,
      url: 'https://math.stackexchange.com/',
      title: 'Un site de questions réponses',
      desc: 'Ce site est affilé à la plate-forme Stack Overflow, initialement un site de questions réponses dans le domaine de l\'informatique.'
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
      desc: 'Un site dédié à Linux, au code et aux mathématiques. Il comprend beaucoup de démonstrations mathématiques.'
    }
    var latex = {
      id: i++,
      url: "https://www.overleaf.com/learn",
      title: 'Documentation du langage Latex',
      desc: 'Latex : écriture de documents avec les symboles mathématiques.'
    }
    
    pdfItems.push(
        desmosCalculator,
        geoGebra,
        geoGebra3D,
        derivCalculator,
        integralCalc,
        sujetsBrevetsMaths,
        sujetsBacMaths,
        savoirSansFrontieres,
        mathStackExchange,
        gerardVillemin,
        mathLinux,
        latex
      );

    return pdfItems;

}

export default urlsResourceBuilder;
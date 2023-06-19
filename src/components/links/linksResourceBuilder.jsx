function urlsResourceBuilder() {

    var pdfItems = [];
    var i = 0;

    var graineDeSens = {
      id: i++,
      url: 'https://www.bretagne-grainedesens.bzh/',
      title: 'L\'école démocratique Graine de Sens',
      desc: 'L\'école démocratique de Brocéliande (Graine de sens) ; une école pas comme les autres où sont mélangés apprentissage traditionnels et activités en tout genre (musique, arts, sport, jeux). La particularité de ce modèle d\'école est que les enfants participent à la vie de l\'école en assistant aux conseils et en votant notamment.'
    } 
    var noesis = {
      id: i++,
      url: 'https://ecolenoesis.org/accueil/bienvenue',
      title: 'L\'école démocratique Noésis',
      desc: 'L\'école démocratique du sud de Rennes (Noésis) ; une école basée sur le même modèle que Graine de Sens ci-dessus.'
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
    var depannOnLine = {
      id: i++,
      url: 'https://www.depannonline.xyz/',
      title: 'Dépannage informatique à distance',
      desc: 'Un dépannage à distance pour tout problème.'
    }
    var sujetsBrevetsMath = {
      id: i++,
      url: 'https://www.apmep.fr/-Brevet-344-sujets-tous-corriges-',
      title: 'Sujets de brevets de maths',
      desc: 'APMEP - Tous les sujets de brevets de maths en métropole et outre-mer.'
    }
    
    pdfItems.push(
        graineDeSens,
        noesis,
        integralCalc,
        savoirSansFrontieres,
        gerardVillemin,
        mathLinux,
        sujetsBrevetsMath,
        depannOnLine
      );

    return pdfItems;

}

export default urlsResourceBuilder;
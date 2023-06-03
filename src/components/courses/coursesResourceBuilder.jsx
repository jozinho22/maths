import getCrossProductsChapters from './cross-product/getCrossProductsChapters';
import getPowersChapters from './powers/getPowersChapters';
import getEquationsFirstDegreeChapters from './equations-first-degree/getEquationsFirstDegreeChapters';
import getEquationsSecondDegreeChapters from './equations-second-degree/getEquationsSecondDegreeChapters';
import getPythagoreChapters from './pythagore/getPythagoreChapters';
import getPiChapters from './pi/getChapters';
import getGoldenRatioChapters from './nbOr/getGoldenRatioChapters';
import getTrigoChapters from './trigo/getTrigoChapters';
import getShapesChapters from './shapes/getShapesChapters';
import getUsualFunctionsChapters from './usual-functions/getUsualFunctionsChapters';

function coursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var crossProduct = {
      id: i++,
      title: 'Le produit en croix',
      hiddenTitle: 'Cours sur le produit en croix',
      metaContent: "Cours sur le produit en croix : un cours très important pour la vie de tous les jours",
      relativePath: 'le-produit-en-croix',
      chapters: getCrossProductsChapters()
    }
    var equationsFirstDegree = {
      id: i++,
      title: 'Les équations du 1er degré',
      hiddenTitle: 'Cours sur les équations du 1er degré',
      metaContent: "Cours sur les équations du premier degré : apprendre à résoudre les équations et inéquations de base et voir l'aspect de ses fonctions dans un repère",
      relativePath: 'les-equations-du-premier-degre',
      chapters: getEquationsFirstDegreeChapters()
    }
    var equationsSecondDegree = {
      id: i++,
      title: 'Les équations du 2nd degré',
      hiddenTitle: 'Cours sur les équations du 2nd degré',
      metaContent: "Cours sur les équations du second degré : apprendre à résoudre les équations et voir l'aspect de ses fonctions dans un repère",
      relativePath: 'les-equations-du-second-degre',
      chapters: getEquationsSecondDegreeChapters()
    }
    var powers = {
      id: i++,
      title: 'Les puissances',
      hiddenTitle: 'Cours sur les puissances',
      metaContent: "Cours sur les puissances : comprendre les différentes (simples, composées, inverses)",
      relativePath: 'les-puissances',
      chapters: getPowersChapters()
    }
    var pythagore = {
      id: i++,
      title: 'Le théorème de Pythagore',
      hiddenTitle: 'Cours sur le théorème de Pythagore',
      metaContent: "Le théorème de Pythagore : explications, démonstrations, réciproque et exemples",
      relativePath: 'le-theoreme-de-pythagore',
      chapters: getPythagoreChapters()
    }
    var pi = {
      id: i++,
      title: 'Le nombre Pi',
      hiddenTitle: 'Cours sur le nombre Pi',
      metaContent: "Le nombre Pi : ses mystères et une manière de le calculer géométriquement",
      relativePath: 'le-nombre-pi',
      chapters: getPiChapters()
    }
    var nbOr = {
      id: i++,
      title: 'Le nombre d\'or (Phi)',
      hiddenTitle: 'Cours sur le nombre d\'or',
      metaContent: "Le nombre Phi : son histoire, son calcul et son lien avec la suite de Fibonacci",
      relativePath: 'le-nombre-d-or',
      chapters: getGoldenRatioChapters()
    }
    var trigo = {
      id: i++,
      title: 'La trigonométrie',
      hiddenTitle: 'Cours sur la trigonométrie',
      metaContent: "La trigonométrie : explications et toutes les formules associées",
      relativePath: 'la-trigonometrie',
      chapters: getTrigoChapters()
    }
    var shapes = {
      id: i++,
      title: 'Les formes',
      hiddenTitle: 'Cours sur les formes géométriques',
      metaContent: "Les formes : les formes usuelles (carré, cube, cercle, triangle...etc) et le calcul des aires et volumes",
      relativePath: 'les-formes',
      chapters: getShapesChapters()
    }
    var usualFunctions = {
      id: i++,
      title: 'Les fonctions usuelles',
      hiddenTitle: 'Cours sur les fonctions usuelles',
      metaContent: "Les fonctions usuelles : les fonctions usuelles (carrée, cube, racine carrée, exponentielle, cosinus, sinus...etc) et leur représentation sur un repère",
      relativePath: 'les-fonctions-usuelles',
      chapters: getUsualFunctionsChapters()
    }

    coursesItems.push(
        crossProduct,
        equationsFirstDegree,
        equationsSecondDegree,
        powers,
        pythagore,
        pi, 
        nbOr,
        trigo,
        shapes,
        usualFunctions
    );

    return coursesItems;

}

export default coursesResourceBuilder;
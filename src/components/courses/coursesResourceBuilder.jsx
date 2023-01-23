import getCrossProductsChapters from './cross-product/getCrossProductsChapters';
import getPowersChapters from './powers/getPowersChapters';
import getPythagoreChapters from './pythagore/getPythagoreChapters';
import getPiChapters from './pi/getChapters';
import getGoldenRatioChapters from './nbOr/getGoldenRatioChapters';
import getTrigoChapters from './trigo/getTrigoChapters';
import getShapesChapters from './shapes/getShapesChapters';

function coursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var crossProduct = {
      id: i++,
      title: 'Le produit en croix',
      metaContent: "Cours sur le produit en croix : un cours très important pour la vie de tous les jours",
      relativePath: 'le-produit-en-croix',
      chapters: getCrossProductsChapters()
    }
    var powers = {
      id: i++,
      title: 'Les puissances',
      metaContent: "Cours sur les puissances : comprendre les différentes (simples, composées, inverses)",
      relativePath: 'les-puissances',
      chapters: getPowersChapters()
    }
    var pythagore = {
      id: i++,
      title: 'Le théorème de Pythagore',
      metaContent: "Le théorème de Pythagore : explications, démonstrations, réciproque et exemples",
      relativePath: 'le-theoreme-de-pythagore',
      chapters: getPythagoreChapters()
    }
    var pi = {
      id: i++,
      title: 'Le nombre π',
      metaContent: "Le nombre π : ses mystères et une manière de le calculer géométriquement",
      relativePath: 'le-nombre-pi',
      chapters: getPiChapters()
    }
    var nbOr = {
      id: i++,
      title: 'Le nombre d\'or (φ)',
      metaContent: "Le nombre φ : son histoire, son calcul et son lien avec la suite de Fibonacci",
      relativePath: 'le-nombre-d-or',
      chapters: getGoldenRatioChapters()
    }
    var trigo = {
      id: i++,
      title: 'La trigonométrie',
      metaContent: "La trigonométrie : explications et toutes les formules associées",
      relativePath: 'la-trigonometrie',
      chapters: getTrigoChapters()
    }
    var shapes = {
      id: i++,
      title: 'Les formes',
      metaContent: "Les formes : les différentes formes usuelles (carré, cube, cercle, triangle...etc) et le calcul des aires et volumes",
      relativePath: 'les-formes',
      chapters: getShapesChapters()
    }

    coursesItems.push(
        crossProduct,
        powers,
        pythagore,
        pi, 
        nbOr,
        trigo,
        shapes
      );

    return coursesItems;

}

export default coursesResourceBuilder;
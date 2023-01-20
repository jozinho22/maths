import LeNombrePi from './pi/LeNombrePi';
import LeNombreDOr from './nbOr/LeNombreDOr';
import LaTrigonometrie from './trigo/LaTrigonometrie';
import LesPuissances from './powers/LesPuissances';
import LesFormes from './shapes/LesFormes';
import LesFonctionsUsuelles from './usual-functions/LesFonctionsUsuelles';
import LeProduitEnCroix from './cross-product/LeProduitEnCroix';
import LeTheoremeDePythagore from './pythagore/LeTheoremeDePythagore';

function coursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var crossProduct = {
      id: i++,
      title: 'Produit en croix',
      metaContent: "Cours sur le produit en croix : un cours très important pour la vie de tous les jours",
      relativePath: 'le-produit-en-croix',
      component: <LeProduitEnCroix />
    }
    var powers = {
      id: i++,
      title: 'Puissances',
      metaContent: "Cours sur les puissances : comprendre les différentes (simples, composées, inverses)",
      relativePath: 'les-puissances',
      component: <LesPuissances />
    }
    var pythagore = {
      id: i++,
      title: 'Théorème de Pythagore',
      metaContent: "Le théorème de Pythagore : explications, démonstrations, réciproque et exemples",
      relativePath: 'le-theoreme-de-pythagore',
      component: <LeTheoremeDePythagore />
    }
    var pi = {
      id: i++,
      title: 'Nombre π',
      metaContent: "Le nombre π : ses mystères et une manière de le calculer géométriquement",
      relativePath: 'le-nombre-pi',
      component: <LeNombrePi />
    }
    var nbOr = {
      id: i++,
      title: 'Nombre d\'or (φ)',
      metaContent: "Le nombre φ : son histoire, son calcul et son lien avec la suite de Fibonacci",
      relativePath: 'le-nombre-d-or',
      component: <LeNombreDOr />
    }
    var trigo = {
      id: i++,
      title: 'Trigonométrie',
      metaContent: "La trigonométrie : explications et toutes les formules associées",
      relativePath: 'la-trigonometrie',
      component: <LaTrigonometrie />
    }
    var shapes = {
      id: i++,
      title: 'Formes',
      metaContent: "Les formes : les différentes formes usuelles (carré, cube, cercle, triangle...etc) et le calcul des aires et volumes",
      relativePath: 'les-formes',
      component: <LesFormes />
    }
    var usualFunctions = {
      id: i++,
      title: 'Fonctions usuelles',
      metaContent: "Les fonctions usuelles : les différentes fonctions usuelles (carré, cube, sinus, cosinus, exp...etc) et leur réprésention sur un axe ainsi que leur caractéritiques",
      relativePath: 'les-fonctions-usuelles',
      component: <LesFonctionsUsuelles />
    }
    
    coursesItems.push(
        crossProduct,
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
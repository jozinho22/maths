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
      relativePath: '/cours/le-produit-en-croix',
      component: <LeProduitEnCroix />
    }
    var powers = {
      id: i++,
      title: 'Puissances',
      relativePath: '/cours/les-puissances',
      component: <LesPuissances />
    }
    var pythagore = {
      id: i++,
      title: 'Théorème de Pythagore',
      relativePath: '/cours/le-theoreme-de-pythagore',
      component: <LeTheoremeDePythagore />
    }
    var pi = {
      id: i++,
      title: 'Nombre π',
      relativePath: '/cours/le-nombre-pi',
      component: <LeNombrePi />
    }
    var nbOr = {
      id: i++,
      title: 'Nombre d\'or (φ)',
      relativePath: '/cours/le-nombre-d-or',
      component: <LeNombreDOr />
    }
    var trigo = {
      id: i++,
      title: 'Trigonométrie',
      relativePath: '/cours/la-trigonometrie',
      component: <LaTrigonometrie />
    }
    var shapes = {
      id: i++,
      title: 'Formes',
      relativePath: '/cours/les-formes',
      component: <LesFormes />
    }
    var usualFunctions = {
      id: i++,
      title: 'Fonctions usuelles',
      relativePath: '/cours/les-fonctions-usuelles',
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
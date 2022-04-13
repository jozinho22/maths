import LeNombrePi from './pi/LeNombrePi';
import LeNombreDOr from './nbOr/LeNombreDOr';
import LaTrigonometrie from './trigo/LaTrigonometrie';
import LesPuissances from './powers/LesPuissances';
import LesFormes from './shapes/LesFormes';
import LesFonctionsUsuelles from './usual-functions/LesFonctionsUsuelles';
import LeProduitEnCroix from './cross-product/LeProduitEnCroix';
import LeTheoremeDePythagore from './pythagore/LeTheoremeDePythagore';

import CoursesLinks from './CoursesLinks';

function coursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var crossProduct = {
      id: i++,
      title: 'Produit en croix',
      relativePath: CoursesLinks.PRODUIT_EN_CROIX,
      component: <LeProduitEnCroix />
    }
    var powers = {
      id: i++,
      title: 'Puissances',
      relativePath: CoursesLinks.PUISSANCES,
      component: <LesPuissances />
    }
    var pythagore = {
      id: i++,
      title: 'Théorème de Pythagore',
      relativePath: CoursesLinks.PYTHAGORE,
      component: <LeTheoremeDePythagore />
    }
    var pi = {
      id: i++,
      title: 'Nombre π',
      relativePath: CoursesLinks.PI,
      component: <LeNombrePi />
    }
    var nbOr = {
      id: i++,
      title: 'Nombre d\'or (φ)',
      relativePath: CoursesLinks.NOMBRE_OR,
      component: <LeNombreDOr />
    }
    var trigo = {
      id: i++,
      title: 'Trigonométrie',
      relativePath: CoursesLinks.TRIGO,
      component: <LaTrigonometrie />
    }
    var shapes = {
      id: i++,
      title: 'Formes',
      relativePath: CoursesLinks.FORMES,
      component: <LesFormes />
    }
    var usualFunctions = {
      id: i++,
      title: 'Fonctions usuelles',
      relativePath: CoursesLinks.FONCTIONS,
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
import getElementaryCalculusChapters from './elementary-calculus/getElementaryCalculusChapters';
import getPowersChapters from './powers/getPowersChapters';
import getEquationsFirstDegreeChapters from './equations-first-degree/getEquationsFirstDegreeChapters';
import getEquationsSecondDegreeChapters from './equations-second-degree/getEquationsSecondDegreeChapters';
import getDerivativeChapters from './derivatives/getDerivativeChapters';
import getThalesChapters from './thales/getThalesChapters';
import getPythagoreChapters from './pythagore/getPythagoreChapters';
import getPiChapters from './pi/getChapters';
import getGoldenRatioChapters from './nbOr/getGoldenRatioChapters';
import getTrigoChapters from './trigo/getTrigoChapters';
import getShapesChapters from './shapes/getShapesChapters';
import getUsualFunctionsChapters from './usual-functions/getUsualFunctionsChapters';

import CoursesConstants from './helpers/CoursesConstants';

function coursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var elementaryCalculus = {
      id: i++,
      title: 'Calcul élémentaire',
      metaContent: "Calcul élémentaire : les opérations de base, le produit en croix, les fractions.",
      relativePath: CoursesConstants.ELEM_CALCULUS,
      chapters: getElementaryCalculusChapters()
    }
    var equationsFirstDegree = {
      id: i++,
      title: 'Les équations du premier degré',
      metaContent: "Cours sur les équations du premier degré : apprendre à résoudre les équations et inéquations de base et voir l'aspect de ses fonctions dans un repère",
      relativePath: CoursesConstants.EQ_1_DEG,
      chapters: getEquationsFirstDegreeChapters()
    }
    var equationsSecondDegree = {
      id: i++,
      title: 'Les équations du deuxième degré',
      metaContent: "Cours sur les équations du deuxième degré : apprendre à résoudre les équations et voir l'aspect de ses fonctions dans un repère",
      relativePath: CoursesConstants.EQ_2_DEG,
      chapters: getEquationsSecondDegreeChapters()
    }
    var derivee = {
      id: i++,
      title: 'La dérivée',
      metaContent: "La dérivée : construction pas-à-pas, exemple et démonstrations",
      relativePath: CoursesConstants.DERIVEE,
      chapters: getDerivativeChapters()
    }
    var powers = {
      id: i++,
      title: 'Les puissances',
      metaContent: "Cours sur les puissances : comprendre les différentes (simples, composées, inverses)",
      relativePath: CoursesConstants.PUISSANCES,
      chapters: getPowersChapters()
    }
    var pythagore = {
      id: i++,
      title: 'Le théorème de Pythagore',
      metaContent: "Le théorème de Pythagore : explications, démonstrations, réciproque et exemples",
      relativePath: CoursesConstants.PYTHAGORE,
      chapters: getPythagoreChapters()
    }
    var thales = {
      id: i++,
      title: 'Le théorème de Thalès',
      metaContent: "Le théorème de Thalès : explications, démonstration.",
      relativePath: CoursesConstants.THALES,
      chapters: getThalesChapters()
    }
    var pi = {
      id: i++,
      title: 'Le nombre Pi',
      metaContent: "Le nombre Pi : ses mystères et une manière de le calculer géométriquement",
      relativePath: CoursesConstants.PI,
      chapters: getPiChapters()
    }
    var nbOr = {
      id: i++,
      title: 'Le nombre d\'or (Phi)',
      metaContent: "Le nombre Phi : son histoire, son calcul et son lien avec la suite de Fibonacci",
      relativePath: CoursesConstants.NB_OR,
      chapters: getGoldenRatioChapters()
    }
    var trigo = {
      id: i++,
      title: 'La trigonométrie',
      metaContent: "La trigonométrie : explications et toutes les formules associées",
      relativePath: CoursesConstants.TRIGO,
      chapters: getTrigoChapters()
    }
    var shapes = {
      id: i++,
      title: 'Les formes',
      metaContent: "Les formes : les formes usuelles (carré, cube, cercle, triangle...etc) et le calcul des aires et volumes",
      relativePath: CoursesConstants.FORMES,
      chapters: getShapesChapters()
    }
    var usualFunctions = {
      id: i++,
      title: 'Les fonctions usuelles',
      metaContent: "Les fonctions usuelles : les fonctions usuelles (carrée, cube, racine carrée, exponentielle, cosinus, sinus...etc) et leur représentation sur un repère",
      relativePath: CoursesConstants.FONCTIONS_USUELLES,
      chapters: getUsualFunctionsChapters()
    }

    coursesItems.push(
        elementaryCalculus,
        equationsFirstDegree,
        equationsSecondDegree,
        derivee,
        powers,
        pythagore,
        thales,
        pi, 
        nbOr,
        trigo,
        shapes,
        usualFunctions
    );

    return coursesItems;

}

export default coursesResourceBuilder;
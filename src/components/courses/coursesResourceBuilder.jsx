import getElementaryCalculusChapters from './elementary-calculus/getElementaryCalculusChapters';
import getPowersChapters from './powers/getPowersChapters';
import getEquationsFirstDegreeChapters from './equations-first-degree/getEquationsFirstDegreeChapters';
import getEquationsSecondDegreeChapters from './equations-second-degree/getEquationsSecondDegreeChapters';
import getThalesChapters from './thales/getThalesChapters';
import getPythagoreChapters from './pythagore/getPythagoreChapters';
import getDerivationChapters from './derivatives/getDerivationChapters';
import getPrimitivesIntegrationChapters from './primitives-integration/getPrimitivesIntegrationChapters';
import getPiChapters from './pi/getChapters';
import getGoldenRatioChapters from './nbOr/getGoldenRatioChapters';
import getTrigoChapters from './trigo/getTrigoChapters';
import getSequencesChapters from './sequences/getSequencesChapters';
import getUsualFunctionsChapters from './usual-functions/getUsualFunctionsChapters';

import CoursesConstants from './helpers/CoursesConstants';
import geometryCoursesResourceBuilder from './geometry/geometryCoursesResourceBuilder';

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
    var usualFunctions = {
      id: i++,
      title: 'Les fonctions usuelles',
      metaContent: "Les fonctions usuelles : les fonctions usuelles (carrée, cube, racine carrée, exponentielle, cosinus, sinus...etc) et leur représentation sur un repère",
      relativePath: CoursesConstants.FONCTIONS_USUELLES,
      chapters: getUsualFunctionsChapters()
    }
    var trigo = {
      id: i++,
      title: 'La trigonométrie',
      metaContent: "La trigonométrie : explications et toutes les formules associées",
      relativePath: CoursesConstants.TRIGO,
      chapters: getTrigoChapters()
    }
    var derivation = {
      id: i++,
      title: 'La dérivation',
      metaContent: "La dérivation : définition, construction pas-à-pas, exemples, démonstrations et formules",
      relativePath: CoursesConstants.DERIVATION,
      chapters: getDerivationChapters()
    }
    var primInt = {
      id: i++,
      title: 'Les primitives et l\'intégration',
      metaContent: "Les primitives et l\'intégration : définitions, démonstrations et formules",
      relativePath: CoursesConstants.PRIMITIVES_INTEGRATION,
      chapters: getPrimitivesIntegrationChapters()
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

    var seq = {
      id: i++,
      title: 'Les suites numériques',
      metaContent: "Les suites numériques : variations, suites arithmétiques, suites géométriques.",
      relativePath: CoursesConstants.SEQUENCES,
      chapters: getSequencesChapters()
    }
    var geo = {
      id: i++,
      title: 'La géométrie',
      metaContent: "Les géométrie : les formes usuelles (carré, cube, cercle, triangle...etc) et le calcul des aires et volumes",
      relativePath: CoursesConstants.GEOMETRY,
      underChapters: true,
      chapters: geometryCoursesResourceBuilder()
    }

    coursesItems.push(
        elementaryCalculus,
        equationsFirstDegree,
        equationsSecondDegree,
        powers,
        pythagore,
        thales,
        usualFunctions,
        trigo,
        derivation,
        primInt,
        pi, 
        nbOr
        /* geo */
    );

    return coursesItems;

}

export default coursesResourceBuilder;
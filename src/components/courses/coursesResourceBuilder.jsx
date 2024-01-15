import getSymbolsChapters from './symbols/getSymbolsChapters';

import getElementaryCalculusChapters from './elementary-calculus/getElementaryCalculusChapters';
import getPowersChapters from './powers/getPowersChapters';
import getEquationsFirstDegreeChapters from './equations-first-degree/getEquationsFirstDegreeChapters';
import getEquationsSecondDegreeChapters from './equations-second-degree/getEquationsSecondDegreeChapters';
import getThalesChapters from './thales/getThalesChapters';
import getPythagoreChapters from './pythagore/getPythagoreChapters';
import getDerivationChapters from './derivation/getDerivationChapters';
import getPrimitivesIntegrationChapters from './primitives-integration/getPrimitivesIntegrationChapters';
import getPiChapters from './pi/getChapters';
import getGoldenRatioChapters from './nbOr/getGoldenRatioChapters';
import getTrigoChapters from './trigo/getTrigoChapters';
import getSequencesChapters from './sequences/getSequencesChapters';
import getUsualFunctionsChapters from './usual-functions/getUsualFunctionsChapters';

import CoursesConstants from './helpers/CoursesConstants';
import getInfiniteSeriesChapters from './infinite-series/getInfiniteSeriesChapters';
import getComplexNumbersChapters from './complex-numbers/getComplexNumbersChapters';
import getSeriesChapters from './series/getSeriesChapters';
import getEquaDiffLinFirstOrderChapters from './equa-diff-lin-first-order/getEquaDiffLinFirstOrderChapters';
import getTriangleChapters from './triangle/getTriangleChapters';
import getEnumChapters from './enumeration/getEnumChapters';

function coursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var delimBases = {
      id: i++,
      title: 'Bases du calcul'
    }

    var symbols = {
      id: i++,
      title: 'Les symboles mathématiques',
      metaContent: "Les symboles mathématiques usuelles.",
      relativePath: CoursesConstants.SYMBOLS,
      chapters: getSymbolsChapters()
    }
    var elementaryCalculus = {
      id: i++,
      title: 'Calcul élémentaire',
      metaContent: "Calcul élémentaire : les opérations de base, le produit en croix, les fractions.",
      relativePath: CoursesConstants.ELEM_CALCULUS,
      chapters: getElementaryCalculusChapters()
    }
    var powers = {
      id: i++,
      title: 'Les puissances',
      metaContent: "Cours sur les puissances : comprendre les différentes (simples, composées, inverses)",
      relativePath: CoursesConstants.PUISSANCES,
      chapters: getPowersChapters()
    }

    var delimGeo = {
      id: i++,
      title: 'Géométrie'
    }

    var triangle = {
      id: i++,
      title: 'La géométrie dans le triangle',
      metaContent: "La géométrie dans le triangle : hauteur, médiane, médiatrice, bissectrice, loi des sinus",
      relativePath: CoursesConstants.TRIANGLE,
      chapters: getTriangleChapters()
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

    var complexes = {
      id: i++,
      title: 'Les nombres complexes',
      metaContent: "Les nombres complexes : définitions, démonstrations et formules",
      relativePath: CoursesConstants.COMPLEXES,
      chapters: getComplexNumbersChapters()
    }

    var delimAnalyseFunctions = {
      id: i++,
      title: 'Analyse'
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

    var equaDiffLinOrder1 = {
      id: i++,
      title: 'Les équa. diff. linéaires d\'ordre 1',
      metaContent: "Les équations différentielles linéaires du premier ordre : résolution avec coefficients constants et coefficients fonction de x",
      relativePath: CoursesConstants.EQ_DIFF_LIN_ORDRE_1,
      chapters: getEquaDiffLinFirstOrderChapters()
    }

    var infSeries = {
      id: i++,
      title: 'Les développements limités',
      metaContent: "Les développements limités : définitions, démonstrations et formules",
      relativePath: CoursesConstants.DEVELOPPEMENTS_LIMITES,
      chapters: getInfiniteSeriesChapters()
    }

    var delimSeq = {
      id: i++,
      title: 'Suites et séries numériques'
    }

    var seq = {
      id: i++,
      title: 'Les suites numériques',
      metaContent: "Les suites numériques : variations, suites arithmétiques, suites géométriques, sommes de termes.",
      relativePath: CoursesConstants.SEQUENCES,
      chapters: getSequencesChapters()
    }

    var series = {
      id: i++,
      title: 'Les séries numériques',
      metaContent: "Les séries numériques : définition, convergence, séries de références.",
      relativePath: CoursesConstants.SERIES,
      chapters: getSeriesChapters()
    }

    var delimProba = {
      id: i++,
      title: 'Probabilités'
    }

    var enumeration = {
      id: i++,
      title: 'Le dénombrement',
      metaContent: "Le dénombrement : listes avec répétition, listes sans répétition (permutations), p éléments parmis n.",
      relativePath: CoursesConstants.ENUMERATION,
      chapters: getEnumChapters()
    }

    var delimThematiques = {
      id: i++,
      title: 'Thématiques'
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

    /* var geo = {
      id: i++,
      title: 'La géométrie',
      metaContent: "Les géométrie : les formes usuelles (carré, cube, cercle, triangle...etc) et le calcul des aires et volumes",
      relativePath: CoursesConstants.GEOMETRY,
      underChapters: true,
      chapters: geometryCoursesResourceBuilder()
    } */

    coursesItems.push(
        delimBases,
        symbols,
        elementaryCalculus,
        powers
    );

    coursesItems.push(
        delimGeo,
        triangle,
        pythagore,
        thales,
        complexes
    );

    coursesItems.push(
        delimAnalyseFunctions,
        equationsFirstDegree,
        equationsSecondDegree,
        usualFunctions,
        trigo,
        derivation,
        primInt,
        equaDiffLinOrder1,
        infSeries
    );

    coursesItems.push(
        delimSeq,
        seq
    );

    // coursesItems.push(
    //     delimProba,
    //     enumeration
    // );

    coursesItems.push(
        delimThematiques,
        pi,
        nbOr
    );

    if(process.env.NODE_ENV === 'development') {
      coursesItems.push(series)
    } 
    
    return coursesItems;

}

export default coursesResourceBuilder;
import EvolutionDeLapins from './chapters/EvolutionDeLapins';
import Caracteristiques from './chapters/Caracteristiques';
import CaracteristiquesEnSensContraire from './chapters/CaracteristiquesEnSensContraire';
import FormulesDePhiPuissN from './chapters/FormulesDePhiPuissN';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';

const getGoldenRatioChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EvolutionDeLapins />,
            title: 'Évolutions de lapins',
            metaContent: 'La modélisation de la suite de Fibonacci avec l\'image de l\'évolution d\'une reproduction de lapins.',
            hiddenTitle: 'Évolutions de lapins pour modéliser la suite de Fibonacci',
            relativePath: 'evolutions-de-lapins'
        },  
        {
            id: k++,
            component: <Caracteristiques />,
            title: 'Caractéristiques du nombre d\'or',
            metaContent: 'Les particularités du nombre d\'or et le détail historique de son calcul.',
            hiddenTitle: 'Les caractéristiques du nombre d\'or et son calcul',
            relativePath: 'caracteristiques-du-nombre-d-or'
        },
        {
            id: k++,
            component: <CaracteristiquesEnSensContraire />,
            title: 'Caractéristiques du nombre d\'or en sens contraire',
            metaContent: 'L\'évolution de la suite de Fibonacci, mais cette fois-ci, en sons contraire.',
            hiddenTitle: 'Les caractéristiques du nombre d\'or en sens contraire',
            relativePath: 'caracteristiques-du-nombre-d-or-en-sens-contraire'
        },
        {
            id: k++,
            component: <FormulesDePhiPuissN />,
            title: 'Formules de Phi en fonction de n',
            metaContent: 'La pattern des formules de puissances concernant le nombre d\'or.',
            hiddenTitle: 'Les formules de Phi élevées à une certaine puissance',
            relativePath: 'formules-de-phi'
        },   
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Quelques formules générales',
            metaContent: 'Quelques formules élégantes pour calculer le nombre d\'or.',
            hiddenTitle: 'Quelques formules générales du calcul du nombre d\'or',
            relativePath: 'formules-generales'
        }
    ];
}

export default getGoldenRatioChapters;
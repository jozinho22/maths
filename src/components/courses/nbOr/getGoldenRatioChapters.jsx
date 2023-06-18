import EvolutionDeLapins from './chapters/EvolutionDeLapins';
import Caracteristiques from './chapters/Caracteristiques';
import CaracteristiquesEnSensContraire from './chapters/CaracteristiquesEnSensContraire';
import FormuleDeLaSuiteDeFibonacci from './chapters/FormuleDeLaSuiteDeFibonacci';
import FormuleDePhi1 from './chapters/FormuleDePhi2';
import FormuleDePhi2 from './chapters/FormuleDePhi1';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';

const getGoldenRatioChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EvolutionDeLapins />,
            title: 'Évolutions de lapins',
            metaContent: 'La modélisation de la suite de Fibonacci avec l\'image de l\'évolution d\'une reproduction de lapins.',
            relativePath: '/evolutions-de-lapins'
        },  
        {
            id: k++,
            component: <Caracteristiques />,
            title: 'Caractéristiques du nombre d\'or',
            metaContent: 'Les particularités du nombre d\'or et le détail historique de son calcul.',
            relativePath: '/caracteristiques'
        },
        {
            id: k++,
            component: <CaracteristiquesEnSensContraire />,
            title: 'Caractéristiques du nombre d\'or en sens contraire',
            metaContent: 'L\'évolution de la suite de Fibonacci, mais cette fois-ci, en sons contraire.',
            relativePath: '/caracteristiques-en-sens-contraire'
        },
        {
            id: k++,
            component: <FormuleDeLaSuiteDeFibonacci />,
            title: 'Formules de la suite de Fibonacci',
            metaContent: 'Un tableau récapitulatif du pattern de la suite de Fibonacci.',
            relativePath: '/formule-de-la-suite-de-fibonacci'
        }, 
        {
            id: k++,
            component: <FormuleDePhi1 />,
            title: 'Formule de Phi en fonction de n (1)',
            metaContent: 'Un tableau récapitulatif d\'une formule du nombre d\'or.',
            relativePath: '/formule-de-phi-puissance-n-1'
        },   
        {
            id: k++,
            component: <FormuleDePhi2 />,
            title: 'Formule de Phi en fonction de n (2)',
            metaContent: 'Un tableau récapitulatif d\'une formule du nombre d\'or.',
            relativePath: '/formule-de-phi-puissance-n-2'
        },   
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Quelques formules générales',
            metaContent: 'Quelques formules élégantes pour calculer le nombre d\'or.',
            relativePath: '/autres-formules-generales'
        }
    ];
}

export default getGoldenRatioChapters;
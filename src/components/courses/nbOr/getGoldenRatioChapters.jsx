import EvolutionDeLapins from './chapters/EvolutionDeLapins';
import Caracteristiques from './chapters/Caracteristiques';
import CaracteristiquesEnSensContraire from './chapters/CaracteristiquesEnSensContraire';
import FormulesDePhiPuissN from './chapters/FormulesDePhiPuissN';
import FormulesGenerales from './chapters/FormulesGenerales';

const getGoldenRatioChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <EvolutionDeLapins />,
            title: 'Évolutions de lapins',
            relativePath: 'evolutions-de-lapins'
        },  
        {
            id: k++,
            component: <Caracteristiques />,
            title: 'Caractéristiques du nombre d\'or',
            relativePath: 'caracteristiques-du-nombre-d-or'
        },
        {
            id: k++,
            component: <CaracteristiquesEnSensContraire />,
            title: 'Caractéristiques du nombre d\'or en sens contraire',
            relativePath: 'caracteristiques-du-nombre-d-or-en-sens-contraire'
        },
        {
            id: k++,
            component: <FormulesDePhiPuissN />,
            title: 'Formules de φ en fonction de n',
            relativePath: 'formule-de-phi'
        },   
        {
            id: k++,
            component: <FormulesGenerales />,
            title: 'Quelques formules générales',
            relativePath: 'formules-generales'
        }
    ];
}

export default getGoldenRatioChapters;
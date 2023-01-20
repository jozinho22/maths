import EvolutionDeLapins from './chapters/EvolutionDeLapins';
import Caracteristiques from './chapters/Caracteristiques';
import CaracteristiquesEnSensContraire from './chapters/CaracteristiquesEnSensContraire';
import FormulesDePhiPuissN from './chapters/FormulesDePhiPuissN';
import FormulesGenerales from './chapters/FormulesGenerales';

const getGoldenRatioChapters = () => {

    var k = 1;

    return [      
        {
            id: k++,
            component: <EvolutionDeLapins />,
            name: 'Évolutions de lapins'
        },  
        {
            id: k++,
            component: <Caracteristiques />,
            name: 'Caractéristiques du nombre d\'or'
        },
        {
            id: k++,
            component: <CaracteristiquesEnSensContraire />,
            name: 'Caractéristiques du nombre d\'or en sens contraire'
        },
        {
            id: k++,
            component: <FormulesDePhiPuissN />,
            name: 'Formules de φ en fonction de n'
        },   
        {
            id: k++,
            component: <FormulesGenerales />,
            name: 'Quelques formules générales'
        }
    ];
}

export default getGoldenRatioChapters;
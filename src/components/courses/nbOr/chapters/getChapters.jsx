import EvolutionDeLapins from './EvolutionDeLapins';
import Caracteristiques from './Caracteristiques';
import FormulesDePhiPuissN from './FormulesDePhiPuissN';
import FormulesGenerales from './FormulesGenerales';

const getChapters = () => {

    var k = 0;

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

export default getChapters;
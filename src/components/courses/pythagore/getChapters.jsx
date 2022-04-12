import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';
import DemonstrationDeLaReciproque from './chapters/DemonstrationDeLaReciproque';
import TheoremeDAlKashi from './chapters/TheoremeDAlKashi';

const getChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            name: 'Présentation'
        },
        {
            id: k++,
            component: <DemonstrationDuTheoreme />,
            name: 'Demonstration du théorème de Pythagore'
        },
        {
            id: k++,
            component: <DemonstrationDeLaReciproque />,
            name: 'Demonstration de la réciproque théorème de Pythagore'
        },
        {
            id: k++,
            component: <TheoremeDAlKashi />,
            name: 'Théorème d\'Al-Kashi'
        } 
    ];
}

export default getChapters;
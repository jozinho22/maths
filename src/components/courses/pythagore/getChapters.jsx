import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';
import DemonstrationDeLaReciproque from './chapters/DemonstrationDeLaReciproque';
import TheoremeDAlKashi from './chapters/TheoremeDAlKashi';
import Applications from './chapters/Applications';

const getChapters = () => {

    var k = 1;

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
            component: <Applications />,
            name: 'Applications'
        },
        {
            id: k++,
            component: <TheoremeDAlKashi />,
            name: 'Théorème d\'Al-Kashi'
        } 
    ];
}

export default getChapters;
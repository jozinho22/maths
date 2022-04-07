import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';

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
        }
    ];
}

export default getChapters;
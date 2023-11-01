import CalculsDansC from "./chapters/CalculsDansC";
import ConjugueDUnComplexe from "./chapters/ConjugueDUnComplexe";
import Presentation from "./chapters/Presentation";

const getComplexNumbersChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation des nombres complexes',
            metaContent: 'Présentation des nombres complexes : définition.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <CalculsDansC />,
            title: 'Calculs dans l\'ensemble des complexes',
            metaContent: 'Calculs dans l\'ensemble des complexes.',
            relativePath: '/calculs-dans-c'
        },
        {
            id: k++,
            component: <ConjugueDUnComplexe />,
            title: 'Conjugué d\'un nombre complexe',
            metaContent: 'Conjugué d\'un nombre complexe : définition, formules et démonstrations.',
            relativePath: '/conjugue-d-un-complexe'
        }
    ];
}

export default getComplexNumbersChapters;
import CalculsDansC from "./chapters/CalculsDansC";
import ConjugueDUnComplexe from "./chapters/ConjugueDUnComplexe";
import EquationsDuSecondDegre from "./chapters/EquationsDuSecondDegre";
import InterpretationGeometrique from "./chapters/InterpretationGeometrique";
import ModuleDUnComplexe from "./chapters/ModuleDUnComplexe";
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
        },
        {
            id: k++,
            component: <ModuleDUnComplexe />,
            title: 'Module d\'un complexe',
            metaContent: 'Module d\'un complexe : définition, formules et démonstrations.',
            relativePath: '/module-d-un-complexe'
        },
        {
            id: k++,
            component: <EquationsDuSecondDegre />,
            title: 'Équations du second degré',
            metaContent: 'Équations du second degré : solutions dans C.',
            relativePath: '/equations-du-second-degre'
        },
        {
            id: k++,
            component: <InterpretationGeometrique />,
            title: 'Interprétation géométrique des nombres complexes',
            metaContent: 'Interprétation géométrique des nombres complexes.',
            relativePath: '/interpretation-geometrique'
        }


       
    ];
}

export default getComplexNumbersChapters;
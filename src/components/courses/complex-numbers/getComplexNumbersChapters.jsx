import ArgumentDUnComplexe from "./chapters/ArgumentDUnComplexe";
import CalculsDansC from "./chapters/CalculsDansC";
import ConjugueDUnComplexe from "./chapters/ConjugueDUnComplexe";
import EquationsDuSecondDegre from "./chapters/EquationsDuSecondDegre";
import FormeTrigonometrique from "./chapters/FormeTrigonometrique";
import FormuleDeMoivre from "./chapters/FormuleDeMoivre";
import InterpretationGeometrique from "./chapters/InterpretationGeometrique";
import LienEntreFormeAlgebriqueEtTrigonometrique from "./chapters/LienEntreFormeAlgebriqueEtTrigonometrique";
import ModuleDUnComplexe from "./chapters/ModuleDUnComplexe";
import Presentation from "./chapters/Presentation";
import FormeExponentielle from "./chapters/FormeExponentielle";
import FormulesDEuler from "./chapters/FormuleDEuler";
import RacinesDUnComplexe from "./chapters/RacinesDUnComplexe";

const getComplexNumbersChapters = () => {

    var k = 0;

    return [   
        {
            title: 'Généralités'
        },   
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation des nombres complexes : définition.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <CalculsDansC />,
            title: 'Calculs dans C',
            metaContent: 'Calculs dans l\'ensemble des complexes.',
            relativePath: '/calculs-dans-c'
        },
        {
            id: k++,
            component: <ConjugueDUnComplexe />,
            title: 'Conjugué',
            metaContent: 'Conjugué d\'un nombre complexe : définition, formules et démonstrations.',
            relativePath: '/conjugue-d-un-complexe'
        },
        {
            id: k++,
            component: <ModuleDUnComplexe />,
            title: 'Module',
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
            title: 'Interprétation géométrique',
            metaContent: 'Interprétation géométrique des nombres complexes.',
            relativePath: '/interpretation-geometrique'
        },
        {
            id: k++,
            component: <FormeTrigonometrique />,
            title: 'Forme trigonométrique',
            metaContent: 'Forme trigonométrique d\'un complexe.',
            relativePath: '/forme-trigonometrique'
        },
        {
            id: k++,
            component: <LienEntreFormeAlgebriqueEtTrigonometrique />,
            title: 'Lien entre forme algébrique et trigonométrique',
            metaContent: 'Lien entre forme algébrique et trigonométrique.',
            relativePath: '/lien-entre-forme-algebrique-et-trigonometrique'
        },
        {
            id: k++,
            component: <ArgumentDUnComplexe />,
            title: 'Argument',
            metaContent: 'Argument d\'un complexe : définition, formules et démonstrations.',
            relativePath: '/argument-d-un-complexe'
        },  
        {
            title: 'Formules'
        },   
        {
            id: k++,
            component: <FormuleDeMoivre />,
            title: 'Formule de Moivre',
            metaContent: 'Formule de Moivre : définition, formule et démonstration.',
            relativePath: '/formule-de-moivre'
        },
        {
            id: k++,
            component: <FormeExponentielle />,
            title: 'Forme exponentielle',
            metaContent: 'Forme exponentielle d\'un nombre complexe.',
            relativePath: '/forme-exponentielle'
        },
        {
            id: k++,
            component: <FormulesDEuler />,
            title: 'Formules d\'Euler',
            metaContent: 'Formules d\'Euler.',
            relativePath: '/formule-d-euler'
        },
        {
            title: 'Équations'
        }, 
        {
            id: k++,
            component: <RacinesDUnComplexe />,
            title: 'Racines',
            metaContent: 'Racines d\'un complexe : racine de l\'unité et cas général.',
            relativePath: '/racines-d-un-complexe'
        } 
    ];
}

export default getComplexNumbersChapters;
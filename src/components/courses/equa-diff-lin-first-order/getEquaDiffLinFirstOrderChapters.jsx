import EDL1CoefficientContinu from "./chapters/EDL1CoefficientContinu";
import EDL1CoefficientContinuExemple from "./chapters/EDL1CoefficientContinuExemple";
import EDL1CoefficientContinuExempleVerification from "./chapters/EDL1CoefficientContinuExempleVerification";
import Presentation from "./chapters/Presentation";
import PrincipeDeSuperposition from "./chapters/PrincipeDeSuperposition";
import PrincipeDeSuperpositionDemo from "./chapters/PrincipeDeSuperpositionDemo";

const getEquaDiffLinFirstOrderChapters = () => {

    var k = 0;

    return [  
        {
            title: 'Généralités'
        },     
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation des équations différentielles linéaires d\'ordre1.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <PrincipeDeSuperposition />,
            title: 'Principe de superposition',
            metaContent: 'Principe de superposition : définition et lien avec la linéarité.',
            relativePath: '/principe-de-superposition'
        },
        {
            id: k++,
            component: <PrincipeDeSuperpositionDemo />,
            title: 'Principe de superposition (démonstration)',
            metaContent: 'Principe de superposition : démonstration.',
            relativePath: '/principe-de-superposition-demo'
        },
        {
            title: 'Résolution des équa. diff. lin. d\'ordre 1 à coefficient continu'
        }, 
        {
            id: k++,
            component: <EDL1CoefficientContinu />,
            title: 'Résolution d\'une EDL1 à coefficient continu',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu.',
            relativePath: '/resolution-edl1-a-coefficient-continu'
        },
        {
            id: k++,
            component: <EDL1CoefficientContinuExemple />,
            title: 'Résolution d\'une EDL1 à coefficient continu : exemple',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu : exemple.',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple'
        },   
        {
            id: k++,
            component: <EDL1CoefficientContinuExempleVerification />,
            title: 'Résolution d\'une EDL1 à coefficient continu : vérification de l\'exemple',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu : vérification de l\'exemple.',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple-verif'
        }


    ];
}

export default getEquaDiffLinFirstOrderChapters;
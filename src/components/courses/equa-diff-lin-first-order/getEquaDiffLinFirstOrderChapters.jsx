import EDL1CoefficientContinuEquGenerale from "./chapters/EDL1CoefficientContinuEquGenerale";
import EDL1CoefficientContinuEquHomogene from "./chapters/EDL1CoefficientContinuEquHomogene";
import EDL1CoefficientContinuExempleEquGenerale from "./chapters/EDL1CoefficientContinuExempleEquGenerale";
import EDL1CoefficientContinuExempleEquHomogene from "./chapters/EDL1CoefficientContinuExempleEquHomogene";
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
            component: <EDL1CoefficientContinuEquHomogene />,
            title: 'Résolution d\'une EDL1 à coefficient continu (équation homogène)',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation homogène).',
            relativePath: '/resolution-edl1-a-coefficient-continu-equ-homogene'
        },
        {
            id: k++,
            component: <EDL1CoefficientContinuEquGenerale />,
            title: 'Résolution d\'une EDL1 à coefficient continu (équation générale)',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation générale).',
            relativePath: '/resolution-edl1-a-coefficient-continu-equ-generale'
        },
        {
            id: k++,
            component: <EDL1CoefficientContinuExempleEquHomogene />,
            title: 'Résolution d\'une EDL1 à coefficient continu : exemple (équation homogène)',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu : exemple (équation homogène).',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple-equ-homogene'
        },  
        {
            id: k++,
            component: <EDL1CoefficientContinuExempleEquGenerale />,
            title: 'Résolution d\'une EDL1 à coefficient continu : exemple (équation générale)',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu : exemple (équation générale).',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple-equ-generale'
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
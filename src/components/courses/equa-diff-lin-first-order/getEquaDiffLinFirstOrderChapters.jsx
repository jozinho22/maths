import EDL1CoefficientConstantExempleEqu1 from "./chapters/EDL1CoefficientConstantExempleEqu1";
import EDL1CoefficientConstantExempleEquHomogene from "./chapters/EDL1CoefficientConstantExempleEquHomogene";
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
            title: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation homogène)',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation homogène).',
            relativePath: '/resolution-edl1-a-coefficient-continu-equ-homogene'
        },
        {
            id: k++,
            component: <EDL1CoefficientContinuEquGenerale />,
            title: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation générale)',
            metaContent: 'Résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation générale).',
            relativePath: '/resolution-edl1-a-coefficient-continu-equ-generale'
        },
        {
            title: 'Exemple de résolution d\'une équa. diff. lin. d\'ordre 1 à coefficient continu'
        }, 
        {
            id: k++,
            component: <EDL1CoefficientContinuExempleEquHomogene />,
            title: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation homogène)',
            metaContent: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation homogène).',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple-equ-homogene'
        },  
        {
            id: k++,
            component: <EDL1CoefficientContinuExempleEquGenerale />,
            title: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation générale)',
            metaContent: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (équation générale).',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple-equ-generale'
        },    
        {
            id: k++,
            component: <EDL1CoefficientContinuExempleVerification />,
            title: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (vérification)',
            metaContent: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient continu (vérification).',
            relativePath: '/resolution-edl1-a-coefficient-continu-exemple-verif'
        },
/*         {
            title: 'Exemple de résolution d\'une équa. diff. lin. d\'ordre 1 à coefficient constant, avec l\'application du principe de superposition'
        },
        {
            id: k++,
            component: <EDL1CoefficientConstantExempleEquHomogene />,
            title: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient constant (équation homogène)',
            metaContent: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient constant (équation homogène).',
            relativePath: '/resolution-edl1-a-coefficient-constant-exemple-equ-homogene'
        }, 
        {
            id: k++,
            component: <EDL1CoefficientConstantExempleEqu1/>,
            title: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient constant (équation 1)',
            metaContent: 'Exemple de résolution d\'une équation différentielle linéaire d\'ordre 1 à coefficient constant (équation 1).',
            relativePath: '/resolution-edl1-a-coefficient-constant-exemple-equ-1'
        },  */
    ];
}

export default getEquaDiffLinFirstOrderChapters;
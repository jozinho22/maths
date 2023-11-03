import Presentation from './chapters/Presentation';
import ValeursDeSinEtCos from './chapters/ValeursDeSinEtCos';
import PythagoreAppliqueALatrigo from './chapters/PythagoreAppliqueALatrigo';
import FormulesDAddition from './chapters/FormulesDAddition';
import FormulesDeDuplication from './chapters/FormulesDeDuplication';
import FormulesDeLinearisation from './chapters/FormulesDeLinearisation';
import LaTangente from './chapters/LaTangente';
import ValeursDeTan from './chapters/ValeursDeTan';
import ResolutionDEquations from './chapters/ResolutionDEquations';
import FormulesDEuler from './chapters/FormulesDEuler';

const getTrigoChapters = () => {

    var k = 0;

    return [
        {
            title: 'Généralités sur les fonctions sin et cos'
        }, 
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Introduction aux notions de base de la trigonométrie (sinus, cosinus et tangente).',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <ValeursDeSinEtCos />,
            title: 'Valeurs de sinus et cosinus sur le cercle',
            metaContent: 'Toutes les valeurs usuelles des sinus et cosinus sur le cercle et le schéma répétitif.',
            relativePath: '/valeurs-de-sin-cos'
        },
        {
            id: k++,
            component: <PythagoreAppliqueALatrigo />,
            title: 'Pythagore appliqué à la trigonométrie',
            metaContent: 'L\'application du théorème de Pythagore dans le cercle trigonométrique.',
            relativePath: '/pythagore-et-trigonometrie'
        },
        {
            title: 'Formules'
        }, 
        {
            id: k++,
            component: <FormulesDAddition />,
            title: 'Formules d\'addition',
            metaContent: 'Les formules des sinus et cosinus impliquant une addition d\'angles.',
            relativePath: '/formules-d-addition'
        },
        {
            id: k++,
            component: <FormulesDeDuplication />,
            title: 'Formules de duplication',
            metaContent: 'Les formules des sinus et cosinus impliquant une duplication de lui-même.',
            relativePath: '/formules-de-duplication'
        },
        {
            id: k++,
            component: <FormulesDeLinearisation />,
            title: 'Formules de linéarisation',
            metaContent: 'Les formules des sinus et cosinus impliquant une linéarisation.',
            relativePath: '/formules-de-linearisation'
        },
        {
            id: k++,
            component: <FormulesDEuler />,
            title: 'Formules trigonométriques d\'Euler',
            metaContent: 'Formules trigonométriques d\'Euler.',
            relativePath: '/formules-d-euler'
        },
        {
            title: 'La tangente'
        }, 
        {
            id: k++,
            component: <LaTangente />,
            title: 'La tangente',
            metaContent: 'Introduction au concept de tangente sur le cercle trigonométrique et ses applications.',
            relativePath: '/la-tangente'
        },
        {
            id: k++,
            component: <ValeursDeTan />,
            title: 'Valeurs de la tangente sur le cercle',
            metaContent: 'Toutes les valeurs usuelles des tangentes sur le cercle et le schéma répétitif.',
            relativePath: '/valeurs-de-tan'
        },
        {
            title: 'Résolution'
        },
        {
            id: k++,
            component: <ResolutionDEquations />,
            title: 'Résolutions d\'équations trigonométriques',
            metaContent: 'Résolutions d\'équations trigonométriques.',
            relativePath: '/resolution-d-equations'
        }
    ];
}

export default getTrigoChapters;
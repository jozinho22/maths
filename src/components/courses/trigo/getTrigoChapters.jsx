import Presentation from './chapters/Presentation';
import ValeursDeSinEtCos from './chapters/ValeursDeSinEtCos';
import PythagoreAppliqueALatrigo from './chapters/PythagoreAppliqueALatrigo';
import FormulesDAddition from './chapters/FormulesDAddition';
import FormulesDeDuplication from './chapters/FormulesDeDuplication';
import FormulesDeLinearisation from './chapters/FormulesDeLinearisation';
import LaTangente from './chapters/LaTangente';
import ValeursDeTan from './chapters/ValeursDeTan';
import DeriveesDeSinEtCos from './chapters/DeriveesDeSinEtCos';

const getTrigoChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Introduction aux notions de base de la trigonométrie (sinus, cosinus et tangente).',
            hiddenTitle: 'Présentation des notions de bases de la trigonométrie',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <ValeursDeSinEtCos />,
            title: 'Valeurs de sinus et cosinus sur le cercle',
            metaContent: 'Toutes les valeurs usuelles des sinus et cosinus sur le cercle et le schéma répétitif.',
            hiddenTitle: 'Les valeurs des sinus et cosinus sur le cercle trigonométrique',
            relativePath: '/valeurs-de-sin-cos'
        },
        {
            id: k++,
            component: <PythagoreAppliqueALatrigo />,
            title: 'Pythagore appliqué à la trigonométrie',
            metaContent: 'L\'application du théorème de Pythagore dans le cercle trigonométrique.',
            hiddenTitle: 'Le théorème de Pythagore appliqué à la trigonométrie',
            relativePath: '/pythagore-et-trigonometrie'
        },
        {
            id: k++,
            component: <FormulesDAddition />,
            title: 'Formules d\'addition',
            metaContent: 'Les formules des sinus et cosinus impliquant une addition d\'angles.',
            hiddenTitle: 'Les formules d\'addition d\'angles',
            relativePath: '/formules-d-addition'
        },
        {
            id: k++,
            component: <FormulesDeDuplication />,
            title: 'Formules de duplication',
            metaContent: 'Les formules des sinus et cosinus impliquant une duplication de lui-même.',
            hiddenTitle: 'Les formules de duplication',
            relativePath: '/formules-de-duplication'
        },
        {
            id: k++,
            component: <FormulesDeLinearisation />,
            title: 'Formules de linéarisation',
            metaContent: 'Les formules des sinus et cosinus impliquant une linéarisation.',
            hiddenTitle: 'Les formules de linéarisation',
            relativePath: '/formules-de-linearisation'
        },
        {
            id: k++,
            component: <DeriveesDeSinEtCos />,
            title: 'Dérivées de sinus et cosinus',
            metaContent: 'Les dérivées des sinus et cosinus et le détail du calcul.',
            hiddenTitle: 'Les dérivées des sinus et cosinus',
            relativePath: '/derivees'
        },
        {
            id: k++,
            component: <LaTangente />,
            title: 'La tangente',
            metaContent: 'Introduction au concept de tangente sur le cercle trigonométrique et ses applications.',
            hiddenTitle: 'Présentation de la tangente sur le cercle trigonométrique',
            relativePath: '/la-tangente'
        },
        {
            id: k++,
            component: <ValeursDeTan />,
            title: 'Valeurs de la tangente sur le cercle',
            metaContent: 'Toutes les valeurs usuelles des tangentes sur le cercle et le schéma répétitif.',
            hiddenTitle: 'Les valeurs des tangentes sur le cercle trigonométrique',
            relativePath: '/valeurs-de-tan'
        }
    ];
}

export default getTrigoChapters;
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
            relativePath: 'presentation'
        },
        {
            id: k++,
            component: <ValeursDeSinEtCos />,
            title: 'Valeurs de sinus et cosinus sur le cercle',
            relativePath: 'valeurs-de-sin-cos'
        },
        {
            id: k++,
            component: <PythagoreAppliqueALatrigo />,
            title: 'Pythagore appliqué à la trigonométrie',
            relativePath: 'pythagore-et-trigonometrie'
        },
        {
            id: k++,
            component: <FormulesDAddition />,
            title: 'Formules d\'addition',
            relativePath: 'formules-d-addition'
        },
        {
            id: k++,
            component: <FormulesDeDuplication />,
            title: 'Formules de duplication',
            relativePath: 'formules-de-duplication'
        },
        {
            id: k++,
            component: <FormulesDeLinearisation />,
            title: 'Formules de linéarisation',
            relativePath: 'formules-de-linearisation'
        },
        {
            id: k++,
            component: <DeriveesDeSinEtCos />,
            title: 'Dérivées de sinus et cosinus',
            relativePath: 'derivees'
        },
        {
            id: k++,
            component: <LaTangente />,
            title: 'La tangente',
            relativePath: 'la-tangente'
        },
        {
            id: k++,
            component: <ValeursDeTan />,
            title: 'Valeurs de la tangente sur le cercle',
            relativePath: 'valeurs-de-tan'
        }
    ];
}

export default getTrigoChapters;
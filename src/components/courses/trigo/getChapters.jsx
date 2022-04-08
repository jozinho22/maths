import Presentation from './chapters/Presentation';
import ValeursDeSinEtCos from './chapters/ValeursDeSinEtCos';
import PythagoreAppliqueALatrigo from './chapters/PythagoreAppliqueALatrigo';
import FormulesDAddition from './chapters/FormulesDAddition';
import FormulesDeDuplication from './chapters/FormulesDeDuplication';
import FormulesDeLinearisation from './chapters/FormulesDeLinearisation';
import LaTangente from './chapters/LaTangente';
import ValeursDeTan from './chapters/ValeursDeTan';
import DeriveesDeSinEtCos from './chapters/DeriveesDeSinEtCos';

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
            component: <ValeursDeSinEtCos />,
            name: 'Valeurs de sinus et cosinus sur le cercle'
        },
        {
            id: k++,
            component: <PythagoreAppliqueALatrigo />,
            name: 'Pythagore appliqué à la trigonométrie'
        },
        {
            id: k++,
            component: <FormulesDAddition />,
            name: 'Formules d\'addition'
        },
        {
            id: k++,
            component: <FormulesDeDuplication />,
            name: 'Formules de duplication'
        },
        {
            id: k++,
            component: <FormulesDeLinearisation />,
            name: 'Formules de linéarisation'
        },
        {
            id: k++,
            component: <DeriveesDeSinEtCos />,
            name: 'Dérivées de sinus et cosinus'
        },
        {
            id: k++,
            component: <LaTangente />,
            name: 'La tangente'
        },
        {
            id: k++,
            component: <ValeursDeTan />,
            name: 'Valeurs de la tangente sur le cercle'
        }
    ];
}

export default getChapters;
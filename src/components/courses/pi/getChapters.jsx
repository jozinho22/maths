import Presentation from './chapters/Presentation';
import CalculDePi from './chapters/CalculDePi';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';

const getPiChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation des caractéristiques du nombre Pi et notamment sa relation avec le cercle.', 
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <CalculDePi />,
            title: 'Calcul de Pi par méthode géométrique',
            metaContent: 'Calcul historique du nombre Pi effectué par Archimède par approximations successives.', 
            relativePath: '/calcul'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Autre formules générales',
            metaContent: 'Quelques formules élégantes pour calculer le nombre Pi.',
            relativePath: '/autres-formules-generales'
        }
    ];
}

export default getPiChapters;
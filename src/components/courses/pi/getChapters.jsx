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
            hiddenTitle: 'Présentation du nombre Pi et de ses caractéristiques',
            relativePath: 'presentation'
        },
        {
            id: k++,
            component: <CalculDePi />,
            title: 'Calcul de Pi par méthode géométrique',
            metaContent: 'Calcul historique du nombre Pi effectué par Archimède par approximations successives.', 
            hiddenTitle: 'Calcul historique du nombre Pi',
            relativePath: 'calcul-de-pi'
        },
        {
            id: k++,
            component: <AutresFormulesGenerales />,
            title: 'Autre formules générales',
            metaContent: 'Quelques formules élégantes pour calculer le nombre Pi.',
            hiddenTitle: 'Quelques formules générales du calcul du nombre Pi',
            relativePath: 'autres-formules-generales'
        }
    ];
}

export default getPiChapters;
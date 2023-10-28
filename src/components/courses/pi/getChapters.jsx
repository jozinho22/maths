import Presentation from './chapters/Presentation';
import CalculDePi from './chapters/CalculDePi';
import AutresFormulesGenerales from './chapters/AutresFormulesGenerales';
import CalculDePi2 from './chapters/CalculDePi2';

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
            relativePath: '/calcul-par-methode-geometrique'
        },
        {
            id: k++,
            component: <CalculDePi2 />,
            title: 'Calcul de Pi par méthode géométrique (suite)',
            metaContent: 'Calcul historique du nombre Pi effectué par Archimède par approximations successives (suite).', 
            relativePath: '/calcul-par-methode-geometrique-2'
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
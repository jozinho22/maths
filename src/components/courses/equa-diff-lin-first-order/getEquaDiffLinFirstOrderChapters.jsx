import Linearite from "./chapters/Linearite";
import Presentation from "./chapters/Presentation";

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
            component: <Linearite />,
            title: 'Linéarité',
            metaContent: 'Linéarité des équations différentielles linéaires : définition et démonstration.',
            relativePath: '/linearite'
        },
        {
            title: 'Résolution'
        }, 

    ];
}

export default getEquaDiffLinFirstOrderChapters;
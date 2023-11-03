import Presentation from "./chapters/Presentation";
import ConvergenceDUneSerie from "./chapters/ConvergenceDUneSerie";
import ResteDUneSerieConvergente from "./chapters/ResteDUneSerieConvergente";

const getSeriesChapters = () => {

    var k = 0;

    return [   
        {
            title: 'Généralités'
        },     
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation des séries numériques',
            metaContent: 'Présentation des séries numériques.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <ConvergenceDUneSerie />,
            title: 'Convergence d\'une série',
            metaContent: 'Convergence d\'une série : conditions et conséquences.',
            relativePath: '/convergence'
        },
        {
            id: k++,
            component: <ResteDUneSerieConvergente />,
            title: 'Reste d\'une série convergente',
            metaContent: 'Reste d\'une série convergente.',
            relativePath: '/reste-d-une-serie-convergente'
        }
    ];
}

export default getSeriesChapters;
import Presentation from "./chapters/Presentation";
import ConvergenceDUneSerie from "./chapters/ConvergenceDUneSerie";
import ResteDUneSerieConvergente from "./chapters/ResteDUneSerieConvergente";
import SeriesDeRiemann from "./chapters/SeriesDeRiemann";
import OperationsSurLesSeriesConvergentes from "./chapters/OperationsSurLesSeriesConvergentes";

const getSeriesChapters = () => {

    var k = 0;

    return [   
        {
            title: 'Généralités'
        },     
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation des séries numériques.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <ConvergenceDUneSerie />,
            title: 'Convergence',
            metaContent: 'Convergence d\'une série : conditions et conséquences.',
            relativePath: '/convergence'
        },
        {
            id: k++,
            component: <ResteDUneSerieConvergente />,
            title: 'Reste d\'une série convergente',
            metaContent: 'Reste d\'une série convergente.',
            relativePath: '/reste-d-une-serie-convergente'
        },
        {
            id: k++,
            component: <OperationsSurLesSeriesConvergentes />,
            title: 'Opérations algébriques sur les séries convergentes',
            metaContent: 'Opérations algébriques sur les séries convergentes.',
            relativePath: '/operations-sur-les-series-convergentes'
        },
        {
            title: 'Séries de référence'
        },
        {
            id: k++,
            component: <SeriesDeRiemann />,
            title: 'Séries de Riemman : règle de convergence',
            metaContent: 'Séries de Riemman : règle de convergence.',
            relativePath: '/series-de-riemann'
        }
    ];
}

export default getSeriesChapters;
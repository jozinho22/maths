import aspirisouffle from './albums/aspirisouffle.pdf'; 
import bigBang from './albums/bigBang.pdf'; 
import chronologicon from './albums/chronologicon.pdf';
import economicon from './albums/economicon.pdf';
import energetiquementVotre from './albums/energetiquementVotre.pdf';
import geometricon from './albums/geometricon.pdf';
import joyeuseApo from './albums/joyeuseApo.pdf';
import mecavol from './albums/mecavol.pdf';
import milleEtUnenuits from './albums/milleEtUnenuits.pdf';
import murDuSilence from './albums/murDuSilence.pdf';
import pourQqesAmperesDePlus from './albums/pourQqesAmperesDePlus.pdf'; 
import topologicon from './albums/topologicon.pdf'; 
import toutEstRelatif from './albums/toutEstRelatif.pdf'; 
import trouNoir from './albums/trouNoir.pdf'; 

function pdfResourceBuilder() {

    var pdfItems = [];
    var i = 0;

    var pdfAspi = {
      id: i++,
      filePath: './albums/aspirisouffle.pdf',
      title: 'L\'aspirisouffle',
      pdfFile : aspirisouffle,
      relativePath: 'l-aspirisouffle'
    }
    var pdfBigBang = {
      id: i++,
      filePath: './albums/bigBang.pdf',
      title: 'Le Big Bang',
      pdfFile : bigBang,
      relativePath: 'le-big-bang'
    }
    var pdfChrono = {
      id: i++,
      filePath: './albums/chronologicon.pdf',
      title: 'Le chronologicon',
      pdfFile : chronologicon,
      relativePath: 'le-chronologicon'
    }
    var pdfEco = {
      id: i++,
      filePath: './albums/economicon.pdf',
      title: 'L\' économicon',
      pdfFile : economicon,
      relativePath: 'l-economicon'
    }
    var pdfEnerg = {
      id: i++,
      filePath: './albums/energetiquementVotre.pdf',
      title: 'Énergetiquement Vôtre',
      pdfFile : energetiquementVotre,
      relativePath: 'energetiquement-votre'
    }
    var pdfGeo = {
      id: i++,
      filePath: './albums/geometricon.pdf',
      title: 'Le géometricon',
      pdfFile : geometricon,
      relativePath: 'le-geometricon'
    }
    var pdfJoyeuseApo = {
      id: i++,
      filePath: './albums/joyeuseApo.pdf',
      title: 'Joyeuse apocalypse',
      pdfFile : joyeuseApo,
      relativePath: 'joyeuse-apocalypse'
    }
    var pdfMecaVol = {
      id: i++,
      filePath: './albums/mecavol.pdf',
      title: 'Mécavol',
      pdfFile : mecavol,
      relativePath: 'mecavol'
    }
    var pdfMilleEtUneNuits = {
      id: i++,
      filePath: './albums/milleEtUnenuits.pdf',
      title: 'Les 1001 nuits scientifiques',
      minTitle: 'Les 1001 nuits...',
      pdfFile : milleEtUnenuits,
      relativePath: 'les-mille-et-une-nuits-scientifiques'
    }
    var pdfMurSilence = {
      id: i++,
      filePath: './albums/murDuSilence.pdf',
      title: 'Le mur du silence',
      pdfFile : murDuSilence,
      relativePath: 'le-mur-du-silence'
    }
    var pdfPourQqesAmperes = {
      id: i++,
      filePath: './albums/pourQqesAmperesDePlus.pdf',
      title: 'Pour quelques ampères de plus',
      minTitle: 'Pour quelques ampères...',
      pdfFile : pourQqesAmperesDePlus,
      relativePath: 'pour-quelques-amperes-de-plus'
    }
    var pdfTopo = {
      id: i++,
      filePath: './albums/topologicon.pdf',
      title: 'Le topologicon',
      pdfFile : topologicon,
      relativePath: 'le-topologicon'
    }
    var pdfToutEstRelatif = {
      id: i++,
      filePath: './albums/toutEstRelatif.pdf',
      title: 'Tout est relatif',
      pdfFile : toutEstRelatif,
      relativePath: 'tout-est-relatif'
    }
    var pdfTrouNoir = {
      id: i++,
      filePath: './albums/trouNoir.pdf',
      title: 'Le trou noir',
      pdfFile : trouNoir,
      relativePath: 'le-trou-noir'
    }
    
    pdfItems.push(
        pdfAspi,
        pdfBigBang,
        pdfChrono,
        pdfEco, 
        pdfEnerg,
        pdfGeo,
        pdfJoyeuseApo,
        pdfMecaVol,
        pdfMilleEtUneNuits,
        pdfMurSilence,
        pdfPourQqesAmperes,
        pdfTopo,
        pdfToutEstRelatif,
        pdfTrouNoir
      );

    return pdfItems;

}

export default pdfResourceBuilder;
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
      pdfFile : aspirisouffle
    }
    var pdfBigBang = {
      id: i++,
      filePath: './albums/bigBang.pdf',
      title: 'Le Big Bang',
      pdfFile : bigBang
    }
    var pdfChrono = {
      id: i++,
      filePath: './albums/chronologicon.pdf',
      title: 'Le chronologicon',
      pdfFile : chronologicon
    }
    var pdfEco = {
      id: i++,
      filePath: './albums/economicon.pdf',
      title: 'L\' économicon',
      pdfFile : economicon
    }
    var pdfEnerg = {
      id: i++,
      filePath: './albums/energetiquementVotre.pdf',
      title: 'Ènergetiquement Vôtre',
      pdfFile : energetiquementVotre
    }
    var pdfGeo = {
      id: i++,
      filePath: './albums/geometricon.pdf',
      title: 'Le géometricon',
      pdfFile : geometricon
    }
    var pdfJoyeuseApo = {
      id: i++,
      filePath: './albums/joyeuseApo.pdf',
      title: 'Joyeuse apocalypse',
      pdfFile : joyeuseApo
    }
    var pdfMecaVol = {
      id: i++,
      filePath: './albums/mecavol.pdf',
      title: 'Mécavol',
      pdfFile : mecavol
    }
    var pdfMilleEtUneNuits = {
      id: i++,
      filePath: './albums/milleEtUnenuits.pdf',
      title: 'Les 1001 nuits...',
      pdfFile : milleEtUnenuits
    }
    var pdfMurSilence = {
      id: i++,
      filePath: './albums/murDuSilence.pdf',
      title: 'Le mur du silence',
      pdfFile : murDuSilence
    }
    var pdfPourQqesAmperes = {
      id: i++,
      filePath: './albums/pourQqesAmperesDePlus.pdf',
      title: 'Pour quelques ampères...',
      pdfFile : pourQqesAmperesDePlus
    }
    var pdfTopo = {
      id: i++,
      filePath: './albums/topologicon.pdf',
      title: 'Le topologicon',
      pdfFile : topologicon
    }
    var pdfToutEstRelatif = {
      id: i++,
      filePath: './albums/toutEstRelatif.pdf',
      title: 'Tout est relatif',
      pdfFile : toutEstRelatif
    }
    var pdfTrouNoir = {
      id: i++,
      filePath: './albums/trouNoir.pdf',
      title: 'Le trou noir',
      pdfFile : trouNoir
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
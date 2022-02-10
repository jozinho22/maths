import produitEnCroix from './courses/produitEnCroix.pdf';
import produitEnCroixWithAnswers from './courses/produitEnCroix-rep.pdf';

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

    var pdfProduitEnCroix = {
      id: i++,
      type: 'courses',
      filePath: './courses/produitEnCroix.pdf',
      title: 'Le produit en croix',
      pdfFile : produitEnCroix,
      pdfFileWithAnswers : produitEnCroixWithAnswers
    }

    pdfItems.push(
      pdfProduitEnCroix
    );

    var pdfAspi = {
      id: i++,
      type: 'albums',
      filePath: './albums/aspirisouffle.pdf',
      title: 'L\'aspirisouffle',
      pdfFile : aspirisouffle
    }
    var pdfBigBang = {
      id: i++,
      type: 'albums',
      filePath: './albums/bigBang.pdf',
      title: 'Le Big Bang',
      pdfFile : bigBang
    }
    var pdfChrono = {
      id: i++,
      type: 'albums',
      filePath: './albums/chronologicon.pdf',
      title: 'Le chronologicon',
      pdfFile : chronologicon
    }
    var pdfEco = {
      id: i++,
      type: 'albums',
      filePath: './albums/economicon.pdf',
      title: 'L\' économicon',
      pdfFile : economicon
    }
    var pdfEnerg = {
      id: i++,
      type: 'albums',
      filePath: './albums/energetiquementVotre.pdf',
      title: 'Ènergetiquement Vôtre',
      pdfFile : energetiquementVotre
    }
    var pdfGeo = {
      id: i++,
      type: 'albums',
      filePath: './albums/geometricon.pdf',
      title: 'Le géometricon',
      pdfFile : geometricon
    }
    var pdfJoyeuseApo = {
      id: i++,
      type: 'albums',
      filePath: './albums/joyeuseApo.pdf',
      title: 'Joyeuse apocalypse',
      pdfFile : joyeuseApo
    }
    var pdfMecaVol = {
      id: i++,
      type: 'albums',
      filePath: './albums/mecavol.pdf',
      title: 'Mécavol',
      pdfFile : mecavol
    }
    var pdfMilleEtUneNuits = {
      id: i++,
      type: 'albums',
      filePath: './albums/milleEtUnenuits.pdf',
      title: 'Les 1001 nuits scientifiques',
      pdfFile : milleEtUnenuits
    }
    var pdfMurSilence = {
      id: i++,
      type: 'albums',
      filePath: './albums/murDuSilence.pdf',
      title: 'Le mur du silence',
      pdfFile : murDuSilence
    }
    var pdfPourQqesAmperes = {
      id: i++,
      type: 'albums',
      filePath: './albums/pourQqesAmperesDePlus.pdf',
      title: 'Pour quelques ampères de plus',
      pdfFile : pourQqesAmperesDePlus
    }
    var pdfTopo = {
      id: i++,
      type: 'albums',
      filePath: './albums/topologicon.pdf',
      title: 'Le topologicon',
      pdfFile : topologicon
    }
    var pdfToutEstRelatif = {
      id: i++,
      type: 'albums',
      filePath: './albums/toutEstRelatif.pdf',
      title: 'Tout est relatif',
      pdfFile : toutEstRelatif
    }
    var pdfTrouNoir = {
      id: i++,
      type: 'albums',
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
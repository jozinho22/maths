import nbOr from './courses/nbOr.pdf';
import exos1 from './courses/exos1.pdf';
import base from './courses/base.pdf';

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

    var pdfNbOr = {
      id: i++,
      relativePath: 'nbOr',
      filePath: './courses/nbOr.pdf',
      title: 'Le nombre d\'or',
      pdfFile : nbOr
    }
    var pdfExos1 = {
      id: i++,
      relativePath: 'exos1',
      filePath: './courses/exos1.pdf',
      title: 'Feuille d\'exos 1',
      pdfFile : exos1
    }
    var pdfBase = {
      id: i++,
      relativePath: 'base',
      filePath: './courses/base.pdf',
      title: 'Test 1 feuille',
      pdfFile : base
    }

    pdfItems.push(
      pdfNbOr,
      pdfExos1,
      pdfBase
    );

    var pdfAspi = {
      id: i++,
      relativePath: 'aspirisouffle',
      filePath: './albums/aspirisouffle.pdf',
      title: 'L\'aspirisouffle',
      pdfFile : aspirisouffle
    }
    var pdfBigBang = {
      id: i++,
      relativePath: 'big-bang',
      filePath: './albums/bigBang.pdf',
      title: 'Le Big Bang',
      pdfFile : bigBang
    }
    var pdfChrono = {
      id: i++,
      relativePath: 'chronologicon',
      filePath: './albums/chronologicon.pdf',
      title: 'Le chronologicon',
      pdfFile : chronologicon
    }
    var pdfEco = {
      id: i++,
      relativePath: 'economicon',
      filePath: './albums/economicon.pdf',
      title: 'L\' économicon',
      pdfFile : economicon
    }
    var pdfEnerg = {
      id: i++,
      relativePath: 'energetiquement-votre',
      filePath: './albums/energetiquementVotre.pdf',
      title: 'Ènergetiquement Vôtre',
      pdfFile : energetiquementVotre
    }
    var pdfGeo = {
      id: i++,
      relativePath: 'geometricon',
      filePath: './albums/geometricon.pdf',
      title: 'Le géometricon',
      pdfFile : geometricon
    }
    var pdfJoyeuseApo = {
      id: i++,
      relativePath: 'joyeuse-apocalypse',
      filePath: './albums/joyeuseApo.pdf',
      title: 'Joyeuse apocalypse',
      pdfFile : joyeuseApo
    }
    var pdfMecaVol = {
      id: i++,
      relativePath: 'mecavol',
      filePath: './albums/mecavol.pdf',
      title: 'Mécavol',
      pdfFile : mecavol
    }
    var pdfMilleEtUneNuits = {
      id: i++,
      relativePath: 'mille-et-une-nuits-scientifiques',
      filePath: './albums/milleEtUnenuits.pdf',
      title: 'Les 1001 nuits scientifiques',
      pdfFile : milleEtUnenuits
    }
    var pdfMurSilence = {
      id: i++,
      relativePath: 'le-mur-du-silence',
      filePath: './albums/murDuSilence.pdf',
      title: 'Le mur du silence',
      pdfFile : murDuSilence
    }
    var pdfPourQqesAmperes = {
      id: i++,
      relativePath: 'pour-quelques-amperes-de-plus',
      filePath: './albums/pourQqesAmperesDePlus.pdf',
      title: 'Pour quelques ampères de plus',
      pdfFile : pourQqesAmperesDePlus
    }
    var pdfTopo = {
      id: i++,
      relativePath: 'le-topologicon',
      filePath: './albums/topologicon.pdf',
      title: 'Le topologicon',
      pdfFile : topologicon
    }
    var pdfToutEstRelatif = {
      id: i++,
      relativePath: 'tout-est-relatif',
      filePath: './albums/toutEstRelatif.pdf',
      title: 'Tout est relatif',
      pdfFile : toutEstRelatif
    }
    var pdfTrouNoir = {
      id: i++,
      relativePath: 'le-trou-noir',
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
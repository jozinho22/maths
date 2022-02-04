import chronologicon from './albums/chronologicon.pdf';
import economicon from './albums/economicon.pdf';
import geometricon from './albums/geometricon.pdf';
/* import murDuSilence from './albums/murDuSilence.pdf';
import topologicon from './albums/topologicon.pdf'; */

function pdfAlbumsBuilder() {

    var pdfItems = [];

    var pdfChrono = {
      id: 0,
      relativePath: 'chronologicon',
      filePath: './albums/chronologicon.pdf',
      title: 'Le chronologicon',
      pdfFile : chronologicon
    }
    var pdfEco = {
      id: 1,
      relativePath: 'economicon',
      filePath: './albums/economicon.pdf',
      title: 'L\' économicon',
      pdfFile : economicon
    }
    var pdfGeo = {
      id: 2,
      relativePath: 'geometricon',
      filePath: './albums/geometricon.pdf',
      title: 'Le géometricon',
      pdfFile : geometricon
    }
    
    pdfItems.push(pdfChrono, pdfEco, pdfGeo);

    return pdfItems;

}

export default pdfAlbumsBuilder;
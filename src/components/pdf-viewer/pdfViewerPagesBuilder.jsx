import nbOr from './files/nbOr.pdf';
import exos1 from './files/exos1.pdf';
import base from './files/base.pdf';

function pdfViewerPagesBuilder() {

    var pdfItems = [];

    var pdfNbOr = {
      id: 0,
      relativePath: 'nbOr',
      filePath: './files/nbOr.pdf',
      title: 'Le nombre d\'or',
      pdfFile : nbOr
    }
    var pdfExos1 = {
      id: 1,
      relativePath: 'exos1',
      filePath: './files/exos1.pdf',
      title: 'Feuille d\'exos 1',
      pdfFile : exos1
    }
    var pdfBase = {
      id: 2,
      relativePath: 'base',
      filePath: './files/base.pdf',
      title: 'Test 1 feuille',
      pdfFile : base
    }
  
    pdfItems.push(pdfNbOr, pdfExos1, pdfBase);

    return pdfItems;

}

export default pdfViewerPagesBuilder;
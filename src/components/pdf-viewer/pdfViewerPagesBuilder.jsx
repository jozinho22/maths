function pdfViewerPagesBuilder() {

    var pdfItems = [];

    var pdfNbOr = {
      id: 0,
      relativePath: 'nbOr',
      filePath: './files/nbOr.pdf',
      title: 'Le nombre d\'or'
    }
    var pdfExos1 = {
      id: 1,
      relativePath: 'exos1',
      filePath: './files/exos1.pdf',
      title: 'Feuille d\'exos 1'
    }
  
    pdfItems.push(pdfNbOr, pdfExos1);

    return pdfItems;

}

export default pdfViewerPagesBuilder;
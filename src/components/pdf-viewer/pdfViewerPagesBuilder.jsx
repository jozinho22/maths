function pdfViewerPagesBuilder() {

    var pdfItems = [];

    var pdfNbOr = {
      id: 1,
      relativePath: 'nbOr',
      filePath: './files/nbOr.pdf',
      title: 'Le nombre d\'or'
    }
    var pdfNbPi = {
      id: 2,
      relativePath: 'nbPi',
      filePath: './files/nbPi.pdf',
      title: 'Le nombre Pi'
    }
  
    pdfItems.push(pdfNbOr, pdfNbPi);

    return pdfItems;

}

export default pdfViewerPagesBuilder;
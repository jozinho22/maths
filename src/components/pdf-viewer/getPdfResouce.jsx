function getPdfResouce(pdfInfos, relativePath) {

    var id = undefined;
    for(var k = 0; k < pdfInfos.length ; k++) {
      if(pdfInfos[k].relativePath === relativePath) {
        id = pdfInfos[k].id;
      }
    }

    return pdfInfos[id].pdfFile;
}

export default getPdfResouce;

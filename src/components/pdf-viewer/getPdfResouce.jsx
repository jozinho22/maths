import nbOr from './files/nbOr.pdf';
import exos1 from './files/exos1.pdf';

function getPdfResouce(pdfInfos, relativePath) {

    console.log('getPdfResouce')
    console.log(pdfInfos)
    console.log(relativePath)


    var id = undefined;
    for(var k = 0; k < pdfInfos.length ; k++) {
      if(pdfInfos[k].relativePath === relativePath) {
        id = pdfInfos[k].id;
      }
    }

    if(id === 0) {
      return nbOr;
    } else if(id === 1) {
      return exos1;
    }
}

export default getPdfResouce;

import nbOr from './files/nbOr.pdf';
import nbPi from './files/nbPi.pdf';

function getPdfResouce(pdfInfos, relativePath) {

  console.log('getPdfResouce')
  console.log(pdfInfos)
  console.log(relativePath)


    var filePath = '';
    for(var k = 0; k < pdfInfos.length ; k++) {
      if(pdfInfos[k].relativePath === relativePath) {
        filePath = pdfInfos[k].filePath;
      }
    }

    return nbOr;

}

export default getPdfResouce;

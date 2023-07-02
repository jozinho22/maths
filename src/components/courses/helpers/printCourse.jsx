import { useReactToPrint } from 'react-to-print';
import pageStyle from '../helpers/pageStyle'; 

const printCourse = () => {

    var catchedDiv = {};

    const buildElementToPrint = () => {

        var entirePage = document.querySelector("#capture").cloneNode(true);
        document.getElementById("doc-to-print").appendChild(entirePage);

        catchedDiv = document.getElementById("doc-to-print");
        catchedDiv.getElementsByClassName("CustomHeader")[0].remove();
        catchedDiv.getElementsByClassName("FlexButton")[0].remove();
        catchedDiv.getElementsByClassName("row")[0].remove();
        catchedDiv.getElementsByClassName("row")[0].remove();
        catchedDiv.getElementsByClassName("printer-button")[0].remove();
        catchedDiv.getElementsByClassName("CustomFooter")[0].remove();

        return catchedDiv.getElementsByClassName("App")[0];

    }

    const destroyElementToPrint = () => {
        catchedDiv.getElementsByClassName("App")[0].remove();
    }

    useReactToPrint(
        {
            content: () => buildElementToPrint(), 
            pageStyle: pageStyle(),
            documentTitle:`${courseItem.title} - ${chapter.title}`,
            onAfterPrint: () => destroyElementToPrint()
        }
    ); 

}

export default printCourse;
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import HiddenTitle from '../immutable/seo/HiddenTitle';
import Constants from '../immutable/Constants';
import { NavLink } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import pageStyle from '../helpers/pageStyle';

import './GenericChapter.css';

const GenericChapter = ( {chapter, courseItem} ) => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const print = useReactToPrint(
        {
            content: () => buildElementToPrint(), 
            pageStyle: pageStyle(),
            documentTitle:`${courseItem.title} - ${chapter.title}`,
            onAfterPrint: () => destroyElementToPrint()
        }
    );

    return (
        <>
            <CustomHelmet title={chapter.title} metaContent={chapter.metaContent} canonicalUrl={`${Constants.WEB_APP_URL}/cours/${courseItem.relativePath}/${chapter.relativePath}`}/>
            <HiddenTitle title={chapter.hiddenTitle} /> 
            
            <div className="FlexButton">
                <NavLink to={`/cours/${courseItem.relativePath}`}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire des chapitres
                    </Button> 
                </NavLink>
            </div> 

            {/* <Button variant="warning" className="printer-button" onClick={print}>
                PDF
            </Button> */}
                     
            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />
            
            <Container id="capture">
                {/* <p className="MainTitle">{`Cours : ${courseItem.title}`}</p> */}
                <p className="MainTitle">{`Chapitre ${chapter.id + 1} : ${chapter.title}`}</p>
                <div className="CoursesContainer">
                    {chapter.component}        
                </div>
            </Container>  

            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />     
        </>
    );
}

export default GenericChapter;
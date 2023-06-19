import PagesConstants from "../immutable/nav/PagesConstants";
import coursesResourceBuilder from "../courses/helpers/coursesResourceBuilder";
import pdfResourceBuilder from "../pdf-viewer/helpers/pdfResourceBuilder";
import gamesResourceBuilder from "../games/helpers/gamesResourceBuilder";

const verifyUrlCountInApp = () => {

    var courseItems = coursesResourceBuilder();
    var pdfItems = pdfResourceBuilder();
    var gameItems = gamesResourceBuilder();

    var urlsInApp = []
    for(var key of Object.keys(PagesConstants)) {
        urlsInApp.push(PagesConstants[key])
    }  
    for(var course of courseItems) {
        urlsInApp.push(course.relativePath)
        for(var chapter of course.chapters) {
            urlsInApp.push(`${course.relativePath}${chapter.relativePath}`)
        }
    } 
    for(var pdf of pdfItems) {
        urlsInApp.push(`${PagesConstants.BDS_DE_JPP}${pdf.relativePath}`)
    } 
    for(var game of gameItems) {
        urlsInApp.push(`${PagesConstants.JEUX}${game.relativePath}`)
    } 

    console.log("urls in App : ")
    console.log(urlsInApp.length)
    /* console.log(urlsInApp) */
    console.log("---------------")

}

export default verifyUrlCountInApp;
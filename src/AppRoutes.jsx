import { Route, Routes } from 'react-router-dom';
import CoursesTableOfContents from './components/courses/CoursesTableOfContents';
import ChaptersTableOfContents from './components/courses/ChaptersTableOfContents';
import GenericChapter from './components/courses/GenericChapter';
import LesFonctionsUsuelles from './components/courses/usual-functions/LesFonctionsUsuelles';
import PdfTableOfContents from './components/pdf-viewer/PdfTableOfContents';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import GamesTableOfContents from './components/games/GamesTableOfContents';
import Links from './components/links/Links';
import Contact from './components/contact/Contact';
import Error from './components/immutable/Error';

const AppRoutes = ( {courseItems, pdfItems, gameItems} ) => {

    console.log(courseItems)
    return  <Routes>
                <Route exact path="/" element={<CoursesTableOfContents courseItems={courseItems} />} />
                <Route path="/cours" element={<CoursesTableOfContents courseItems={courseItems} />} />
                {courseItems.map(courseItem => {
                    return <Route 
                                key={courseItem.id}
                                path={`/cours/${courseItem.relativePath}`}
                                element={<ChaptersTableOfContents courseItem={courseItem} />} />
                
                })}
                {courseItems.map(courseItem => (
                    courseItem.chapters.map(chapter => {
                        return <Route 
                                    key={chapter.id}
                                    path={`/cours/${courseItem.relativePath}/${chapter.relativePath}`}
                                    element={<GenericChapter chapter={chapter} courseItem={courseItem} />} />
                    })
                ))}
                <Route path="/cours/les-fonctions-usuelles" element={<LesFonctionsUsuelles />} />
                <Route path="/bds-de-jpp" element={<PdfTableOfContents pdfItems={pdfItems} />} />
                {pdfItems.map(pdfItem => (
                    <Route 
                        key={pdfItem.id}
                        path={`/bds-de-jpp/${pdfItem.relativePath}`}
                        element={<PDFViewerPage pdfItem={pdfItem} />} />
                ))}
                <Route path="/jeux" element={<GamesTableOfContents gameItems={gameItems} />} />
                {gameItems.map(gameItem => (
                    <Route 
                        key={gameItem.id}
                        path={`/jeux/${gameItem.relativePath}`}
                        element={gameItem.component} />
                ))}
                <Route path="/liens" element={<Links />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} status={404} />
            </Routes>
}

export default AppRoutes;
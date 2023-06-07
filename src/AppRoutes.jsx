import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import CoursesTableOfContents from './components/courses/CoursesTableOfContents';
import ChaptersTableOfContents from './components/courses/ChaptersTableOfContents';
import GenericChapter from './components/courses/GenericChapter';
import PdfTableOfContents from './components/pdf-viewer/PdfTableOfContents';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import GamesTableOfContents from './components/games/GamesTableOfContents';
import Links from './components/links/Links';
import VCard from './components/contact/VCard';
import Error from './components/immutable/Error';

import pathBuilder from './components/helpers/pathBuilder';

const AppRoutes = ( {courseItems, pdfItems, gameItems} ) => {



    return  <Routes>
            
                <Route exact path={pathBuilder("/")} element={<Home />} />
                <Route path={pathBuilder("/cours")} element={<CoursesTableOfContents courseItems={courseItems} />} />
                {courseItems.map(courseItem => {
                    return  <Route 
                                key={courseItem.id}
                                path={pathBuilder(`/cours/${courseItem.relativePath}`)} 
                                element={<ChaptersTableOfContents courseItem={courseItem} />} />
                
                })}
                {courseItems.map(courseItem => (
                    courseItem.chapters.map(chapter => {
                        return  <Route 
                                    key={chapter.id}
                                    path={pathBuilder(`/cours/${courseItem.relativePath}/${chapter.relativePath}`)} 
                                    element={<GenericChapter chapter={chapter} courseItem={courseItem} />} />
                    })
                ))}
                <Route path={pathBuilder("/bds-de-jpp")} element={<PdfTableOfContents pdfItems={pdfItems} />} />
                {pdfItems.map(pdfItem => (
                    <Route 
                        key={pdfItem.id}
                        path={pathBuilder(`/bds-de-jpp/${pdfItem.relativePath}`)}
                        element={<PDFViewerPage pdfItem={pdfItem} />} />
                ))}
                <Route path="/jeux" element={<GamesTableOfContents gameItems={gameItems} />} />
                {gameItems.map(gameItem => (
                    <Route 
                        key={gameItem.id}
                        path={pathBuilder(`/jeux/${gameItem.relativePath}`)}
                        element={gameItem.component} />
                ))}
                <Route path={pathBuilder("/liens")} element={<Links />} />
                <Route path={pathBuilder("/contact")} element={<VCard />} />
                <Route path={pathBuilder("*")} element={<Error />} status={404} />
            </Routes>
}

export default AppRoutes;
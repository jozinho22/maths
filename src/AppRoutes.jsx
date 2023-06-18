import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import CoursesTableOfContents from './components/courses/helpers/CoursesTableOfContents';
import ChaptersTableOfContents from './components/courses/helpers/ChaptersTableOfContents';
import GenericChapter from './components/courses/GenericChapter';
import PdfTableOfContents from './components/pdf-viewer/helpers/PdfTableOfContents';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import GamesTableOfContents from './components/games/helpers/GamesTableOfContents';
import Links from './components/links/Links';
import VCard from './components/contact/VCard';
import Error from './components/immutable/Error';

import PagesConstants from './components/immutable/nav/PagesConstants';
import pathBuilder from './components/helpers/pathBuilder';

const AppRoutes = ( {courseItems, pdfItems, gameItems} ) => {

    return  <Routes>
                <Route exact path={pathBuilder("/")} element={process.env.NODE_ENV === 'development' ?  <Home /> : <Home />} />
                <Route path={pathBuilder(PagesConstants.COURS)} element={<CoursesTableOfContents courseItems={courseItems} />} />
                {courseItems.map(courseItem => {
                    return  <Route 
                                key={courseItem.id}
                                path={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}`)} 
                                element={<ChaptersTableOfContents courseItem={courseItem} />} />
                
                })}
                {courseItems.map(courseItem => (
                    courseItem.chapters.map(chapter => {
                        return  <Route 
                                    key={chapter.id}
                                    path={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}`)} 
                                    element={<GenericChapter chapter={chapter} courseItem={courseItem} />} />
                    })
                ))}
                <Route path={pathBuilder(PagesConstants.BDS_DE_JPP)} element={<PdfTableOfContents pdfItems={pdfItems} />} />
                {pdfItems.map(pdfItem => (
                    <Route 
                        key={pdfItem.id}
                        path={pathBuilder(`${PagesConstants.BDS_DE_JPP}${pdfItem.relativePath}`)}
                        element={<PDFViewerPage pdfItem={pdfItem} />} />
                ))}
                <Route path={pathBuilder(PagesConstants.JEUX)} element={<GamesTableOfContents gameItems={gameItems} />} />
                {gameItems.map(gameItem => (
                    <Route 
                        key={gameItem.id}
                        path={pathBuilder(`${PagesConstants.JEUX}${gameItem.relativePath}`)}
                        element={gameItem.component} />
                ))}
                <Route path={pathBuilder(PagesConstants.LIENS)} element={<Links />} />
                <Route path={pathBuilder(PagesConstants.CONTACT)} element={<VCard />} />
                <Route path={pathBuilder("*")} element={<Error />} status={404} />
            </Routes>
}

export default AppRoutes;
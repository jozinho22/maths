import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import CoursesTableOfContents from './components/courses/CoursesTableOfContents';
import ChaptersTableOfContents from './components/courses/ChaptersTableOfContents';
import GenericChapter from './components/courses/GenericChapter';
import PdfTableOfContents from './components/pdf-viewer/PdfTableOfContents';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import GamesTableOfContents from './components/games/GamesTableOfContents';
import Links from './components/links/Links';
/* import VCard from './components/contact/VCard'; */
import Error from './components/immutable/Error';

import PagesConstants from './components/immutable/nav/PagesConstants';
import pathBuilder from './components/helpers/pathBuilder';
import UnderChaptersTableOfContents from './components/courses/UnderChaptersTableOfContents';
/* import GenericUnderChapter from './components/courses/GenericUnderChapter'; */

const AppRoutes = ( {courseItems, pdfItems, gameItems} ) => {

    var filteredCourseItems = courseItems.filter(c => c.relativePath)

    filteredCourseItems.chapters = filteredCourseItems.map(c => {
        c.chapters.filter(ch => ch.relativePath)
    })
    
    var filteredPdfItems = pdfItems.filter(p => p.relativePath)
    
    return  <Routes>
                <Route exact path={pathBuilder("/")} element={process.env.NODE_ENV === 'development' ?  <Home /> : <Home />} />
                <Route path={pathBuilder(PagesConstants.COURS)} element={<CoursesTableOfContents courseItems={courseItems} />} />
                {/* Index cours */}
                {filteredCourseItems.map(courseItem => {
                    return  <Route 
                                key={`course-${courseItem.id}`}
                                path={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}`)} 
                                element={<ChaptersTableOfContents courseItem={courseItem} />} /> 
                    
                })}
                {/* Index chapitres */}
                {filteredCourseItems.map(courseItem => {
                    return courseItem.chapters.map(chapter => {
                        return <Route 
                                    key={`course-${courseItem.id}-chapter-${chapter.id}`}
                                    path={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}`)} 
                                    element={!courseItem.underChapters ?  
                                                <GenericChapter chapter={chapter} courseItem={courseItem} />
                                                    :  <UnderChaptersTableOfContents chapter={chapter} courseItem={courseItem} />
                                            } 
                                />
                    }) 
                })}
                {/* Index sous-chapitres */}
                {/* {courseItems.map(courseItem => {
                    if(courseItem.underChapters) {
                        return courseItem.chapters.map(chapter => {
                            return chapter.underChapters.map(underChapter => {
                                return  <Route 
                                            key={`course-${courseItem.id}-chapter-${chapter.id}-underchapter-${underChapter.id}`}
                                            path={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}${underChapter.relativePath}`)} 
                                            element={<GenericUnderChapter underChapter={underChapter} chapter={chapter} courseItem={courseItem} />} />
                            })
                        })
                    }
                })} */}
                    
                <Route path={pathBuilder(PagesConstants.BDS_DE_JPP)} element={<PdfTableOfContents pdfItems={pdfItems} />} />
                {filteredPdfItems.map(pdfItem => (
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
                {/* <Route path={pathBuilder(PagesConstants.CONTACT)} element={<VCard />} /> */}
                <Route path={pathBuilder("*")} element={<Error />} status={404} />
            </Routes>
}

export default AppRoutes;
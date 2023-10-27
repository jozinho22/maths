import React from 'react';
import Home from './components/home/Home';
import CoursesTableOfContents from './components/courses/CoursesTableOfContents';
import ChaptersTableOfContents from './components/courses/ChaptersTableOfContents';
import GenericChapter from './components/courses/GenericChapter';
import PdfTableOfContents from './components/pdf-viewer/PdfTableOfContents';
import PDFViewerPage from './components/pdf-viewer/PDFViewerPage';
import GamesTableOfContents from './components/games/GamesTableOfContents';
import Links from './components/links/Links';
import Error from './components/immutable/Error';

import PagesConstants from './components/immutable/nav/PagesConstants';
import Presentation from './components/courses/sequences/chapters/Presentation';
import UnderChaptersTableOfContents from './components/courses/UnderChaptersTableOfContents';
/* import GenericUnderChapter from './components/courses/GenericUnderChapter'; */

import { createHashRouter } from 'react-router-dom';

const useRouter = (courseItems, pdfItems, gameItems) => {

    const router = createHashRouter(
        [
            {
                path: "/",
                children : [
                    /* Index */
                    {
                        path: "",
                        element: process.env.NODE_ENV === 'development' ?  <Presentation /> : <Home />
                    },
                    /* Index de tous les cours */
                    {
                        path: PagesConstants.COURS,
                        element: <CoursesTableOfContents courseItems={courseItems} />
                    },
                    /* Index d'un cours */
                    courseItems.map(courseItem => {
                        return  {
                                    path: `${PagesConstants.COURS}${courseItem.relativePath}`,
                                    element: <ChaptersTableOfContents courseItem={courseItem} />
                                }
                    }),
                    /* Index des chapitres */
                    courseItems.map(courseItem => {
                        return courseItem.chapters.map(chapter => {
                            return  {
                                        path: `${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}`,
                                        element: !courseItem.underChapters ?  
                                            <GenericChapter chapter={chapter} courseItem={courseItem} />
                                                :  <UnderChaptersTableOfContents chapter={chapter} courseItem={courseItem} />              
                                    }
                        })
                    }),
                    /* Index des sous-chapitres */
                    /* courseItems.map(courseItem => {
                        if(courseItem.underChapters) {
                            return courseItem.chapters.map(chapter => {
                                return chapter.underChapters.map(underChapter => {
                                    return {
                                                path: `${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}${underChapter.relativePath}`,
                                                element: <GenericUnderChapter underChapter={underChapter} chapter={chapter} courseItem={courseItem} />
                                            }
                                })
                            })
                        }
                    }), */
                    /* Index de toutes les bds */
                    {
                        path: PagesConstants.BDS_DE_JPP,
                        element: <PdfTableOfContents pdfItems={pdfItems} />
                    },
                        /* chaque bd */
                    pdfItems.map(pdfItem => {
                        return  {
                                    path: `${PagesConstants.BDS_DE_JPP}${pdfItem.relativePath}`,
                                    element: <PDFViewerPage pdfItem={pdfItem} />
                                }
                    }),
                    /* Index de tous les jeux */
                    {
                        path: PagesConstants.JEUX,
                        element: <GamesTableOfContents gameItems={gameItems} />
                    },
                    /* Chaque jeu */
                    gameItems.map(gameItem => {
                        return  {
                                    path: `${PagesConstants.JEUX}${gameItem.relativePath}`,
                                    element:  gameItem.component
                                }
                    }),
                    /* Liens */
                    {
                        path: PagesConstants.LIENS,
                        element: <Links />
                    }   
                ],
                errorElement: <Error />,
            }
        ]
    );
    return router;
};

export default useRouter;
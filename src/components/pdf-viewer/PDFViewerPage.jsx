import React from 'react';

import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import PDF from "react-pdf-js";
import PaginationPageByPage from './PaginationPageByPage';
import PaginationFullDocument from './PaginationFullDocument';
import AppContext from '../context/AppContext'

import Link from '../immutable/nav/Link';
import CoursesLinks from '../courses/CoursesLinks';

import { useSwipeable } from 'react-swipeable';

import './PDFViewerPage.css';
import './styles/Canevas.css';

const PDFViewerPage = ({ pdfItem }) => {

    const PDFViewer = () => {

        const [page, setPage] = React.useState(1);
        const [pages, setPages] = React.useState(1);
        const [pagesList, setPagesList] = React.useState([]);

        const [pageByPageDocument, setPageByPageDocument] = React.useState(true);
        const [beginIndex, setBeginIndex] = React.useState(0);

        const [withAnswers, setWithAnswers] = React.useState(false);
        const step = 5;

        const {updatePlayMode} = React.useContext(AppContext);

        const swipers = useSwipeable(
            {
                onSwipedRight: () =>  {setPage(page - 1 > 0 ? page - 1 : 1);},
                onSwipedLeft: () =>  {setPage(page + 1 > pages ? pages : page + 1);}
            }
        );

         // setup ref for your usage
        const swipeRef = React.useRef();

        const refPassthrough = (el) => {
            // call useSwipeable ref prop with el
            swipers.ref(el);

            // set myRef el so you can access it yourself
            swipeRef.current = el;
        }

        var width = document.body.offsetWidth
        var mobile = width < 450;

        function addPagesToList(begin) {
            var list = [];

            for(var k = begin; 
                k < (begin + step > pages ? pages : begin + step); 
                k++) {
                        list.push(
                          {
                            id: k,
                            pageNumber: k + 1
                          }
                        );
            }
            setPagesList(list);
            setBeginIndex(begin);
        }

        function switchView() {
            if(pageByPageDocument) {
                addPagesToList(findClosest(page));
            } else {
                setPage(beginIndex);
            }
            setPageByPageDocument(!pageByPageDocument);
        }

        function findClosest(page) {  
            return page - (page % step);
        }

        function undoPlayMode() {
            updatePlayMode(false);
        }

        React.useEffect(() => {
            updatePlayMode(true);
        });

        React.useEffect(() => {
            window.scrollTo(0, 0);
        }, [page, pagesList]);

        return (
          <> 
            <NavLink to={"/"}>
                <Button className="DefaultButton ReturnHomeButton" onClick={() => undoPlayMode()}>
                    Home
                </Button>
            </NavLink>
            <NavLink to={"/bds-de-jpp"} onClick={() => undoPlayMode()}>
                <Button className="DefaultButton UnPlayModeButton" >
                    Toutes les BDs
                </Button>
            </NavLink>
                   
            {
                !mobile ?
                    <Container className="SwitchButton">
                        <BootstrapSwitchButton 
                            size="lg" 
                            onlabel={`Par ${step} pages`}
                            onstyle='primary'
                            offlabel={`Page par page`}
                            offstyle='warning'
                            style={'w-50 mx-3'}
                            onChange={() => switchView()} />  
                    </Container>
                        : <></>

            }
          
            <h3 className="Title PdfTitle">{pdfItem.title}</h3>

            {
                pdfItem.type === 'courses' ?
                    <Container className="SwitchButton">
                        <BootstrapSwitchButton 
                            size="lg" 
                            onlabel={`Masquer les réponses`}
                            onstyle='success'
                            offlabel={`Afficher les réponses`}
                            offstyle='danger'
                            style={'w-50 mx-3'}
                            onChange={() => setWithAnswers(!withAnswers)} />  
                    </Container>
                        : <></>
            }

            {
                pageByPageDocument ?

                    <>
                        {
                            mobile ?
                                <div className="PagesMobile">page : {page} / {pages}</div>
                                    : <PaginationPageByPage
                                            page={page}
                                            pages={pages} 
                                            setPage={setPage} />
                        }
                        <div {...swipers} ref={refPassthrough} >
                            <PDF 
                                className="CustomCanevas"
                                file={pdfItem.pdfFile}
                                page={page}
                                onDocumentComplete={pages => {
                                    setPage(beginIndex + 1);
                                    setPages(pages);
                                }} />
                        </div>   
                        {
                            mobile ?
                                <></>
                                    :   <PaginationPageByPage
                                            page={page}
                                            pages={pages} 
                                            setPage={setPage} />                 
                        }
                    </> :

                        <>
                            <PaginationFullDocument 
                                pages={pages}
                                beginIndex={beginIndex} 
                                step={step} 
                                addPagesToList={addPagesToList} />
                            {
                                pagesList.map(item => (
                                    <PDF 
                                        key={item.id}
                                        className="CustomCanevas"
                                        file={pdfItem.pdfFile}
                                        page={item.pageNumber}
                                        onDocumentComplete={() => {
                                        }} />
                                ))
                            }
                            <PaginationFullDocument 
                                pages={pages}
                                beginIndex={beginIndex} 
                                step={step}
                                addPagesToList={addPagesToList} />
                        </>
                }

                <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <Link link={CoursesLinks.SAVOIR_SANS_FRONTIERES} >toutes ses BDs</Link></p>     
          </>     
        );
      }

    return (
            <PDFViewer />
          );
}

export default PDFViewerPage;
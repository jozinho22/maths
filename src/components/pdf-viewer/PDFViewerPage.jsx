import React from 'react';

import { Container } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import PDF from "react-pdf-js";
import PaginationPageByPage from './PaginationPageByPage';
import PaginationFullDocument from './PaginationFullDocument';

import CustomSpinner from '../general-content/CustomSpinner';

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

        return (
          <> 
              <h3 className="Title">{pdfItem.title}</h3>
              <Container className="SwitchButton">
                  <BootstrapSwitchButton 
                      size="lg" 
                      onlabel={`Par ${step} pages`}
                      onstyle='primary'
                      offlabel={`Page par page`}
                      offstyle='warning'
                      style='w-50 mx-3'
                      onChange={() => switchView()} />  
              </Container>

              {
                  pdfItem.type === 'courses' ?
                      <Container className="SwitchButton">
                          <BootstrapSwitchButton 
                              size="lg" 
                              onlabel={`Masquer les réponses`}
                              onstyle='success'
                              offlabel={`Afficher les réponses`}
                              offstyle='danger'
                              style='w-50 mx-3'
                              onChange={() => setWithAnswers(!withAnswers)} />  
                      </Container>
                          : <></>
              }

              {
                  pageByPageDocument ?
                    <>
                      <PaginationPageByPage
                          page={page}
                          pages={pages} 
                          setPage={setPage} />
                      <PDF 
                          className="CustomCanevas"
                          file={!withAnswers ? pdfItem.pdfFile : pdfItem.pdfFileWithAnswers}
                          page={page}
                          onDocumentComplete={pages => {
                              setPage(beginIndex + 1);
                              setPages(pages);
                          }} />
                      <PaginationPageByPage
                          page={page}
                          pages={pages} 
                          setPage={setPage} />
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
                                file={!withAnswers ? pdfItem.pdfFile : pdfItem.pdfFileWithAnswers}
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
          </>     
        );
      }

    return (
            <PDFViewer />
          );
}

export default PDFViewerPage;
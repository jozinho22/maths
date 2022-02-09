import { useState } from 'react';

import { Container, Button, Row, Col } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import PDF from "react-pdf-js";

import './PDFViewerPage.css';

const PDFViewerPage = ( { pdfItem } ) => {

    const PDFViewer = () => {

        const [page, setPage] = useState(1);
        const [pages, setPages] = useState(1);
        const [pagesList, setPagesList] = useState([]);

        const [pageByPageDocument, setPageByPageDocument] = useState(true);
        const [beginIndex, setBeginIndex] = useState(0);
        const step = 5;

        const PaginationPageByPage = () => {

            const BackButton = ({disabled}) => {
                return (
                  <Button 
                      className="DefaultButton"
                      disabled={disabled}                 
                      onClick={() => {
                        setPage(page - 1 > 0 ? page - 1 : 1);
                      }} >
                    Prev
                  </Button>
              );
            }

            const NextButton = ({disabled}) => {
                return (
                  <Button 
                      className="DefaultButton"
                      disabled={disabled}
                      onClick={() => {
                        setPage(page + 1 > pages ? pages : page + 1);
                      }} >
                    Next
                  </Button>
                );
            }

            return (
              <Row>
                <Col style={{textAlign:"right"}}>
                    {pages > 1 && page > 1 ?
                      <BackButton /> : 
                        <BackButton disabled={true} />
                    }
                </Col>
                <Col className="CenterText">
                      Page : {page} / {pages} 
                </Col>
                <Col style={{textAlign:"left"}}>
                    {pages > 1 && page < pages ?
                      <NextButton /> : 
                        <NextButton disabled={true} />
                    }
                </Col>
              </Row>
            );
        }

        const PaginationFullDocument = () => {

            const BackButton = ({disabled}) => {
              return (
                <Button 
                    className="DefaultButton"
                    disabled={disabled} 
                    onClick={() => {
                      if(beginIndex >= step) {
                        addPagesToList(beginIndex - step);
                      }
                    }} >
                  Prev
                </Button>
              );
            }

            const NextButton = ({disabled}) => {
                return (
                  <Button 
                      className="DefaultButton"
                      disabled={disabled}
                      onClick={() => {
                        if(beginIndex < pages) {
                          addPagesToList(beginIndex + step);
                        }
                      }} >
                    Next
                  </Button>
                );
            }

            return (
              <Row>
                <Col style={{textAlign:"right"}}>
                    {beginIndex > 0 ?
                      <BackButton /> : 
                        <BackButton disabled={true} />
                    }
                </Col>
                <Col className="CenterText">
                      <p>Pages : 
                      {beginIndex > pages ? 
                        pages : 
                            (beginIndex + 1) 
                            + ' - ' 
                            + ((beginIndex + step) < pages ? (beginIndex + step) : pages)
                      } 
                        / {pages} </p>
                </Col>
                <Col style={{textAlign:"left"}}>
                    {beginIndex + step < pages ?
                      <NextButton /> : 
                        <NextButton disabled={true} />
                    }
                </Col>
              </Row>
            );
        }

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
              <h3 className="PdfTitle Underline">{pdfItem.title}</h3>
              <Container className="SwitchButton">
                <BootstrapSwitchButton 
                  size="lg" 
                  onlabel={`Par ${step} pages`}
                  onstyle='primary'
                  offlabel={`Page par page`}
                  offstyle='success'
                  style='w-50 mx-3'
                  onChange={() => switchView()} />  
              </Container>

              {    
                  pageByPageDocument ?

                    <>
                      <PaginationPageByPage />
                      <PDF 
                        className="CustomCanevas"
                        file={pdfItem.pdfFile}
                        page={page}
                        onDocumentComplete={pages => {
                          setPage(beginIndex + 1);
                          setPages(pages);
                        }} />
                      <PaginationPageByPage />
                    </> :

                      <>
                        <PaginationFullDocument />
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
                        <PaginationFullDocument />
                      </>
                }
              
          </>     
        );
      };

    return (
            <PDFViewer />
        );
    }

export default PDFViewerPage;
import { Container, Button, Row, Col } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import PDF from "react-pdf-js";

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getPdfResouce from './getPdfResouce';

import './PDFViewerPage.css';

const PDFViewerPage = ( {pdfInfos} ) => {

    var {relativePath} = useParams();

    var filePath = getPdfResouce(pdfInfos, relativePath);

    const PDFViewer = () => {

        const [page, setPage] = useState(1);
        const [pages, setPages] = useState(1);
        const [pagesList, setPagesList] = useState([]);
        console.log(pagesList)

        const [pageByPageDocument, setPageByPageDocument] = useState(true);

        function switchView() {
          setPageByPageDocument(!pageByPageDocument);
          
          var list = [];
          for(var k = 0; k < pages; k++) {
            list.push(
              {
                id: k,
                pageNumber: k + 1
              }
            );
          }
          setPagesList(list);
        }

        var opacityClass = "";

        const PaginationPageByPage = () => {

          const BackButton = ({opacity}) => {

            if(opacity) {
              opacityClass = "Opacity";
            }

            return (
              <Button className={`DefaultButton ${opacityClass}`}
                  onClick={() => {
                    let newPage = page - 1;
                    newPage = newPage > 0 ? newPage : 1;
                    setPage(newPage);
                  }} >
                  Prev
              </Button>
            );
          }

          const NextButton = () => {
              return (
                <Button className={`DefaultButton ${opacityClass}`}
                    onClick={() => {
                      let newPage = page + 1;
                      newPage = newPage > pages ? pages : newPage;
                      setPage(newPage);
                    }} >
                    Next
                </Button>
              );
          }

          return (
            <Container className="Pagination">
              <Row>
                <Col style={{textAlign:"right"}}>
                    {pages > 1 ?
                      <BackButton /> : 
                        <BackButton opacity={true} />
                    }
                </Col>
                <Col className="CenterText">
                      Page : {page} / {pages} 
                </Col>
                <Col style={{textAlign:"left"}}>
                    {pages > 1 ?
                      <NextButton /> : 
                        <NextButton opacity={true} />
                    }
                </Col>
              </Row>
            </Container>
          );
        }

        const PaginationFullDocument = () => {

          return(
            <Container className="Pagination">
              <Row>

                <Col>
                  <Button className="DefaultButton Hidden" />
                </Col>
                <Col className="CenterText">
                  Pages : {pages} 
                </Col>
                <Col>
                  <Button className="DefaultButton Hidden" />
                </Col>
              </Row>
            </Container>
          )
        }

        return (
          <> 
              
              <Container className="SwitchButton">
                <BootstrapSwitchButton 
                  size="lg" 
                  onlabel='Page par page'
                  onstyle='primary'
                  offlabel='Document complet'
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
                    file={filePath}
                    page={page}
                    onDocumentComplete={pages => {
                      setPage(1);
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
                            file={filePath}
                            page={item.pageNumber} />
                        ))
                      }
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
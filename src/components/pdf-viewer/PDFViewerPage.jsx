import { Container, Button, Row, Col } from 'react-bootstrap';
import PDF from "react-pdf-js";

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getPdfResouce from './getPdfResouce';

import './PDFViewerPage.css';

const PDFViewerPage = ( {pdfInfos} ) => {

    var {relativePath} = useParams();

    console.log('getPdfResouce')
    console.log(pdfInfos)
    console.log(relativePath)

    var filePath = getPdfResouce(pdfInfos, relativePath);

    const PDFViewer = () => {
        const [page, setPage] = useState(1);
        const [pages, setPages] = useState(1);
      
        const renderPagination = () => {

          const BackButton = () => {
            return (
              <Button className="DefaultButton"
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
                <Button className="DefaultButton"
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
                    <BackButton />
                </Col>
                <Col className="CenterText">
                      Page: {page} / {pages} 
                </Col>
                <Col style={{textAlign:"left"}}>
                    <NextButton />
                </Col>
              </Row>
            </Container>
          );
        }

        let pagination = null;
        if (pages) {
          pagination = renderPagination();
        }

        const Pagination = () => {
          return (
            <>   
              {pagination}
            </>
          )
        }

        return (
          <>
            <Pagination />
            <PDF 
              className="CustomCanevas"
              file={filePath}
              page={page}
              onDocumentComplete={pages => {
                console.log(pages);
                setPages(pages);
                setPage(1);
              }} />
            <Pagination />
          </>
        );
      };

    return (
            <PDFViewer />
        );
    }

export default PDFViewerPage;
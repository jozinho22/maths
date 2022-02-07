import { Container, Button, Row, Col } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import PDF from "react-pdf-js";

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getPdfResouce from './getPdfResouce';

import './PDFViewerPage.css';
import CustomSpinner from '../general-content/CustomSpinner';


const PDFViewerPage = ( {pdfInfos} ) => {

    var {relativePath} = useParams();

    var filePath = getPdfResouce(pdfInfos, relativePath);

    const PDFViewer = () => {

        const [page, setPage] = useState(1);
        const [pages, setPages] = useState(1);
        const [pagesList, setPagesList] = useState([]);

        const [pageByPageDocument, setPageByPageDocument] = useState(true);
        const [beginIndex, setBeginIndex] = useState(0);
        const step = 10;

        var opacityClass = "Opacity";

        const PaginationPageByPage = () => {

          const BackButton = ({opacity}) => {

            return (
              <Button className={`DefaultButton ${opacity ? opacityClass : ''}`}
                  onClick={() => {
                    let newPage = page - 1;
                    newPage = newPage > 0 ? newPage : 1;
                    setPage(newPage);
                  }} >
                  Prev
              </Button>
            );
          }

          const NextButton = ({opacity}) => {
              return (
                <Button className={`DefaultButton ${opacity ? opacityClass : ''}`}
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
            <Row>
              <Col style={{textAlign:"right"}}>
                  {pages > 1 && page > 1 ?
                    <BackButton /> : 
                      <BackButton opacity={true} />
                  }
              </Col>
              <Col className="CenterText">
                    Page : {page} / {pages} 
              </Col>
              <Col style={{textAlign:"left"}}>
                  {pages > 1 && page < pages ?
                    <NextButton /> : 
                      <NextButton opacity={true} />
                  }
              </Col>
            </Row>
          );
        }

        const PaginationFullDocument = () => {

          const BackButton = ({opacity}) => {

            if(opacity) {
              opacityClass = "Opacity";
            }

            return (
              <Button className={`DefaultButton ${opacity ? opacityClass : ''}`}
                  onClick={() => {
                    console.log('beginIndex')
                    console.log(beginIndex)
                    if(beginIndex >= step) {
                      addPagesToList(beginIndex - step);
                      setBeginIndex(beginIndex - step);
                    }
                  }} >
                  Prev
              </Button>
            );
          }

          const NextButton = ({opacity}) => {
              return (
                <Button className={`DefaultButton ${opacity ? opacityClass : ''}`}
                    onClick={() => {
                      console.log('beginIndex')
                      console.log(beginIndex)
                      if(beginIndex < pages) {
                        addPagesToList(beginIndex + step);
                        setBeginIndex(beginIndex + step);
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
                      <BackButton opacity={true} />
                  }
              </Col>
              <Col className="CenterText">
                    Pages : 
                    {beginIndex > pages ? 
                      pages : 
                        beginIndex + step < pages ?
                          beginIndex + ' - ' + (beginIndex + step) :
                            beginIndex + ' - ' + (pages)
                    } 
                      / {pages} 
              </Col>
              <Col style={{textAlign:"left"}}>
                  {beginIndex < pages ?
                    <NextButton /> : 
                      <NextButton opacity={true} />
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
            addPagesToList(beginIndex);
          }
          setPageByPageDocument(!pageByPageDocument);
        }

        console.log('beginIndex')
        console.log(beginIndex)

        return (
          <> 
              
              <Container className="SwitchButton">
                <BootstrapSwitchButton 
                  size="lg" 
                  onlabel={`Page par page`}
                  onstyle='primary'
                  offlabel={`Par ${step} pages`}
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
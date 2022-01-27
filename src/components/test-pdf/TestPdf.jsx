import { Container } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import PDF from "react-pdf-js";


import { useState } from 'react';

import SinglePagePDFViewer from "./single-page";
import AllPagesPDFViewer from "./all-pages";

import nbOr from "./nbOr.pdf";

import "./TestPdf.css";


const TestPdf = () => {


    const PDFViewer = () => {
        const [page, setPage] = useState(1);
        const [pages, setPages] = useState(1);
      
        const renderPagination = () => {
          return (
            <>
              <button
                onClick={() => {
                  let newPage = page - 1;
                  newPage = newPage > 0 ? newPage : 1;
                  setPage(newPage);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  let newPage = page + 1;
                  newPage = newPage > pages ? pages : newPage;
                  setPage(newPage);
                }}
              >
                Next
              </button>
            </>
          );
        };
        let pagination = null;
        if (pages) {
          pagination = renderPagination();
        }
        return (
          <div style={{ height: "150px" }}>
            Page: {page} {pagination}
            <br />
            <PDF
              file={nbOr}
              page={page}
              onDocumentComplete={pages => {
                console.log(pages);
                setPages(pages);
                setPage(1);
              }}
            />
          </div>
        );
      };

    return (

        <Container className="RelativeContainer">
                <div className="ChocoTitle">TestPdf</div>
                <PDFViewer />
        </Container>     

        );
    }

export default TestPdf;
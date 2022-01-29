import { Container } from 'react-bootstrap';
import PDF from "react-pdf-js";

import { useState } from 'react';

import nbOr from "./nbOr.pdf";
import './PDFPageViewer.css';

const PDFPageViewer = () => {

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
          <div>

            Page: {page} of {pages} {pagination}
            <br /><br />

            <PDF
              file={nbOr}
              page={page}
              onDocumentComplete={pages => {
                console.log(pages);
                setPages(pages);
                setPage(1);
              }} />

              <br /><br />
              Page: {page} of {pages} {pagination}
              <br /><br />

          </div>
        );
      };

    return (

        <Container className="RelativeContainer">
            <h1> Bienvenue sur le site des maths pour tous !</h1>
            <PDFViewer />
        </Container>     

        );
    }

export default PDFPageViewer;
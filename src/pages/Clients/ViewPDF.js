import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import pdf from "./../../assets/pdf/django.pdf";
import { Col, Row, Form, Card, Button, Breadcrumb, InputGroup } from "@themesberg/react-bootstrap";


const styles = {
    page : {
        width : 100
    }
};


export default function ViewPDF() {
	
    pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });
        
    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
        <Card className="py-3 h-100">
            <div className="overflow-scroll">
                <Document
                    style={{height: "100vh", width: "100vw", display: "flex"}}
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>

            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="primary"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="mx-2"	
                        >Previous</Button>
                        <Button 
                            className="mx-2"
                            variant="primary"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        >Next</Button>
                    </div>
                </Col>
            </Row>
        </Card>
        </>
    );
}

import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import pdf from "./../../assets/pdf/django.pdf";
import { Col, Row, Form, Card, Button } from "@themesberg/react-bootstrap";



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




// import React, { Component } from 'react';
// import logger from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';

// const file = '../../'
// const type = 'pdf'

// class MyDocComponent extends Component {
//     render() {
//         return (
//             <FileViewer
//                 fileType={type}
//                 filePath={file}
//                 errorComponent={CustomErrorComponent}
//                 onError={this.onError} />
//         );
//     }

//     onError(e) {
//         logger.logError(e, 'error in file-viewer');
//     }
// }
// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function ViewPDF() {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div>
//             <Document
//                 file="../../assets/pdf/Table2.pdf"
//                 onLoadSuccess={onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={pageNumber} />
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//         </div>
//     );
// }
// export default ViewPDF;

// import { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer'

// const ViewPDF = () => {
//     const viewer = useRef(null);

//     useEffect(() => {
//         WebViewer(
//             {
//                 path: '/webviewer/lib',
//                 initialDoc: '/files/pdftron_about.pdf',
//             },
//             viewer.current,
//         ).then((instance) => {
//             const { documentViewer } = instance.Core;
//             // you can now call WebViewer APIs here...
//         });
//     }, []);

//     return (
//         <div className="MyComponent">
//             <div className="header">React sample</div>
//             <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
//         </div>
//     );
// };

// export default ViewPDF;
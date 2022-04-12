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
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function ViewPDF() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file="../../assets/pdf/Table2.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}
export default ViewPDF;

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
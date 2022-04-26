import img from "../assets/img/optimum/sample_doc.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave, faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Card, Container, Dropdown, Form, ButtonGroup, Breadcrumb, InputGroup } from '@themesberg/react-bootstrap';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    ShapeEditor,
    ImageLayer,
    DrawLayer,
    wrapShape,
} from 'react-shape-editor';



import { ScreenCapture } from 'react-screen-capture';

function arrayReplace(arr, index, item) {
    return [
        ...arr.slice(0, index),
        ...(Array.isArray(item) ? item : [item]),
        ...arr.slice(index + 1),
    ];
}

const RectShape = wrapShape(({ width, height }) => (
    <rect width={width} height={height} fill="rgba(0,0,255,0.5)" />
));

let idIterator = 1;
class DocumentInspect extends React.Component {
    state = {
        screenCapture: '',
    };

    handleScreenCapture = screenCapture => {
        this.setState({ screenCapture });
    };

    handleSave = () => {
        const screenCaptureSource = this.state.screenCapture;
        const downloadLink = document.createElement('a');
        const fileName = 'react-screen-capture.png';

        downloadLink.href = screenCaptureSource;
        downloadLink.download = fileName;
        downloadLink.click();
    };

    render() {
        const { screenCapture } = this.state;

        // const [items, setItems] = useState([
        //     // { id: '1', x: 20, y: 120, width: 145, height: 140 },
        //     // { id: '2', x: 15, y: 0, width: 150, height: 95 },
        // ]);
        // let [file, setFile] = useState(null);

        // const [{ vectorHeight, vectorWidth }, setVectorDimensions] = useState({
        //     vectorHeight: 0,
        //     vectorWidth: 0,
        // });

        // const uploadIconStyle = {
        //     display: 'inline',
        //     width: 500,
        //     height: 500,
        // };

        // const fileChangedHandler = (event) => {
        //     let file = event.target.files[0];
        //     let reader = new FileReader();
        //     console.log(file);
        //     reader.onload = function (e) {
        //         setFile(e.target.result);
        //     };
        //     reader.readAsDataURL(event.target.files[0]);
        // };

        return (
            <>
                <ScreenCapture onEndCapture={this.handleScreenCapture}>
                    {({ onStartCapture }) => (
                        <div>
                            <button onClick={onStartCapture}>Capture</button>

                            <img src={img} />
                            <center>
                                <img src={screenCapture} alt='react-screen-capture' />
                                <p>
                                    {screenCapture && <button onClick={this.handleSave}>Download</button>}
                                </p>
                            </center>
                        </div>
                    )}
                </ScreenCapture>
                {/* <div>
                    <div className="d-flex m-2 d-inline-flex ">
                        <div className="mx-2">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faPlus} />
                                <span> Annoter</span>
                            </Button>
                        </div>
                        <div className="mx-2">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faSave} />
                                <span> Save</span>
                            </Button>
                        </div>
                    </div>

                    <img src={img} />
                </div> */}
            </>
        );
    }
};

export default DocumentInspect;



// export function DocumentInspect() {
//     return (
//         <div>
//             {/*<Image scr={docPicture} alt="document img"/>*/}
//             <div className="d-flex m-2 d-inline-flex ">
//                 <div className="mx-2">
//                     <Button variant="primary">
//                         <FontAwesomeIcon icon={faPlus} />
//                         <span> Annoter</span>
//                     </Button>
//                 </div>
//                 <div className="mx-2">
//                     <Button variant="primary">
//                         <FontAwesomeIcon icon={faSave} />
//                         <span> Save</span>
//                     </Button>
//                 </div>
//             </div>

//             <img src={img} />
//         </div>
//     )
// }



// function arrayReplace(arr, index, item) {
//     return [
//         ...arr.slice(0, index),
//         ...(Array.isArray(item) ? item : [item]),
//         ...arr.slice(index + 1),
//     ];
// }

// const RectShape = wrapShape(({ width, height }) => (
//     <rect width={width} height={height} fill="rgba(0,0,255,0.5)" />
// ));

// let idIterator = 1;

// const DocumentInspect = () => {
//     const [items, setItems] = useState([
//         // { id: '1', x: 20, y: 120, width: 145, height: 140 },
//         // { id: '2', x: 15, y: 0, width: 150, height: 95 },
//     ]);
//     let [file, setFile] = useState(null);

//     const [{ vectorHeight, vectorWidth }, setVectorDimensions] = useState({
//         vectorHeight: 0,
//         vectorWidth: 0,
//     });

//     const uploadIconStyle = {
//         display: 'inline',
//         width: 500,
//         height: 500,
//     };

//     const fileChangedHandler = (event) => {
//         let file = event.target.files[0];
//         let reader = new FileReader();
//         console.log(file);
//         reader.onload = function (e) {
//             setFile(e.target.result);
//         };
//         reader.readAsDataURL(event.target.files[0]);
//     };

//     return (
//         <div>
//             <input
//                 className="btn btn-secondary"
//                 id="fileInput"
//                 type="file"
//                 accept="image/*"
//                 onChange={fileChangedHandler}
//             />
//             <ShapeEditor vectorWidth={vectorWidth} vectorHeight={vectorHeight}>
//                 <ImageLayer
//                     src={file}
//                     alt={''}
//                     style={uploadIconStyle}
//                     responsive
//                     onLoad={({ naturalWidth, naturalHeight }) => {
//                         setVectorDimensions({
//                             vectorWidth: naturalWidth,
//                             vectorHeight: naturalHeight,
//                         });
//                     }}
//                 />
//                 <DrawLayer
//                     onAddShape={({ x, y, width, height }) => {
//                         setItems((currentItems) => [
//                             ...currentItems,
//                             { id: `id${idIterator}`, x, y, width, height },
//                         ]);
//                         idIterator += 1;
//                     }}
//                 />
//                 {items.map((item, index) => {
//                     const { id, height, width, x, y } = item;
//                     return (
//                         <RectShape
//                             key={id}
//                             shapeId={id}
//                             height={height}
//                             width={width}
//                             x={x}
//                             y={y}
//                             onChange={(newRect) => {
//                                 setItems((currentItems) =>
//                                     arrayReplace(currentItems, index, {
//                                         ...item,
//                                         ...newRect,
//                                     })
//                                 );
//                             }}
//                             onDelete={() => {
//                                 setItems((currentItems) =>
//                                     arrayReplace(currentItems, index, [])
//                                 );
//                             }}
//                         />
//                     );
//                 })}
//             </ShapeEditor>
//         </div>
//     );
// };


// export default DocumentInspect;

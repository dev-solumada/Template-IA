import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave ,faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Card, Container, Dropdown, Form, ButtonGroup, Breadcrumb, InputGroup } from '@themesberg/react-bootstrap';
// import { FormUpdateDocument } from "../../components/Form-UpdateDocument"
import {TableInspect} from '../../components/TableInspect';
import {DocumentInspect} from '../../components/DocumentInspect';
import DrawCanva from '../../components/DrawCanva';
import { InspectDocumentTable } from "../../components/InspectDocTable";

const InspectDocument = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                        <Breadcrumb.Item active>Add Document</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Inspect document</h4>
                </div>
            </div>
            
            {/* <div className="d-flex flex-wrap flex-md-nowrap">
                <div className="d-block w-50">
                    <DrawCanva />
                    <DocumentInspect />
                </div>
                <div className="d-block">
                    <TableInspect />
                </div>
            </div> */}

            <div border="light">
                <Row className="d-flex d-flex-inline mb-3" style={{height: 'auto'}}>
                    <Col sm={12} md={12} lg={12} xl={6} >
                        <Card className="p-3 h-100 bg-white">
                            <DocumentInspect />
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={12} xl={6} >
                        <Card className="h-100 p-3 bg-white">
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
                            <InspectDocumentTable />
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* <Container className="px-0">
                <FormUpdateDocument />
            </Container> */}

        </>
    );
};

export default InspectDocument;
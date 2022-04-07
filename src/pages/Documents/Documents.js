import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Container, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';

import { TableDocument } from "../../components/TableDocument";

export default () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                        <Breadcrumb.Item active>Document</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>All document</h4>
                </div>
            </div>
            <div className="table-settings mb-4">
                <Row className="justify-content-between">
                    <Col xs={8} md={6} lg={3} xl={4}>
                        <Form>
                            <label>Action :</label>
                            <Row className="justify-content-between align-items-center">
                                <Col xs={10} md={10} lg={10} xl={10}>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>------------------</option>
                                        <option value="1">Delete Selected document</option>
                                    </select>
                                </Col>
                                <Col xs={2} md={2} lg={2} xl={2}>
                                    <Button variant="primary" className="btn btn-sm">GO</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={8} md={6} lg={3} xl={4}>
                        <br />
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Search" />
                        </InputGroup>
                    </Col>
                </Row>
            </div>

            <TableDocument />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                {/* <Dropdown>
                    <Dropdown.Toggle as={Button} variant="primary" className="text-dark me-2" href="/volt-react-dashboard#/document/add">
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        <span>Add Document</span>
                    </Dropdown.Toggle>
                </Dropdown> */}
                <Link to="/document/add">
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faPlus} />
                        <span> Add Document</span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

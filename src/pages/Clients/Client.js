import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Button, Breadcrumb, InputGroup } from "@themesberg/react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TableClient } from "../../components/TableClient";

const Client = () => {
    return(
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item>
                            <Link to="/dashboard/overview">
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Client</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Clients</h4>
                </div>
            </div>
            <div className="table-settings mb-4">
                <Row className="justify-content-between">
                    <Col sm={12} xs={12} md={12} lg={6} xl={6}>
                        <Form>
                            <Row className="d-flex d-flex-inline">
                                <Col sm={12} xs={12} md={8} lg={2} className="mt-2">
                                    <label>Action :</label>
                                </Col>
                                <Col sm={10} xs={10} md={10} lg={6} className="mb-2">
                                    <select class="form-select text-center" aria-label="Default select example">
                                        <option selected>---------------</option>
                                        <option value="1">Delete selected Items</option>
                                    </select>
                                </Col>
                                <Col sm={2} xs={2} md={2} className="mb-2">
                                    <Button className="btn" variant="primary">Apply</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={5} xl={4}>
                        <Form>
                            <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Search" />
                        </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
            <TableClient />
            
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <Link to="/client/add">
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faPlus} />
                        <span> Add Client</span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Client;

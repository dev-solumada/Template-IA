import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {Col, Row, Card, Form, Button, Breadcrumb } from "@themesberg/react-bootstrap";


const ViewClient = () => {
    return(
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item>
                            <Link to="/dashboard/overview">
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/dashboard/overview/clients">Clients</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Detail</Breadcrumb.Item>

                    </Breadcrumb>
                    <h4>Clients</h4>
                </div>
            </div>
            <Card border="light" className="bg-white shadow-sm mb-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto p-3 justify-content-center align-item-center">
                <Card.Header>
                    <h4 className="text-center"> Client Detail</h4>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Group id="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control readOnly type="text" placeholder="My Username"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group id="createdAt">
                                    <Form.Label>Created At</Form.Label>
                                    <Row>
                                        <Col md={6} className="mb-1">
                                            <span>date</span>
                                            <Form.Control readOnly type="text" placeholder="15/02/2022"></Form.Control>
                                        </Col>
                                        <Col md={6}>
                                            <span>time</span>
                                            <Form.Control readOnly type="text" placeholder="07:45:34"></Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group id="updatedAt">
                                    <Form.Label>Updated At</Form.Label>
                                    <Row>
                                        <Col md={6} className="mb-1">
                                            <span>date</span>
                                            <Form.Control readOnly type="text" placeholder="15/03/2022"></Form.Control>
                                        </Col>
                                        <Col md={6}>
                                            <span>time</span>
                                            <Form.Control readOnly type="text" placeholder="12:00:34"></Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="form-group mt-3">
                            <div className="row">
                                <div class="mb-3 mx-auto row d-fex d-flex-inline justify-content-around">
                                    <div className="col-5 col-sm-5 col-md-5 col-xl-5 ml-2">
                                        <div className="row d-flex justify-content-center">
                                            <Button variant="success">Edit</Button>
                                        </div>
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-5 col-xl-5">
                                        <div className="row d-flex justify-content-center">
                                            <Button variant="danger">Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ViewClient;
import React from 'react';
import {Col, Row, Card, Form, Button, Breadcrumb } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";



export const ClientView = () => {

    return (
        <>
            <Card border="light" className="bg-white shadow-sm mb-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto p-3 justify-content-center align-item-center">
                <Card.Header>
                    <h4 className="text-center"> Client Detail</h4>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="d-flex justify-content-end">
                             <Link to="/client/history">
                                <Button variant="primary">History</Button>
                            </Link>
                        </Col>
                    </Row>
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
                                        <Link to="/client/update">
                                            <div className="row d-flex justify-content-center">
                                                <Button variant="success">Edit</Button>
                                            </div>
                                        </Link>

                                    </div>
                                    <div className="col-5 col-sm-5 col-md-5 col-xl-5">
                                        <Link to="/client">
                                            <div className="row d-flex justify-content-center">
                                                <Button variant="danger">Delete</Button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );

};
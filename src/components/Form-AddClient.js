
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';


export const AddNewClient = () => {
    // const [birthday, setBirthday] = useState("");

    return (
        <Card border="light" className="bg-white shadow-sm mb-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto justify-content-center align-item-center">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={12} className="mb-3">
                            <Form.Group id="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" placeholder="Username"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={12} className="mb-3">
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={12} className="mb-3">
                            <Form.Group id="password_confirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control required type="password" placeholder="Confirm password"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={12} className="mb-3">
                            <Form.Group id="createdAt">
                                <Form.Label>Created At</Form.Label>
                                <Row>
                                    <Col md={6} className="mb-1">
                                        <span>date</span>
                                        <Form.Control required type="date" />
                                    </Col>
                                    <Col md={6}>
                                        <span>time</span>
                                        <Form.Control required type="time" />
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
                                        <Form.Control required type="date" />
                                    </Col>
                                    <Col md={6}>
                                        <span>time</span>
                                        <Form.Control required type="time" />
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
                                        <Button variant="secondary">Save And Add Another</Button>
                                    </div>
                                </div>
                                <div className="col-5 col-sm-5 col-md-5 col-xl-5">
                                    <div className="row d-flex justify-content-center">
                                        <Button variant="secondary">Save And continue Editing</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3 form-group">
                        <div className="row mx-auto">
                            <Button variant="primary" className="justify-content-center">
                                <FontAwesomeIcon icon={faSave} />
                                <span className="m-2">Save</span>
                            </Button>
                        </div>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

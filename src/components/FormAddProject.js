
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';


export const FormAddProject = () => {

    return (
        <Card border="light" className="bg-white shadow-sm mb-4 col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mx-auto justify-content-center align-item-center">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="gender">
                                <Form.Label>Client</Form.Label>
                                <Form.Select defaultValue="0">
                                    <option value="0">------</option>
                                    <option value="1">Mathiew</option>
                                    <option value="2">Mark</option>
                                    <option value="3">Clara</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={12} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="text" placeholder="Your name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={7} className="mb-3">
                            <Form.Group id="address">
                                <Form.Label>Create at</Form.Label>
                                <Form.Control required type="date" />
                            </Form.Group>
                        </Col>
                        <Col sm={5} className="mb-3">
                            <Form.Group id="addressNumber">
                                <Form.Label>Time</Form.Label>
                                <Form.Control required type="time" placeholder="No." />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={7} className="mb-3">
                            <Form.Group id="address">
                                <Form.Label>Update at</Form.Label>
                                <Form.Control required type="date" />
                            </Form.Group>
                        </Col>
                        <Col sm={5} className="mb-3">
                            <Form.Group id="addressNumber">
                                <Form.Label>Time</Form.Label>
                                <Form.Control required type="time" />
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

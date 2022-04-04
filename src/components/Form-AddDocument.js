
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const AddDocument = () => {
    const [birthday, setBirthday] = useState("");

    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={6} className="mb-3">
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
                        <Col md={2} className="mb-3">
                            <br />
                            {/* <Form.Group id="gender"> */}
                            <Button variant="primary" type="submit">History</Button>
                            {/* </Form.Group> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="projet">
                                <Form.Label>Projet</Form.Label>
                                <Form.Select defaultValue="0">
                                    <option value="0">------</option>
                                    <option value="1">Plastification</option>
                                    <option value="2">Impression</option>
                                    <option value="3">Personnalisation</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type="text" placeholder="Your name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Path</Form.Label>
                                <Form.Control required type="file" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Status</Form.Label>
                                <Form.Check type="checkbox" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Type</Form.Label>
                                <Form.Control required type="text" placeholder="Type" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Accuracy cls</Form.Label>
                                <Form.Control required type="text" placeholder="Accuracy" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Image annotation</Form.Label>
                                <Form.Control required type="file" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Manualy corrected</Form.Label>
                                <Form.Check type="checkbox" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Type Annotation</Form.Label>
                                {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}

                                <Form.Control required type="text" placeholder="Type annotation" />
                                {/* </FloatingLabel> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Content Annotorious</Form.Label>
                                {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                />
                                {/* </FloatingLabel> */}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Data anotorious</Form.Label>
                                {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                />
                                {/* </FloatingLabel> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Form.Group id="name">
                                <Form.Label>Accuracy Annotation</Form.Label>
                                {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}

                                <Form.Control required type="number" />
                                {/* </FloatingLabel> */}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5} className="mb-3">
                            <Form.Group id="address">
                                <Form.Label>Create at</Form.Label>
                                <Form.Control required type="date" />
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group id="addressNumber">
                                <Form.Label>Time</Form.Label>
                                <Form.Control required type="time" placeholder="No." />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5} className="mb-3">
                            <Form.Group id="address">
                                <Form.Label>Update at</Form.Label>
                                <Form.Control required type="date" />
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group id="addressNumber">
                                <Form.Label>Time</Form.Label>
                                <Form.Control required type="time" />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col sm={3} className="mb-3">
                            <Form.Group id="address">
                                <Button variant="primary" type="submit">Save and another</Button>
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group id="addressNumber">
                                <Button variant="primary" type="submit">Save and continue editing</Button>
                            </Form.Group>
                        </Col>
                        <Col sm={3} className="mb-3">
                            <Form.Group id="addressNumber">
                                <Button variant="primary" type="submit">Save</Button>
                            </Form.Group>
                        </Col>
                    </Row> */}
                    <div className="mt-3">
                        {/* <Button variant="primary" type="submit">Save and another</Button>
                        <Button variant="primary" type="submit">Save and continue editing</Button> */}
                        <Button variant="primary" type="submit">Save</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

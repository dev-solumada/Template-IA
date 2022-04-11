import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, InputGroup} from '@themesberg/react-bootstrap';

const FormAction = () =>{
    return (
        <>
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
        </>
    )
}

export default FormAction;
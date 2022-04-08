import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Nav, Card, Image, Button, Table,InputGroup, Form, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import clients from "../data/ClientData";



export const TableClient = () => {

        const [isCheckedAll, setCheckedAll] = useState(false);
        const [isChecked, setChecked] = useState([]);
        const [list, setList] = useState([]);

        useEffect(() => {
            setList(clients);
        }, [list]);

        const handleSelectAll = e => {
            setCheckedAll(!isCheckedAll);
            setChecked(list.map(li => li.id));
            if (isCheckedAll){
                setChecked([]);
            }
        };

        const handleClick = e => {
            const { id, checked } = e.target;
            setChecked([...isChecked, parseInt(id)]);
            if (!checked){
                setChecked(isChecked.filter(item => item !== parseInt(id)));
            }
        }

        const tableCliRow = list.map(({ id, username, countProject }) => {
            return (
                <tr>
                    <td>
                        <input 
                            onChange={handleClick}
                            key={id}
                            type="checkbox"
                            name={username}
                            id={id}
                            checked={isChecked.includes(parseInt(id))}
                        />
                    </td>
                    <td>
                        <Link to="/client/detail">
                            <span className="fw-normal">
                                {username}
                            </span>
                        </Link>
                    </td>
                    <td>
                        <span className={`fw-normal}`}>
                            {countProject}
                        </span>
                    </td>
                    <td>
                        <span className="fw-normal">
                            <Link to="/">
                                <Button variant="secondary" className="btn btn-sm">Show Project</Button>
                            </Link>
                        </span>
                    </td>
                </tr>
            );
        });

    return (
        <div>
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
            <Card border="light" className="table-wrapper table-responsive shadow-sm">
                <Card.Body className="pt-0">
                    <Table hover className="user-table align-items-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">
                                    <input 
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={isCheckedAll}
                                     />
                                </th>
                                <th className="border-bottom">CLIENT</th>
                                <th className="border-bottom">COUNT PROJECT</th>
                                <th className="border-bottom">SHOWN CLIENT PROJECT</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tableCliRow }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};
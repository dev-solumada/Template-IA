import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Form, Button, Table, Dropdown, InputGroup, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/tableDocument";

export const TableDocument = () => {
    // const totalTransactions = documents.length;

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(documents);
    }, [list]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    console.log("isCheck ==== ", isCheck);
    console.log("isCheckAll ==== ", isCheckAll);

    const tablerow = list.map(({ id, client, projet, name, path, status, data, type, treated, accuracy, inspect }) => {
        return (
            <tr>
                <td>
                    <input
                        onChange={handleClick}
                        key={id}
                        type="checkbox"
                        name={name}
                        id={id}
                        checked={isCheck.includes(id)}
                    /></td>
                <td>
                    <span className="fw-normal">
                        <Nav.Link className="collapse-close d-md-none">
                            {client}
                        </Nav.Link>
                    </span>
                </td>
                <td>
                    <span className={`fw-normal`}>
                        {projet}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {name}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {path}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal`}>
                        {status}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {data}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {type}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal`}>
                        {treated}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {accuracy}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {inspect}
                    </span>
                </td>
            </tr>
        );
    });
    return (
        <>
            <div className="table-settings mb-4">
                <Row className="justify-content-between align-items-center">
                    <Col xs={8} md={6} lg={3} xl={4}>
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Search" />
                        </InputGroup>
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
                                        checked={isCheckAll}
                                    // onChange={allChange}
                                    />
                                </th>
                                <th className="border-bottom">CLIENT</th>
                                <th className="border-bottom">PROJET</th>
                                <th className="border-bottom">NAME</th>
                                <th className="border-bottom">PATH</th>
                                <th className="border-bottom">STATUS</th>
                                <th className="border-bottom">DATA ANNOTORIOUS</th>
                                <th className="border-bottom">TYPE</th>
                                <th className="border-bottom">IS TREATED</th>
                                <th className="border-bottom">ACCURACY CLS</th>
                                <th className="border-bottom">INSPECT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tablerow}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};
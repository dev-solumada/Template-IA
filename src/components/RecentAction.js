import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import transactions from "../data/recentAction";


export const RecentAction = () => {
    const totalTransactions = transactions.length;

    const TableRow = (props) => {
        const { action, item, projectName } = props;

        return (
            <tr>
                <td>
                    <span className="fw-normal">{action}
                        {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                        {/* <FontAwesomeIcon icon="faCircle" /> */}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {item}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal`}>
                        {projectName}
                    </span>
                </td>
                {/* <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                            <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger">
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td> */}
            </tr>
        );
    };

    return (
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body className="pt-0">
                <Table hover className="user-table align-items-center">
                    <thead>
                        <tr>
                            <th className="border-bottom">ACTION</th>
                            <th className="border-bottom">ITEM</th>
                            <th className="border-bottom">PROJECT NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
                    </tbody>
                </Table>
                {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                    <Nav>
                        <Pagination className="mb-2 mb-lg-0">
                            <Pagination.Prev>
                                Previous
                            </Pagination.Prev>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Item>3</Pagination.Item>
                            <Pagination.Item>4</Pagination.Item>
                            <Pagination.Item>5</Pagination.Item>
                            <Pagination.Next>
                                Next
                            </Pagination.Next>
                        </Pagination>
                    </Nav>
                    <small className="fw-bold">
                        Showing <b>{totalTransactions}</b> out of <b>25</b> entries
                    </small>
                </Card.Footer> */}
            </Card.Body>
        </Card>
    );
};
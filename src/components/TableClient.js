import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/ClientData";



export const TableClient = () => {
    const totalTransactions = documents.length;

    const TableRow = (props) => {
        const { username, countProject, showClientProject } = props;
        // const statusVariant = status === "Paid" ? "success"
        //     : status === "Due" ? "warning"
        //         : status === "Canceled" ? "danger" : "primary";

        return (
            <tr>
                {/* <td>
                    <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
                        {invoiceNumber}
                    </Card.Link>
                </td> */}
                <td>
                    <span className="fw-normal">
                        <input type="checkbox" />
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {username}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal}`}>
                        {countProject}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        <Dropdown>
                            <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2"> {/*/href="/volt-react-dashboard#/document/add">*/}
                                <span>Show Project</span>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </span>
                </td>
            </tr>
        );
    };

    return (
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body className="pt-0">
                <Table hover className="user-table align-items-center">
                    <thead>
                        <tr>
                            <th className="border-bottom">
                                <input type="checkbox" />
                            </th>
                            <th className="border-bottom">CLIENT</th>
                            <th className="border-bottom">COUNT PROJECT</th>
                            <th className="border-bottom">SHOWN CLIENT PROJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
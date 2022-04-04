import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import projets from "../data/projets";



export const TableProjet = () => {
    //const totalTransactions = projets.length;

    const TableRow = (props) => {
        const {client,name,created_at,updated_at,client_id,document_id} = props;
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
                        {client}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal}`}>
                        {name}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal}`}>
                        {created_at}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal}`}>
                        {updated_at}
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
                            <th className="border-bottom">NAME</th>
                            <th className="border-bottom">CREATED AT</th>
                            <th className="border-bottom">UPDATED AT</th>
                            <th className="border-bottom">SHOW PROJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projets.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
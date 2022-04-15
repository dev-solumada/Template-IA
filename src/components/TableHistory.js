import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import clientHistory from "../data/ClientHistoryData";


const ClientHistoryTable = () => {

    const TableRow = (props) => {
        const { datetime, user, action } = props;

        return (
            <tr>
                <td>
                    <span className="fw-normal">
                        {datetime}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {user}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal`}>
                        {action}
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
                            <th className="border-bottom">DATE/TIME</th>
                            <th className="border-bottom">USER</th>
                            <th className="border-bottom">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientHistory.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default ClientHistoryTable;
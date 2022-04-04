import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/tableDocument";


export const TableDocument = () => {
    const totalTransactions = documents.length;
    // const [studentState, setStudentState] = useState([]);
    // studentState = documents
    // useEffect(() => {
    //     let studentState = [
    //         { id: 1, firstname: "Stone", lastname: "cold", major: "wwf" },
    //         { id: 2, firstname: "Stone", lastname: "cold", major: "wwf" },
    //         { id: 3, firstname: "Stone", lastname: "cold", major: "wwf" }
    //     ];

    //     setStudentState(
    //         studentState.map(d => {
    //             return {
    //                 select: false,
    //                 id: d.id,
    //                 firstname: d.firstname,
    //                 lastname: d.lastname,
    //                 major: d.major
    //             };
    //         })
    //     );
    // }, []);

    const TableRow = (props) => {
        const { select = false, id, client, projet, name, path, status, data, type, treated, accuracy, inspect } = props;
        const statusVariant = status === "Paid" ? "success"
            : status === "Due" ? "warning"
                : status === "Canceled" ? "danger" : "primary";

        // setStudentState(
        //     studentState.map(d => {
        //         return {
        //             select: false,
        //             id: d.id,
        //             firstname: d.firstname,
        //             lastname: d.lastname,
        //             major: d.major
        //         };
        //     })
        // );

        return (
            <tr>
                <td>
                    {/* <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal"> */}
                    <input type="checkbox" />
                    {/* </Card.Link> */}
                </td>
                <td>
                    <span className="fw-normal">
                        {client}
                    </span>
                </td>
                <td>
                    <span className={`fw-normal text-${statusVariant}`}>
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
                    <span className={`fw-normal text-${statusVariant}`}>
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
                    <span className={`fw-normal text-${statusVariant}`}>
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
                        <Link to="/document">
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
                            <th className="border-bottom"><input type="checkbox" /></th>
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
                        {documents.map((t, i) => <TableRow key={`transaction-${t.id}`} {...t} />)}
                        {/* {documents.map(t => <TableRow key={`transaction-${t.id}`} select={false} {...t} />)} */}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
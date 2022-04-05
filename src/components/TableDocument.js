import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/tableDocument";
import Catalogues from "../data/mock";


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

    console.log("list ==== ", list)
    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    console.log("isCheck ==== ", isCheck);

    console.log("isCheckAll ==== ", isCheckAll);

    // const TableRow = (props) => {
    //     const { isChecked = false, id, client, projet, name, path, status, data, type, treated, accuracy, inspect } = props;

    //     // const [checked, setChecked] = React.useState(false);

    //     // const handleChange = () => {
    //     //     setChecked(!checked);
    //     // };

    //     // console.log("pppp=== ", props);
    //     // console.log("handleChange=== ", checked);

    //     return (
    //         <tr>
    //             <td>

    //                 <input
    //                     key={id}
    //                     type="checkbox"
    //                     name={name}
    //                     id={id}
    //                     handleClick={handleClick}
    //                     isChecked={isCheck.includes(id)}
    //                 />
    //                 {/* <input
    //                     // key={id} type="checkbox" name={name} value={name} checked={isChecked} onChange={handleChange}
    //                     checked={checked}
    //                     type="checkbox"
    //                     onChange={handleChange}
    //                 /> */}
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {client}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className={`fw-normal`}>
    //                     {projet}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {name}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {path}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className={`fw-normal`}>
    //                     {status}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {data}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {type}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className={`fw-normal`}>
    //                     {treated}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {accuracy}
    //                 </span>
    //             </td>
    //             <td>
    //                 <span className="fw-normal">
    //                     {inspect}
    //                 </span>
    //             </td>
    //         </tr>
    //     );
    // };

    const catalog = list.map(({ id, client, projet, name, path, status, data, type, treated, accuracy, inspect }) => {
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
                        {client}
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
                        {catalog}
                        {/* {documents.map(t => <TableRow key={`transaction-${t.id}`} {...t} />)} */}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
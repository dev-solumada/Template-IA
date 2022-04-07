import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table,InputGroup, Form, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/ClientData";



export const TableClient = () => {


        // const { id, username, countProject } = props;
        const [isCheckedAll, setCheckedAll] = useState(false);
        const [isChecked, setChecked] = useState([]);
        const [list, setList] = useState([]);

        useEffect(() => {
            setList(documents);
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
            setChecked([...isChecked, id]);
            if (!checked){
                setChecked(isChecked.filter(item => item !== id));
            }
        }

        const tableCliRow = list.map(({ id, username, countProject }) => {
            return (
                <tr>
                    {/* <td>
                        <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
                            {invoiceNumber}
                        </Card.Link>
                    </td> */}
                    <td>
                        <input 
                            onChange={handleClick}
                            key={id}
                            type="checkbox"
                            name={username}
                            id={id}
                            checked={isChecked.includes(id)}
                        />
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
                    <Col xs={8} md={6} lg={3} xl={4}>
                        <Form>
                            <label>Action :</label>
                        </Form>
                    </Col>
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
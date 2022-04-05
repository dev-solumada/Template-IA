import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Container, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';

import { TableDocument } from "../../components/TableDocument";

export default () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                        <Breadcrumb.Item active>Document</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>All document</h4>
                </div>
            </div>

            <TableDocument />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <Dropdown>
                    <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2" href="/volt-react-dashboard#/document/add">
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        <span>Add Document</span>
                    </Dropdown.Toggle>
                    {/* <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        <span>New</span>
                    </Dropdown.Toggle> */}
                </Dropdown>
            </div>
        </>
    );
};

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Container, Dropdown, Form, ButtonGroup, Breadcrumb, InputGroup } from '@themesberg/react-bootstrap';
import { FormUpdateDocument } from "../../components/Form-UpdateDocument"

const UpdateDocument = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                        <Breadcrumb.Item active>Update Document</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Update document</h4>
                </div>
            </div>

            <Container className="px-0">
                <FormUpdateDocument />
            </Container>

        </>
    );
};

export default UpdateDocument;
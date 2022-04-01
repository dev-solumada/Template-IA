import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Form, ButtonGroup, Breadcrumb, InputGroup } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { AddDocument } from "../../components/Form-AddDocument";


export default () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                        <Breadcrumb.Item active>Add Project</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Add project</h4>
                </div>
            </div>
            <Row>
                <Col xs={12} xl={8}>
                    <AddDocument />
                </Col>

                {/* <Col xs={12} xl={4}>
                    <Row>
                        <Col xs={12}>
                            <ProfileCardWidget />
                        </Col>
                        <Col xs={12}>
                            <ChoosePhotoWidget
                                title="Select profile photo"
                                photo={Profile3}
                            />
                        </Col>
                    </Row>
                </Col> */}
            </Row>
        </>
    );
};

import React from 'react';
import {Col, Row, Card, Form, Button, Breadcrumb } from "@themesberg/react-bootstrap";
import { InspectDocumentTable } from "./InspectDocumentTab";



export const InspectDocumentView = () => {
    return (

        <div>
            <div border="light" className="bg-white">
                <Row className="d-flex d-flex-inline" style={{height: 900}}>
                    <Col className="bg-success h-100" md={6}>
                        <h4>Left Side</h4>
                    </Col>
                    <Col className="h-100 p-3" md={6}>
                        <InspectDocumentTable />
                    </Col>
                </Row>
            </div>
        </div>

    );
};


// export default InspectDocumentView;



import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {Col, Row, Card, Form, Button, Breadcrumb } from "@themesberg/react-bootstrap";
import { ClientView } from "../../components/ClientView";

const ViewClient = () => {
    return(
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item>
                            <Link to="/dashboard/overview">
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/client">Client</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Detail</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Clients</h4>
                </div>
            </div>
            <ClientView />
        </div>
    )
};

export default ViewClient;
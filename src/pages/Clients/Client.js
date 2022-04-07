import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Button, Breadcrumb, InputGroup } from "@themesberg/react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TableClient } from "../../components/TableClient";

const Client = () => {
    return(
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item>
                            <Link to="/dashboard/overview">
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Client</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Clients</h4>
                </div>
            </div>

            <TableClient />
            
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <Link to="/client/add">
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faPlus} />
                        <span> Add Client</span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Client;

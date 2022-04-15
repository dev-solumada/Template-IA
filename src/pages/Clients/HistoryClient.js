import React from "react";
import { Col, Row, Form, Button, Breadcrumb, InputGroup } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import ClientHistoryTable from "../../components/TableHistory";

const HistoryClient = () => {
    return (
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
                            <Link to="/client">
                                Client
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/client/detail">
                                Detail
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            History
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Clients</h4>
                </div>

            </div>

            <ClientHistoryTable />
        </div>
    );
};

export default HistoryClient;

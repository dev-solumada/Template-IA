import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Container } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { UpdateClientForm } from "../../components/Form-UpdateClient";



const UpdateClient = () => {
    return(
        <div>
            <div>
                <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-xl-0">
                        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                            <Breadcrumb.Item>
                                <Link to="/dashboard/overview">
                                    <FontAwesomeIcon icon={faHome} />
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to="/client">Client</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Update</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <h4>Update Client</h4>
                <Container className="px-0">
                    <UpdateClientForm />
                </Container>
            </div>
        </div>
    );
};

export default UpdateClient;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Container, Breadcrumb } from '@themesberg/react-bootstrap';
import { FormAddProject } from "../../components/FormAddProject";


export default () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Account</Breadcrumb.Item>
                        <Breadcrumb.Item>Project</Breadcrumb.Item>
                        <Breadcrumb.Item active>Add project</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Add project</h4>
                </div>
            </div>

            <Container className="px-0">
                <FormAddProject />
            </Container>

        </>
    );
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { ProjectTable } from "../../components/Tables_c";

const Projet = () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Account</Breadcrumb.Item>
            <Breadcrumb.Item active>Project</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Project List</h4>
          <p className="mb-0">
            Liste des projets ici avec la date de création et de modification
          </p>
        </div>
      </div>
      
      <ProjectTable />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <Dropdown>
                    <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2" href="/volt-react-dashboard#/projet/add">
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        <span>Add Project</span>
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


export default Projet;

// component : page/components/Tables/bootstrapTable
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Breadcrumb } from '@themesberg/react-bootstrap';
// import { Link } from "react-router-dom";

//import { ProjectTable } from "../../components/Tables_c";
import { TableProjet } from "../../components/TableProjet";
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
      
      {/*<ProjectTable />*/}
      <TableProjet/>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <Link to="/projet/add">
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faPlus} />
                        <span> Add Project</span>
                    </Button>
                </Link>
            </div>
    </>
  );
};


export default Projet;

// component : page/components/Tables/bootstrapTable
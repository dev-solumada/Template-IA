import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faSave } from "@fortawesome/free-solid-svg-icons";
import { TransactionsTable } from "../components/Tables";
import { Button, Table} from '@themesberg/react-bootstrap';
//import {Table} from '@react-bootstrap/Table'



export const TableInspect = () => {
    return (
    <>
      <div className="d-xl-flex justify-content-start flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex justify-content-around">
            <div className="mr-2">
                <Button variant="primary">
                    <FontAwesomeIcon icon={faPlus} />
                    <span> Annoter</span>
                </Button>
            </div>
            
            <div className="ml-2">
                <Button variant="primary">
                    <FontAwesomeIcon icon={faSave} />
                    <span> Save</span>
                </Button>
            </div>
        </div>
        
      </div>
      <div>
        <Table responsive="sm">
            <thead className="bg-light">
            <tr>
                <th>TYPE</th>
                <th>CONTENT</th>
                <th>ACCURACY</th>
                <th>EDIT</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Paragraph</th>
                <th>Lorem ipsum siet dolore consectetur </th>
                <th>0.7</th>
                <th>
                <Button variant="secondary" className="btn btn-sm">Edit</Button>
                </th>
            </tr>
            <tr>
                <th>Paragraph</th>
                <th>Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. </th>
                <th>0.7</th>
                <th>
                <Button variant="secondary" className="btn btn-sm">Edit</Button>
                </th>
            </tr>
            </tbody>
        </Table>
        </div>
    </>
  );
};

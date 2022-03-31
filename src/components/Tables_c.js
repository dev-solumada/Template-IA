
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import {projectList} from "../data/projets"
import transactions from "../data/transactions";
import commands from "../data/commands";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};


export const ProjectTable = () => {
  const TableRow = (props) => {
    //const { country, countryImage, overallRank, overallRankChange, travelRank, travelRankChange, widgetsRank, widgetsRankChange } = props;
    const {selected,client,name,created_at,updated_at,client_id,document_id} = props;
    return (
      <tr>
        {/* {<td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image src={countryImage} className="image-small rounded-circle me-2" />
            <div><span className="h6">{country}</span></div>
          </Card.Link>
        </td>} */}
        <td className="fw-bold border-0">
          {selected ? selected : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={client} />
        </td>
        <td className="fw-bold border-0">
          {name ? name : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={created_at} />
        </td>
        <td className="fw-bold border-0">
          {updated_at ? updated_at : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={client_id} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Selection</th>
              <th className="border-0">Client</th>
              <th className="border-0">Name</th>
              <th className="border-0">Created at</th>
              <th className="border-0">Updated at</th>
              <th className="border-0">Show project</th>
              <th className="border-0">~</th>
            </tr>
          </thead>
          <tbody>
            {/*{pageRanking.map(r => <TableRow key={`ranking-${r.id}`} {...r} />)}*/}
            {projectList.map(r => <TableRow key={`ranking-${r.id}`} {...r} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
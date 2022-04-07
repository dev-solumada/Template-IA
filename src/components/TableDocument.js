import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Form, Button, Table, Dropdown, InputGroup, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/tableDocument";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import "./document.css"

const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'client',
        headerName: 'Client',
        width: 150,
        editable: true,
        cellClassName: 'super-app-theme--cell',
        renderCell: (params) => (
            < Link to="/document/update" >{params.value}
                {/* <Button variant="secondary" className="btn btn-sm">Show Document</Button> */}
            </Link >
            // <Link href={"/document/update"}>{params.value}</Link>
        )
        //   renderCell: (params) => (
        //     <Link href={`/form/${params.value}`}>{params.value}</Link>
        //   )
        // headerClassName: 'super-app-theme--header',
    },
    {
        field: 'projet',
        headerName: 'Projet',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'path',
        headerName: 'Path',
        width: 150,
        editable: true,
        renderCell: (params) => (
            < Link to="/document/pdf" >
                {params.value}
            </Link >)
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: true,
    },
    {
        field: 'data',
        headerName: 'Data',
        width: 150,
        editable: true,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 150,
        editable: true,
    },
    {
        field: 'treated',
        headerName: 'Is Treated',
        width: 150,
        editable: true,
    },
    {
        field: 'accuracy',
        headerName: 'Accuracy cls',
        width: 160,
        editable: true,
    },
    {
        field: 'inspect',
        headerName: 'Inspect',
        width: 200,
        editable: true,
        renderCell: (params) => (
            < Link to="/document/inspect" >
                <Button variant="secondary" className="btn btn-sm">inspect</Button>
            </Link >
        )
    },
];

export const TableDocument = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={documents}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={itm => console.log(itm)}
            />
            { }
        </div>
    );
}
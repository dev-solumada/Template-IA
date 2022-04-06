import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Form, Button, Table, Dropdown, InputGroup, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import documents from "../data/tableDocument";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "./document.css"

const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'client',
        headerName: 'Client',
        width: 150,
        editable: true,
        renderCell: (params) => (
            <Link href={"/document/update"}>{params.value}</Link>
        )
        //   renderCell: (params) => (
        //     <Link href={`/form/${params.value}`}>{params.value}</Link>
        //   )
        // headerClassName: 'super-app-theme--header',
        // cellClassName: 'super-app-theme--cell',
    },
    {
        field: 'projet',
        headerName: 'Projet',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
        editable: true,
    },
    {
        field: 'path',
        headerName: 'path',
        width: 150,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'status',
        width: 150,
        editable: true,
    },
    {
        field: 'data',
        headerName: 'data',
        width: 150,
        editable: true,
    },
    {
        field: 'type',
        headerName: 'type',
        width: 150,
        editable: true,
    },
    {
        field: 'treated',
        headerName: 'treated',
        width: 150,
        editable: true,
    },
    {
        field: 'accuracy',
        headerName: 'accuracy',
        width: 160,
        editable: true,
    },
    {
        field: 'inspect',
        headerName: 'inspect',
        width: 200,
        editable: true,
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
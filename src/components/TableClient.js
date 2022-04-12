import React from "react";
import { Card, Button, Table } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import clients from "../data/ClientData";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    {
        cellClassName: 'super-app-theme--cell',
        field: 'id',
        headerName: 'ID',
        width: 350,
        editable: false,
    },
    {
        field: 'username',
        headerName: 'Username',
        width: 300,
        editable: false,
        renderCell: (params) => (
            < Link to="/client/detail" >
                {params.value}
            </Link >
        )
    },
    {
        field: 'countProject',
        headerName: 'Count Project',
        width: 300,
        editable: false,
    },
    {
        field: 'showProject',
        headerName: 'SHOW Project',
        width: 200,
        editable: false,
        renderCell: (params) => (
            < Link to="/clients" >
                <Button variant="secondary" className="btn btn-sm">Show Project</Button>
            </Link >
        )
    },
];

export const TableClient = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={clients}
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
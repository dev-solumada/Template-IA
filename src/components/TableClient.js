import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import clients from "../data/ClientData";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Col, Button, Row, Form, InputGroup } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { useDemoData } from '@mui/x-data-grid-generator';

// const [searchText, setSearchText] = useState('');
//     const [clientData, setclientData] = useState(clients);

//     function handleSearch(event){
//         setSearchText(event.target.value);
//         const filteredClients = clients.filter((client) => {
//             return Object.keys(client);
//         });
//         setclientData(filteredClients);
//     };

//     useEffect(() => {
//         setclientData(clients);
//     }, [clients]);

const columns: GridColDef[] = [
    {
        cellClassName: 'super-app-theme--cell',
        field: 'id',
        headerName: 'ID',
        width: 300,
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

export  const TableClient = () => {

    return (
        <div>
            <div className="table-settings mb-4">
                <Row className="justify-content-between">
                    <Col sm={12} xs={12} md={12} lg={6} xl={6}>
                        <Form>
                            <Row className="d-flex d-flex-inline">
                                <Col sm={12} xs={12} md={8} lg={2} className="mt-2">
                                    <label>Action :</label>
                                </Col>
                                <Col sm={10} xs={10} md={10} lg={6} className="mb-2">
                                    <select class="form-select text-center" aria-label="Default select example">
                                        <option selected>---------------</option>
                                        <option value="1">Delete selected Items</option>
                                    </select>
                                </Col>
                                <Col sm={2} xs={2} md={2} className="mb-2">
                                    <Button className="btn" variant="primary">Apply</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={5} xl={4}>
                        <Form>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                                <Form.Control 
                                    // onChange={handleSearch}
                                    // clearSearch={setSearchText}
                                    // value={searchText} 
                                    type="text" 
                                    placeholder="Search..."
                                />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={clients}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
                { }
            </div>
        </div>
    );
}
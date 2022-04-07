import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Button } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { AddNewClient } from "../../components/Form-AddClient";



const AddClient = () => {
    return(
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
                        <Breadcrumb.Item active>Add</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <h4>New Client</h4>
            <div className="card pt-3 pb-3">
                <div className="container">
                    <form className="form col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto justify-content-center align-item-center">
                        <div className="form-group mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="d-flex d-inline-flex">
                                    <div className="col-3">
                                        <span>Created At</span>
                                    </div>
                                    <div className="col-9">
                                        <div className="mb-3">
                                            <div className="bootstrap-timepicker">
                                                <label>Date :</label>
                                                <input type="date" className="form-control datetimepicker-input" data-target="#timepicker" />
                                            </div>
                                            <div className="bootstrap-timepicker">
                                                <label>Time :</label>
                                                <input type="time" className="form-control datetimepicker-input" data-target="#timepicker" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="d-flex d-inline-flex">
                                    <div className="col-3">
                                        <span>Updated At</span>
                                    </div>
                                    <div className="col-9">
                                        <div className="mb-3">
                                            <div className="bootstrap-timepicker">
                                                <label>Date :</label>
                                                <input type="date" className="form-control datetimepicker-input" data-target="#timepicker" />
                                            </div>
                                            <div className="bootstrap-timepicker">
                                                <label>Time :</label>
                                                <input type="time" className="form-control datetimepicker-input" data-target="#timepicker" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div class="mb-3 mx-auto row d-fex d-flex-inline justify-content-around">
                                    <div className="col-5 col-sm-5 col-md-5 col-xl-5 ml-2">
                                        <div className="row d-flex justify-content-center">
                                            <Button variant="secondary">Save And Add Another</Button>
                                        </div>
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-5 col-xl-5">
                                        <div className="row d-flex justify-content-center">
                                            <Button variant="secondary">Save And continue Editing</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="mb-3 form-group">
                            <div className="row mx-auto">
                                <Button variant="primary" className="justify-content-center">
                                    <FontAwesomeIcon icon={faSave} />
                                    <span className="m-2">Save</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClient;

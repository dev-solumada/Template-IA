import React from "react";
import { Card, Button, Table } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import projets from "../data/projets";



export const TableProjet = () => {
    //const totalTransactions = projets.length;
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(projets);
    }, [list]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, parseInt(id)]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== parseInt(id)));
        }
    };

    console.log("isCheck ==== ", isCheck);
    console.log("isCheckAll ==== ", isCheckAll);
    
    const TableRow = list.map(({id,client,name,created_at,updated_at})=>{
        return (
        <tr>
            <td>
                <input
                    onChange={handleClick}
                    key={id}
                    type="checkbox"
                    name={name}
                    id={id}
                    checked={isCheck.includes(parseInt(id))}
                />
            </td>
            <td>
                <span className="fw-normal">
                    {client}
                </span>
            </td>
            <td>
                <span className={`fw-normal}`}>
                    {name}
                </span>
            </td>
            <td>
                <span className={`fw-normal}`}>
                    {created_at}
                </span>
            </td>
            <td>
                <span className={`fw-normal}`}>
                    {updated_at}
                </span>
            </td>
            <td>
                <span className="fw-normal">
                    <Link to="/document">
                        <Button variant="secondary" className="btn btn-sm">Show Document</Button>
                    </Link>
                </span>
            </td>
        </tr>
        );
    });        
    return (
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body className="pt-0">
                <Table hover className="user-table align-items-center">
                    <thead>
                        <tr>
                            <th className="border-bottom">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={isCheckAll}
                                    // onChange={allChange}
                                />
                            </th>
                            <th className="border-bottom">CLIENT</th>
                            <th className="border-bottom">NAME</th>
                            <th className="border-bottom">CREATED AT</th>
                            <th className="border-bottom">UPDATED AT</th>
                            <th className="border-bottom">SHOW PROJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableRow}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};
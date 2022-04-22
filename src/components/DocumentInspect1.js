import React from "react";
import img from "../assets/img/optimum/sample_doc.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSave ,faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Card, Container, Dropdown, Form, ButtonGroup, Breadcrumb, InputGroup } from '@themesberg/react-bootstrap';

export function DocumentInspect() {
    return(
        <div>
            {/*<Image scr={docPicture} alt="document img"/>*/}
            <div className="d-flex m-2 d-inline-flex ">
                                <div className="mx-2">
                                    <Button variant="primary">
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span> Annoter</span>
                                    </Button>
                                </div>
                                <div className="mx-2">
                                    <Button variant="primary">
                                        <FontAwesomeIcon icon={faSave} />
                                        <span> Save</span>
                                    </Button>
                                </div>
                            </div>
                           
            <img src={img}/>   
        </div>
    )
}
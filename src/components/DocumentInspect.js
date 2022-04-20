import React from "react";
import img from "../assets/img/optimum/sample_doc.PNG"
import {Image} from "@themesberg/react-bootstrap"
const docPicture = require ("../assets/img/optimum/Capture.jpg")

export function DocumentInspect() {
    return(
        <div>
            {/*<Image scr={docPicture} alt="document img"/>*/}

            <img src={img}/>   
        </div>
    )
}
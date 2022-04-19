import React from "react";
import img from "../assets/img/optimum/sample_doc.PNG"
import {Image} from "@themesberg/react-bootstrap"

export function DocumentInspect() {
    return(
        <div>
            {/*<Image scr={docPicture} alt="document img"/>*/}

            <img src={img}/>   
        </div>
    )
}
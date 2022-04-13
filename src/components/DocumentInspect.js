import React from "react";
import docPicture from "../assets/img/optimum/sample_doc.png"
import {Image} from "@themesberg/react-bootstrap"

export function DocumentInspect() {
    return(
        <div>
            <Image scr={docPicture} alt="document img"/>

        </div>
    )
}
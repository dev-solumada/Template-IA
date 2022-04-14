import React from "react";

import {Image} from "@themesberg/react-bootstrap"
const docPicture = require ("../assets/img/optimum/Capture.jpg")

export function DocumentInspect() {
    return(
        <>
            <div>
                <Image scr={docPicture} width={20} height={20} alt="document img"/>
            </div>
        </>
    )
}
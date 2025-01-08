import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = ()=>{

    return(

        <Alert className="notFound" variant='danger'>
            <h1>عذراً لا يوجد مواعيد اليوم</h1>
        </Alert>

    )
}

export default NotFound;
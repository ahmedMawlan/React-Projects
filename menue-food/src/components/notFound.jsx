import React from "react";

import Alert from 'react-bootstrap/Alert';
import { Bounce } from 'react-awesome-reveal';

function NotFound() {
    return (
        <>
        <Bounce duration={2000}>
            {['warning'].map((variant) => (
                <Alert style={{fontSize: '30px', textAlign: 'center'}} key={variant} variant={variant}>
                    لا يوجد طعام   
                </Alert>
            ))}
        </Bounce>
        </>
    );
}

export default NotFound;
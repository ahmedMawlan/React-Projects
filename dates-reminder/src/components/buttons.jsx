import React from "react";
import Button from "react-bootstrap/esm/Button";

const Buttons = ({onDelete, onShowData})=>{
    
    return(
        <div className="d-flex justify-content-between">
            <Button onClick={onDelete} variant="primary" size="lg">
                مسح الكل
            </Button>
            <Button onClick={onShowData} variant="secondary" size="lg">
                عرض البيانات
            </Button>
        </div>
    )
}
export default Buttons;
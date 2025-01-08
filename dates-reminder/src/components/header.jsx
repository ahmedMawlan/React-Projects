import React from "react";

const Head = ({data})=>{

    return(
        <div>
            <h1>لديك اليوم {data.length} مواعيد</h1>
        </div>
    )
}

export default Head;
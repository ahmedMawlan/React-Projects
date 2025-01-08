import React from "react";
import Button from 'react-bootstrap/Button';
import { Roll } from 'react-awesome-reveal';


const Header= ({filterFood, allCat})=>{

    


    //to filter by category
    const onFitler = (cat) =>{
        filterFood(cat)
    }
    return(
        <div className='content my-4' >
            <h2 >قائمة الطعام</h2>
            <div className="d-flex justify-content-center">
                <p className="under-line"></p>
            </div>
            <div className="mealsButtons d-flex justify-content-center">
                {
                    allCat.length >=1? (allCat.map((cat) => {
                        return(
                            <Roll>
                                <Button onClick={()=> onFitler(cat)} variant="outline-warning m-2"> {cat} </Button>
                            </Roll>
                        )
                    })):<h3>لا يوجد تصنيفات</h3>
                }
            </div>
        </div>
    )
}

export default Header;
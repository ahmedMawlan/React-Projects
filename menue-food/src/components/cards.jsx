import React from "react";
import Card from 'react-bootstrap/Card';
import NotFound from './notFound'
import {Zoom} from 'react-awesome-reveal';


const Cards= ({menueFoods})=>{

    return(
        <row>

            {
                menueFoods.length >= 1? (menueFoods.map((item)=>{
                    return(
                        <Zoom>
                                <Card key={item.id} className="d-flex flex-row mb-3  card">
                                    <Card.Img className="img-food" style={{maxWidth: '200px'}} variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <p style={{fontWeight: 'bold', fontSize: '2.7vw'}}> {item.title} </p>
                                            <p style={{color: '#f64b0f'}}>{item.price}</p>
                                        </Card.Title>
                                        <Card.Text >
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card> 
                        </Zoom>
                    )
                })): <NotFound  />
            }
        </row>  
    )
}

export default Cards;
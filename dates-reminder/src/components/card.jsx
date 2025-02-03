import React from 'react';
import NotFound from './notFound'

function CardEx({ data}) {
  return (
    <div className='card'>

        {
          data.length? (data.map ((item) =>{
            return(
              <div key={item.id} className="img d-flex justify-content-between">
                <img src={item.img} alt="kid" />
                <div className='p'>
                  <p>{item.name}</p>
                  <p>{item.time}</p>
                </div>
              </div>
            )
          }) ): <NotFound />
        }
        
    </div>
  );
}

export default CardEx;
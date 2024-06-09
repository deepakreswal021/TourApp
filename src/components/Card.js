import React, { useState } from 'react'

const Card = ({id,name,info,image,price,removeTour}) => {
  const [readMore,setReadMore] = useState(false); 
  const readMoreHandler = ()=>{
    setReadMore(!readMore);
  }
  const description = readMore ? info : `${info.substring(0,200)}....`
  return (
    <div className='card'>
      <img src={image} className='image'></img>

      <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-price'>Rs {price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className='description'>
            {description}
            <span className='read-more' onClick={readMoreHandler}>
                {readMore ? `show less` : `read more`}
            </span>
        </div>
      </div>
      <button className='btn-red' onClick={()=>removeTour(id)}> Not Intrested</button>
    </div>
  )
}

export default Card

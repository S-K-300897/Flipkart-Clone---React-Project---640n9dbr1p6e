import React, { useState } from 'react'
import './imageList.css'
import { Carousel } from 'antd';
import {Link} from 'react-router-dom'

function ImageList({ category, photo, price, id,  }) {

  return (
    <>
     
    
      <Carousel autoplay>
      <Link id={id} className="image_details" to={`product/${id}`}> 
        <img src={photo} alt="" />
        <p >Price: {price}</p>
        <p >{category}</p>
      </Link>
      </Carousel>
      
    
    </>
  )
}

export default ImageList
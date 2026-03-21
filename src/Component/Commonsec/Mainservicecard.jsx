import React from 'react'
import './Common.css';

export default function Maincard({id,img,title,description,button}) {
  return (
    <section>
    <div key= {id} className='mainservicecard'>
        <img src= {img} alt="service" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button type='button'> {button} </button>

    </div>
    </section>
  )
};

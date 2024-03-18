import React from 'react'
import Figure from './Figure'

export default function Card ({title, text, imageUrl, date}) {
    <div className='card'>
    <h2>{title}</h2>
  <p>{text}</p>
  <Figure
     imageUrl={imageUrl}
     caption={date}  
  />
  <img src={imageUrl} />
  <figcaption>Awesome pic taken on {date}</figcaption>
  </div>
  }
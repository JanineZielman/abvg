import React from 'react'
import { PrismicImage } from "@prismicio/react";


const Images = ({ slice }) => {
  return(
    <section className='images'>
      {slice.items.map((item, i) => {
        return(
          <div className='image-item'>
            <div className="info">
              <p className="title">{item.title}</p>
            </div>
            <PrismicImage field={item.image}/>
          </div>
        )
      })}
    </section>
  )
}

export default Images
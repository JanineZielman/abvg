import React from 'react'
import { PrismicImage } from "@prismicio/react";

const Image = ({ slice }) => {
  return(
    <section className='image-info'>
      <div className="info">
        <p className="title">{slice.primary.title}</p>
      </div>
      <PrismicImage field={slice.primary.image}/>
    </section>
  )
}

export default Image
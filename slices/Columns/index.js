import React from 'react'
import { PrismicRichText } from '@prismicio/react'


const Columns = ({ slice }) => {
  console.log(slice)
  return(
    <section className='columns'>
      {slice.primary.title && <h2 className='title'>{slice.primary.title}</h2>}
      {slice.items.map((item, i) => {
        return(
          <div className='column'>
            {item.column && <PrismicRichText field={item.column}/>}
            {item.quote && <p className='quote'>{item.quote}</p>}
          </div>
        )
      })}
    </section>
  )
}

export default Columns
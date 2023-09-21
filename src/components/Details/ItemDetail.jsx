import React from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({ item}) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.image} />
      <p> Descripcion:{item.description}</p>
      <p> Price: {item.price}</p>
      <p> Category : {item.category}</p>
      <Counter/>
    </div>
  )
}

export default ItemDetail

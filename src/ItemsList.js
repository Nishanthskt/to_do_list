import React from 'react'
import ListItem from './ListItem'


const ItemsList = ({items,handelCheck,handelDelete}) => {
  return (
   
    <ul>
    {items.map((item)=>(
     <ListItem
      item={item}
      key={item.id}
      handelCheck={handelCheck}
      handelDelete={handelDelete}/>
    ))}
  </ul>
  )
}

export default ItemsList
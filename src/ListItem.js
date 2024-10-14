import React from 'react'
import {  FaTrashAlt } from "react-icons/fa";

const ListItem = ({item,handelCheck,handelDelete}) => {
  return (
    <li className="item" key={item.id}>
        <input type="checkbox"
        onChange={()=>handelCheck(item.id)} checked ={item.checked} />
        <label
         style={(item.checked)?{textDecoration:'line-through'}:null}
        onDoubleClick={()=>handelCheck(item.id)}>{item.item}</label>
        < FaTrashAlt  role="button" onClick={()=>handelDelete(item.id)} tabIndex="0"
        aria-label={`delete ${item.item}`}
        />
      </li>
  )
}

export default ListItem
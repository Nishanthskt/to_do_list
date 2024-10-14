import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handelCheck,handelDelete}) => {
   
  return (
    <main>
      {(items.length)? (
      <ItemsList
      items={items}
      handelCheck={handelCheck}
      handelDelete={handelDelete}
      />
      ):
      (
        <p style={{marginTop:'2rem'}}>your list is empty</p>
      )
      }
    </main>
  )
}

export default Content
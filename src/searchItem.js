import React from 'react'

const searchItem =({search,setSearch})=>{
  return (
  <form  className='searchForm' onSubmit={(e)=>e.preventDefault()}>
  <label htmlFor="search">search</label>
  <input 
     id='search'
     type="text"
     placeholder='search item'
    role='searchbox'  
    value={search} 
    onChange={(e)=>setSearch(e.target.value)}   
 />
  </form>
  )
}
 export default searchItem
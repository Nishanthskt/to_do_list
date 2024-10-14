import React from 'react'

const Header = ({tittle}) => {
  return (
    <header>
        <h1>{tittle}</h1>
    </header>
  )
}
Header.defaultProps={ tittle:"to do list"}
export default Header
import React from 'react'
import '../style.css'

const Header = ({ category, filterdata, searchName }) => {

  const filterbtn = (cat) => {
    filterdata(cat)
  }

  return (
    <div className='container'>
      <h1 align="center">Movie App</h1>

      <div className="search-input d-flex justify-content-center">
        <input type="text"
          className='w-75'
          onChange={ (e) => searchName(e.target.value) }
          placeholder='Search Movie ,Music ,TV-Show'
        />
      </div>

      <div className="navbar nav-contant my-2  d-flex justify-content-between">
        <button onClick={() => filterbtn()}>All</button>
        {
          category.map((val) => {
            return (
              <div className="nav-contant">
                <button onClick={() => filterbtn(val.category)}>{val.category}</button>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Header;
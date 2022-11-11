import React from 'react'
import "./pagination.css"

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num+1);
  return (
    <div className='pagination'>
      { pages.map(num => (
        <button
          key={num}
          onClick={() => handleClick(num)}
        >{num}</button>
      )) }
    </div>
  )
}

export default Pagination;
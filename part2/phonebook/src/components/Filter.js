import React from 'react'

const Filter = (props) => {
  const searchName = props.searchName;
  const handleSearchChange = props.handleSearchChange;

  return (
    <div>
      filter shown with <input value={searchName} onChange={handleSearchChange}/>
    </div>
  )
}

export default Filter
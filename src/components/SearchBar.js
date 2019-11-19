import React from 'react'

const SearchBar = (props) => {
  return(
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
        type="radio"
        value="Alphabetically"
        checked={props.sortby === 'Alphabetically'}
        onChange={props.handleRadio}/>
        Alphabetically
      </label>
      <label>
        <input
        type="radio"
        value="HP"
        checked={props.sortby === "HP"}
        onChange={props.handleRadio}/>
        HP
      </label>
    </div>
  )
}

export default SearchBar

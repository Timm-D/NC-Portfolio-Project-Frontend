import React from 'react'

const CategoryHeader = (props) => {

    const {category} = props

    const makeFirstCap = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

  return (
    <h4>{makeFirstCap(category)}</h4>
  )
}

export default CategoryHeader
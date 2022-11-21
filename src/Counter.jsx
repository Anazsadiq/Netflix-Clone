import React from 'react'

function Counter( props) {
    const {title,Count} = props
  return (
    <div>
       <h1>{title} {Count}</h1>
    </div>
  )
}

export default Counter;

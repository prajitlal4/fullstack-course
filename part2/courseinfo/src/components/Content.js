import React from 'react'

import Part from './Part.js'

const Content = ({content}) => {
  return (
    <p>
      {content.map(part=>
        <Part key={part.id} part={part}/>
      )}
  </p>
  )
}

export default Content
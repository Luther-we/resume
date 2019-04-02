import React from 'react'

const Error404 = (props) => {
  console.log('No milk today', props.match)
  return (
  <>
    <h1>Non found: {props.match.params.id} //////</h1>
  </>
  )
}

export default Error404
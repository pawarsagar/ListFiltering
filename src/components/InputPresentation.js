import React from 'react'
export function InputPresentation(props) {
  return (
    <div className="container">
      <input type="text" className="form-control" id="usr" onChange={props.onChange}/>
    </div>
  )
}
import React from 'react'

export default function Textform(props) {
  return (
//     <div className="mb-3">
//   <label forName="exampleforNamemControlInput1" className="forNamem-label">Email address</label>
//   <input type="email" className="forNamem-control" id="exampleforNamemControlInput1" placeholder="name@example.com">
// </div>
<div className="mb-3">
    <h1>{props.heading}</h1>
  {/* <label forName="myBox" className="forNamem-label">{props.title}</label> */}
  <textarea className="forNamem-control" id="myBox" rows="15" cols="45"></textarea>
</div>
  )
}

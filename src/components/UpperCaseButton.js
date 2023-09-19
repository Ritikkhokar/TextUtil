import React from 'react'
import Textform from './TextForm';

export default function UpperCaseButton(props) {
    const handleOnClick= ()=> {
        console.log("Upper Case Button clicked");
        Textform.se
    }
  return (  
    <button type="button" onClick = {handleOnClick}class="btn btn-primary">{props.title}</button>
  )
}


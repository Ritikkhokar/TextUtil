import React, {useState} from 'react'
import UpperCaseButton from './UpperCaseButton';

export default function Textform(props) {
    const handleOnClick= ()=> {
        console.log("Upper Case Button clicked");
        let newText = text.toUpperCase();
         setText(newText);
    }
const handleOnClickClear= ()=> {
       setText("");
  }
    const handleOnChange= (event)=> {       
        // console.log("Upper Case Button clicked");
       
        setText(event.target.value)
        // console.log("characters: " + ( text.match(/ /g) ? text.match(/ /g).length : 0));
    }
    let [text,setText] = useState("text is setup by set text function in TextForm component");

    let submitDetailsTest = ()=> {
    console.log("parent component to child component communication");
    }
  return (
<div className="text-form">
    <h1>{props.heading}</h1>
  <textarea className="forNamem-control" onChange={handleOnChange} value = {text}id="myBox" rows="10" cols="100"></textarea>
  <div className='button-container'>
  <button type="button" onClick = {handleOnClick}class="btn btn-primary textform-btn">Convert To Upper Case </button>
  <button type="button" onClick = {handleOnClickClear}class="btn btn-primary textform-btn">Clear</button>
  </div>  
  <h1>Your Text Summary</h1>
  <p>words: {text.split(" ").length} and characters: {text.length - ( text.match(/ /g) ? text.match(/ /g).length : 0)}</p>
  <h1>Preview</h1>
  <p>{text}</p>
  <UpperCaseButton title = "test" submitDetails = {submitDetailsTest}></UpperCaseButton>
</div>
  )
}

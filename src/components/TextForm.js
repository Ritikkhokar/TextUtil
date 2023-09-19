import React, {useState} from 'react'

export default function Textform(props) {
    const handleOnClick= ()=> {
        console.log("Upper Case Button clicked");
        let newText = text.toUpperCase();
         setText(newText);
    }
    const handleOnChange= (event)=> {
        // console.log("Upper Case Button clicked");
       
        setText(event.target.value)
        console.log("characters: " + ( [text.match(/ /g)].length));
    }
    let [text,setText] = useState("text is setup by set text function in TextForm component");
  return (
<div className="text-form">
    <h1>{props.heading}</h1>
  <textarea className="forNamem-control" onChange={handleOnChange} value = {text}id="myBox" rows="10" cols="100"></textarea>
  <button type="button" onClick = {handleOnClick}class="btn btn-primary convert-upper-case-btn">{props.title}</button>
  <h1>Your Text Summary</h1>
  <p>words: {text.split(" ").length} and characters: {text.length - [text.matchAll(" ")].length}</p>
</div>
  )
}

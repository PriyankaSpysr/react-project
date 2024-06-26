import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleDowClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lawercase!", "success");
  }
  const handleClearClick = (e) => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleCopy = () => {
    var text = document.getElementById('myform');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra spaces removed!", "success");
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{ color: props.mode==='dark' ? 'white':'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark' ? '#495057':'white', color: props.mode==='dark' ? 'white':'black'}} id="myform" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Converted to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleDowClick}>Converted to Lawercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{ color: props.mode==='dark' ? 'white':'black' }}>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:'Enter preview some text'}</p>
    </div>
    </>
  )
}

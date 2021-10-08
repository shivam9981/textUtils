import React, { useState } from 'react'
import '../css/textbox1.css'

export default function Model1(props) {
    const [text, setText] = useState('')

    const obupperfun = () => {
        const newtext = text.toUpperCase();
        setText(newtext)
    }

    const oblowerfun = () => {
        const newtext = text.toLowerCase();
        setText(newtext)
    }

    const obclearfun = () => {
        const newtext = ''
        setText(newtext)
    }

    const obcopyfun = () => {
        navigator.clipboard.writeText(text)
    }

    const removeExtraspace = () => {
        const newtext = text.split(/[ ]+/)
        setText(newtext.join(" "));
    }

    const changefun = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="constructure1">
                <h2>{props.heading}</h2>
                <textarea className="textbox" style = {{backgroundColor: props.mode === 'dark'?'white':'#2F2E2B' , color: props.mode === 'dark'?'black':'white'}}  
                value={text} onChange={changefun}></textarea>
                <div className="buttondiv">
                    <button type="submit" className="btn" onClick={obupperfun} >UpperCase</button>
                    <button type="submit" className="btn" onClick={oblowerfun}>LowerCase</button>
                    <button type="submit" className="btn" onClick={obclearfun}>Clear</button>
                    <button type="submit" className="btn" onClick={obcopyfun}>Copy</button>
                    <button type="submit" className="btn" onClick={removeExtraspace}>Remove Space</button>
                </div>
                <div className="foot1">
                    <h4>Your Summary</h4>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} word  and
                     {text.length} character and {0.008 * text.split(' ').length} minutes read word</p>
                    <h3>Preview</h3>
                    <p id="para"  style = {{color: props.mode === 'dark'?'black':'black'}}>{text.length > 0 ? text : "Enter someting in the text box above to preview it here"}</p>
                </div>
            </div>
        </>
    )
}

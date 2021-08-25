import React, { useState } from 'react'


export default function TextBox() {

    const douppercase = () => {
        setText(text.toUpperCase())
    }
    const dolowercase = () => {
        setText(text.toLowerCase())
    }
    const onchange = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        let newText = '';
        setText(newText);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text); 
    }

    
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const [text, setText] = useState('Type or Paste your text');

    var numberOfLineBreaks
    var enteredTextEncoded = escape(text);
    var linebreaks = enteredTextEncoded.match(/%0A/g);
    (linebreaks != null) ? numberOfLineBreaks = linebreaks.length : numberOfLineBreaks = 0;

    var words
    if (text === " ")
    {
        words = 0;
    }
    else {
        words = text.split(" ").filter((element)=>{return element.length!==0}).length;
    }

    var Sentences
    if (text === " ") {
        Sentences = 0;
    }
    else {
        Sentences = text.split(/[.!?]/).length - 1;
    }

    return (
        <>
        
        <div className="mb-3">
            <div className="flex-container impclass">
                    <div className="p-2 imp flex-fill">Words 
                        <div className="result">
                        {words}
                        </div>
                    </div>
                    <div className="p-2 imp flex-fill">Characters 
                        <div className="result">
                        {text.length}
                        </div>
                    </div>
                    <div className="p-2 imp flex-fill">Sentences <br /> <br />
                        <div className="result">
                            {Sentences}
                        </div>    
                    </div>
                    <div className="p-2 imp flex-fill">Paragraph <br />  <br />
                        <div className="result">
                            {numberOfLineBreaks}
                        </div>
                    </div>
                    <div className="p-2 implast flex-fill">Reading Time <br /> <br />
                        <div className="result" style={{"fontSize" : "20px"}}>
                            {0.00070212766 * text.length} Minute
                        </div>
                    </div>
            </div>   
            <textarea className="form-control " id="exampleFormControlTextarea1" rows="9" value={text} onChange = {onchange}></textarea>
            <button className="btn btn-primary  mx-3 my-3" onClick = {douppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={dolowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-3" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>


        </div>
        </>
    )
}

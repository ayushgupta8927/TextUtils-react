import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        //console.log("Button is clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper case ","success");

    }
    const handlelowclick=()=>{
        //console.log("Button is clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to lower case ","success");

    }
    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text)
        // setCopySuccess('Copied!');
        props.showalert("Text copied to clipboard","success");

    }
    const handleclearclick=()=>{
        setText('');
        // setCopySuccess('');
        props.showalert("Text cleared ","success");

    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Extra Space Removed ","success");

    }
    const handleOnchange=(event)=>{
        //console.log("on change retrieved");
        setText(event.target.value);
        // setCopySuccess('');


    }
    const countwords=(text)=>{
        text= text.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
        text= text.replace(/[ ]{2,}/gi," ");//2 or more space to 1
        text= text.replace(/\n /,"\n"); // exclude newline with a start spacing
        return text.split(' ').filter(function(str){return str!=="";}).length;
    }

    const [text,setText]=useState("");
    // setText("New text here");
    // const [copySuccess, setCopySuccess] = useState('');

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'#343a40'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="mybox" className="form-label">Enter Your Text Below</label> */}
                <textarea className="form-control" value={text} id="mybox"onChange={handleOnchange} style={{backgroundColor : props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'#343a40'}}rows="10"></textarea>
            </div>
            <button className="btn btn-primary my-2" onClick={handleupclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlecopyclick}>Copy Text</button>
            {/* {copySuccess} */}
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


        </div>
        <div className="container my-3"style={{color : props.mode==='dark'?'white':'#343a40'}}>
            <h1>Paragraph Summary</h1>
            <p>{countwords(text)} words and {text.length} characters</p>
            <p>{0.008*countwords(text)} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the above Textbox to preview it here"}</p>
        </div>
        </>
    )
}

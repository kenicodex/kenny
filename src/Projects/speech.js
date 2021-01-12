import React, { useState } from "react"
function Speech() {
    
    const [speech, setspeech] = useState("")
    const [err,  seterr] = useState("")

    const Speechrec = window.webkitSpeechRecognition;
    var SpeechGrammarList = window.webkitSpeechGrammarList ;

    var grammer = '#JSGF V1.0;';
    const recognintion = new Speechrec();
    var grammerlist = new SpeechGrammarList();
    grammerlist.addFromString(grammer, 1);

    recognintion.grammers = grammerlist;
    recognintion.lang = 'en-US';

    // onresult 
    // onspeechend 
    // onerror

    recognintion.onresult = function(event){
        var last = event.results.length - 1;
        // var command = event.results[last][0].transcript
        setspeech(event.results[last][0].transcript)
    }
    recognintion.onstart = function(){
        alert("started")
    }
    recognintion.onspeechend = function(){
        recognintion.stop()
        alert('you stoped talking')
    }
    recognintion.onerror = function(event){
        seterr(event.error)
    }
    return( 
        <div>
            Speech
           <p> {speech}</p>
            {err}
<button onClick={()=>recognintion.start()}> Click here to say some thing</button>
        </div>
    )
}
export default Speech
import React, { useState } from 'react';

function Little(props) {
    const [mode, setMode] = useState([
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false},
    {value:'', bool: undefined, clicked: false}
    ])
    const [just, setJust] = useState(true)
    const [show, setShow] = useState(false)
    // const [players, setPlayers] = useState([{player:"1"},{player: '2'}])
    const stop = ()=>{
        let newArr = mode;
        newArr.forEach(element => {
            element.clicked = true
        });
        alert('win')
    }
    const win = ()=>{
        if (mode[0].bool && mode[1].bool && mode[2].bool) {
            stop()
        } else if(!mode[0].bool && !mode[1].bool && !mode[2].bool){
            stop()
        }
    }
    const start = ()=>{
        setShow(true)
    }
    const change = (box) => {
        // true --> x -__-  false --> o
        let newArr = mode;
        let played = newArr[box]
        if (!played.clicked) {
            if (just) {
                setJust(false)
                played.value = 'X'
            }else{
                setJust(true)
                played.value = 'O'
            }
            played.bool = just
            played.clicked = true
        }
        setMode(newArr)
        // win()
    }
    return (
        <div className='h-100'  style={{width:'200px'}}>
            {just ? 'Player 1  X' : 'Player 2  O'}
            <div className="k-row" style={{flexWrap:'wrap', display :show ? 'flex' : 'none'}}>
                {mode.map(({value, bool},index) => {
                  return(  <div className=" border bg-primary" onClick={() => { change(index) }}
                                style={{flex:"33.33%", height:'40px',width:'40px'}}>
                        {value}
                    </div>)
                })}
            </div>
            <button className='btn border m-2'style={{display :show ? 'none' : 'block'}} 
            onClick={()=>{start()}}>Start game</button>
        </div>
    );
}

export default Little;
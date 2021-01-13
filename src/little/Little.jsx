import React, { useState } from 'react';
import './little.css'

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
        if (show) {
            setShow(!show)
        } else { 
            setShow(!show)
        }
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
        <div className='h-auto w-100 p-2 bg-light text-dark'  style={{width:'200px'}}>
            Play Tic Tac Toe
            <div className="k-row" style={{flexWrap:'wrap', display :show ? 'flex' : 'none',height:"200px", width:'200px'}}>
                {mode.map(({value, bool},index) => {
                  return( <div key={index} className="boxes text-dark text-center" onClick={() => { change(index) }}
                                style={{flex:"33.33%", height:'40px',width:'40px'}}>
                        {value}
                    </div>)
                })} <br/>
                {just ? 'Player 1  X' : 'Player 2  O'}
            </div> <br/>
            <button className='btn border text-dark'
            onClick={()=>{start()}}>{show ? 'End' : 'Start'} game</button>
        </div>
    );
}

export default Little;
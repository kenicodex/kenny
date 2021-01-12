import React, { useEffect } from 'react';
import { useState } from 'react';
import { numbers, checksign, clear } from './calc';

function Calc(props) {
    const signArr = ["+", "-", "*", "/"]
    const [user, setUser] = useState("")
    const [next, setNext] = useState(false)
    const [ans, setAns] = useState(false)
    const [_sign, setSign] = useState("")

    useEffect(() => {
        setNext(parseFloat(user.substring(user.lastIndexOf(_sign) + 1, user.length)))
        for (let i = 0; i < signArr.length; i++) {
            // const element = signArr[i];
            // setNext(parseFloat(user.substring(user.lastIndexOf(element) + 1, user.length))) 
        }
    }, [user, signArr])

    const write = (x) => {
        setUser(user.concat(x))
        // alert(parseFloat(user.substring(user.lastIndexOf(_sign) + 1, user.length)))
    }
    const equal = () => {
    }
    const operator = (sign) => {
        setSign(sign)
        if (checksign(user)) {
            setUser(user.concat(sign))
            if (!ans && !next) {
                setAns(parseFloat(user))
                // setNext(0)
            } else {
                switch (sign) {
                    case "+":
                        setAns(parseFloat(ans + next))
                        break;
                    case "-":
                        setAns(parseFloat(ans - next))
                        break;
                    case "*":
                        setAns(parseFloat(ans * next))
                        break;
                    case "/":
                        setAns(parseFloat(ans / next))
                        break;
                    default:
                        alert("Unexpected Error")
                        break;
                }
            }
        } else {
            // setUser(user.replace(user.substring(user.length-1,user.length), sign) )
        }
    }
    return (
        <div className="m-auto">
            <input type="text" className="w-25 ml-4 rounded-top" value={user} disabled />
            <div className="w-25 ml-4 rounded-top">
                {/* {"new value : " + next} <br /> */}
                {" answer : " + ans}
            </div>
            <div className="border w-25 mx-4 row rounded-bottom">
                {numbers.map(({ num }) => {
                    return (
                        <button onClick={() => { write(num) }}
                            className="col-4 border-dark btn-primary text-center btn">{num}</button>
                    )
                })}
                <div className="col-4 border-dark btn-primary text-center btn" onClick={() => { operator("+") }}>+</div>
                <div className="col-4 border-dark btn-primary text-center btn" onClick={() => { operator("*") }}>x</div>
                <div className="col-4 border-dark btn-primary text-center btn" onClick={() => { operator("/") }}>/</div>
                <div className="col-4 border-dark btn-primary text-center btn" onClick={() => { operator("-") }}>-</div>
                <div className="col-4 border-dark btn-primary text-center btn" onClick={() => { equal() }}>=</div>
                <div className="col-4 border-dark btn-primary text-center btn" onMouseUp={() => { setUser(clear(user)) }}>C</div>
                <div className="col-4 border-dark btn-primary text-center btn" onMouseUp={() => { setUser("") }}>CE</div>
            </div>
        </div>
    );
}
export default Calc;
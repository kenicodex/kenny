import React, { useEffect, useState } from 'react';
import { getList, subcribe } from './todolist';
import './TodoList.css'

function TodoList(props) {
    const [newItem, setNewItem] = useState("")
    const [list, setList] = useState(getList())

    const add = (item) => {
        if (newItem !== "") {
            setList([...list, item])
            subcribe([...list, item])
        }
    }
    const reomove = (item, value) => {
        let newArr = [...list];
        newArr.splice(item, 1)
        setList(newArr)
        subcribe(newArr)
    }
    const change = (item, value) => {
        let newArr = [...list]
        newArr.splice(item, 1, "value")
        subcribe(list)
        setList(newArr)
    }
    const press = (event) => {
        setNewItem(event.target.value)
    }
    useEffect(() => {

    }, [list])
    return (
        <div className="h-auto">
            <div className="h3 h-50px px-2 k-box">TodoList </div>
            {/* <br /> store : {getList()} <br /> list length : {list.length} <br /> status : {status} */}

            <div className="k-row container">
                <div className="my-1 col-lg-4">
                    <div className="mr-1 k-bord p-2 k-posr" style={{ height: "200px" }}> Add to List<hr />
                        <div className="d-flex mt-3">
                            <input type="text" className="addtolist" value={newItem} placeholder="Add a new item..."
                                onChange={(event) => { press(event) }} />
                            <button className="addbtn"
                                onClick={() => { add(newItem) }}>Add</button>
                        </div>
                        <button className="addbtn" onClick={() => { }}>Edit</button>
                        <button className="addbtn" onClick={() => { setList([]); subcribe([]) }}>Clear</button>
                        <div className="p-2">
                            Write a new item you want to add to list
                        </div>
                    </div>
                </div>
                <div className="my-1 col-lg-4">
                    <div className="mr-1 k-bord p-2 k-posr" style={{ height: "200px" }}>  List 
                        <span className="float-right ">{"You have " + list.length + " item(s) in your list"}</span>
                     <hr />
                        <div style={{ overflowY: "scroll", height: "130px" }}>
                            {list.map(((x, index) => {
                                return (
                                    <div className="my-1 k-posr task" key={index}> {index + 1}.
                                        {x}
                                        <button className="k-btn rounded-circle k-posaR" style={{ height: "20px", width: "20px", fontSize: "10px" }}
                                            onClick={() => { reomove(index, x) }}
                                        > X</button>
                                        <button className="k-btn rounded k-posa" style={{ right: "10%", height: "20px", fontSize: "12px" }}
                                            onClick={() => { change(index, x) }}
                                        > edit</button>
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
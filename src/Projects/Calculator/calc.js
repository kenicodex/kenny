
export const setPrev = (prev) => {
    sessionStorage.setItem("prev", prev)
}
export const getPrev = () => {
    let store = sessionStorage.getItem("prev")
    return store
}
export const setNext= (next) => {
    sessionStorage.setItem("next", next)
}
export const getNext= () => {
    let store = sessionStorage.getItem("next")
    return store
}
export const checksign = (x) => {
    let len = x.length
    let sub = x.substring(len, len - 1) 
    if (len !== 0 && sub !== "-" && sub !== "/" && sub !== "+" && sub !== "*" && sub !== ".") {
        return true
    } else {
        return false
    }
}
export const tryAdd = (word, num1, num2)=>{
    return {
        newWord : word,
        answer : num1 + num2
    }
}
export const clear = (word)=>{
    var len = word.length;
    var newWord = word.substring(0, len-1)
    return newWord
}
export const numbers = [
    { num: "1" },
    { num: "2" },
    { num: "3" },
    { num: "4" },
    { num: "5" },
    { num: "6" },
    { num: "7" },
    { num: "8" },
    { num: "9" },
    { num: "0" },
    { num: "." }
]
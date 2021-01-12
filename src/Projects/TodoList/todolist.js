export const subcribe = (sub)=>{
    localStorage.setItem("sub", JSON.stringify(sub))
    alert(getList())
}

export const getList = ()=>{
   let save = localStorage.getItem("sub")
   return JSON.parse(save) 
}

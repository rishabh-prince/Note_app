
// storage.js is used to get and update data.

export const getLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem("notes")) ?? []
}
export const updateLocalStorage = (data)=>{
    // getting previous data from local storage and updating the data.
      const prevdata = getLocalStorage()
       prevdata.push(data)

       localStorage.setItem("notes", JSON.stringify(prevdata));
       return ;

}

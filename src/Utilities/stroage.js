const setToStorage = (p) => {
    localStorage.setItem('break',JSON.stringify(p))
}
const getToStorage =(p) =>{
    let item = '';
    const getItem = localStorage.getItem('break')
    if(getItem){
        item =JSON.parse(getItem)
    }
    return item;
}
export {
    setToStorage,
    getToStorage
}
const teste = (value) =>{
    const data = JSON.stringify(dataResults)
    localStorage.teste = data
    console.log(data)
}

const teste1 = () =>{
    const data = JSON.parse(localStorage.teste)
    console.log (data['A'])
}

const teste2 = ()=>{
    location.reload()
}

//localStorage.removeItem(key);
//localStorage.clear();

// setItem(): Add key and value to localStorage
// getItem(): Retrieve a value by the key from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve nth key of a localStorage
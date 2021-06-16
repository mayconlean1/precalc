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
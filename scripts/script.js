const dataResults = {
    'A' : '',
    'B' : '',
    'C': '',
}

const calculations = {
    'A': ['C + B' , 'B + 1' , 'D+2'],
    'B': ['A + C'],
    'C': ['A + B']
}


let wasSolved
let notSolved

let currentVariable
let lastVariable

const update = () =>{
    const keys = Object.keys(dataResults)
    keys.forEach(key => {
        const inputs = document.querySelector(`#fieldInputVariable_${key}`)
        inputs.value = dataResults[key]
    })  
}

const edit = (self)=>{
    selfInput = self
}

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
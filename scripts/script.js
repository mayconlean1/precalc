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

let responses = {solved:{} , notSolved:{}}

let currentVariable

const showResult = ()=>{
    const rules = ()=>{ 
        const solved = responses.solved
        for(let variable in solved){
            const results = solved[variable]

            const tempComparison = []
            for(let exp in results){
                let result = results[exp]
                if (result.length === 1){
                    result = result.join('')
                    tempComparison.push(result)
                }
                // console.log(result.length ,exp , result)
            }
            const tempComparisonFilter = tempComparison.filter(r => r != tempComparison[0])
            const singleResponse = tempComparisonFilter.length === 0
            if (singleResponse){
                console.log (variable,tempComparison[0], singleResponse)

            }

        }   

        

    }

    rules()
}

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
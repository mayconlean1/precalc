const dataResults = {
    'A' : '',
    'B' : '',
    'C': '',
}

const calculations = {
    'A': ['C + B' /*, 'B + 1' , 'D+2'*/],
    'B': ['A + C'],
    'C': ['A + B']
}

let responses = {} //{solved:{} , notSolved:{}}

let currentVariable

const checkFixed = (self,variable) =>{
    const idCheckbox = document.querySelector(`#checkbox_${variable}`)
    idCheckbox.checked = !idCheckbox.checked


    const checkClass = (classList)=>{
        let tempClass = []
        classList.forEach(v => tempClass.push(v) )
        return tempClass.includes('checked')
    }
    const checked = checkClass(self.classList)

    if (checked){
        self.classList.remove ('checked')
    }else{
        self.classList.add ('checked')

    }
    
}

const getResults = {
    uniqueResults (responses={}){
    const solved = responses.solved
    const res = {}
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
            //console.log (variable,tempComparison[0], singleResponse)
            res[variable] = tempComparison[0]
        }
    }
    return res
    },   
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


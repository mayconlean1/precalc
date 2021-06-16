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

let varsFixed = []
let responses = {} //{solved:{} , notSolved:{}}
let currentVariable

const renderMainDefault = () =>{
    const main = document.querySelector('main')
    console.log(main)
    main.innerHTML = `
        <div class="newVariable"></div>
        <div class="fieldsVariableValues"></div>
    `
}

const toogleFixed = (variable, toogleInArray = true) =>{
    
    const idCheckbox = document.querySelector(`#checkbox_${variable}`)
    idCheckbox.checked = !idCheckbox.checked

    const idBtnFixed = document.querySelector(`#btnFixed_${variable}`)

    const checkClass = (classList)=>{
        let tempClass = []
        classList.forEach(v => tempClass.push(v) )
        return tempClass.includes('checked')
    }
    const checked = checkClass(idBtnFixed.classList)

    if (checked){
        const delVariableInArray = (variable , toogleInArray) =>{
            if (toogleInArray){
                varsFixed.forEach((v,i)=>{
                    if(v == variable){
                        varsFixed.splice(0,1)
                        console.log('checked',v,i ,varsFixed)
    
                    }
                })
            }
        }

        delVariableInArray(variable, toogleInArray)

        idBtnFixed.classList.remove ('checked')
       
    }else{
        const addVariableInArray = (variable, toogleInArray)=>{
            if (toogleInArray){
                varsFixed.push(variable)
            }
        }
        addVariableInArray(variable, toogleInArray)

        idBtnFixed.classList.add ('checked')
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


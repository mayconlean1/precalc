//constantes

let dataResults = {
    'A' : '',
    'B' : '',
    'C': '',
    'D' : '',
    'E' : '',
    'F': '',
    'G' : '',
    'H' : '',
    'I': '',
    
    
}
let calculations = {
    'A': ['C + B' , 'B + 1' , 'D+2'],
    'B': ['A + C'],
    'C': ['A + B']
}
let selectedCalculations = {} //{A : [calc , resp]}

let varsFixed = []
let responses = {
    solved:{} , notSolved:{} , sequence:{}
} //{solved:{} , notSolved:{} , sequence:{}}
// sequence:{
    //     A: {
    //         'C + B': [true, 70], 
    //         'B + 1':  [true, 44], 
    //         'D+2': [false , ['D' , 'E']]
    //     }
        
    // }
let currentVariable

let autoResults = true
let autoFixed = true

//constantes
const selectCalculations = (self , variable, calc, response) =>{
    const addDeleteInSelectedCalculations = (variable , calc , response)=>{
        
        selectedCalculations[variable] = selectedCalculations[variable] || []
        const tempLength = selectedCalculations[variable].length
        
        if (tempLength == 0){
            delete selectedCalculations[variable]
            selectedCalculations[variable]=[calc , response]
        }else{
            const tempCalc = selectedCalculations[variable][0]
            delete selectedCalculations[variable]
            if(tempCalc == calc){
                selectedCalculations[variable] = []
            }else{
                selectedCalculations[variable]=[calc , response]
            }
        }

    }

    const deleteEmptyVars = () =>{
        const emptyVars = []
        for (let variable in selectedCalculations){
            const calcs = selectedCalculations[variable]
            if (calcs.length == 0){
                emptyVars.push(variable)
            }
        }
        emptyVars.forEach(variable => delete selectedCalculations[variable])
    }

    addDeleteInSelectedCalculations(variable , calc , response)
    addBorderInVariableDetails()
    deleteEmptyVars()
}

const renderMainDefault = () =>{
    const main = document.querySelector('main')
    main.innerHTML = `
        <div class="fieldsVariableValues"></div>
    `
    renderVariables()
    const renderVarsFixed = ()=>{
        varsFixed.forEach(varFixed => toogleFixed(varFixed,false))
    }
    renderVarsFixed()
    highlightCurrentVar(currentVariable)
    showResultsInInputs()
    showSelectedResults()
}

const deleteVariable=(variable)=>{
    const check = confirm(`Deseja deletar ${variable} ?`)
    if(check){
        delete dataResults[variable]
        delete calculations[variable]
        delete responses.solved[variable]
        delete responses.notSolved[variable]
        delete responses.sequence[variable]
        delete selectedCalculations[variable]
        renderMainDefault()  
    }
}

const clearAllDatas = () =>{
    dataResults = {}
    calculations = {}
    selectedCalculations = {}
    varsFixed = []
    responses = {solved:{} , notSolved:{} , sequence:{}}
    currentVariable = undefined
}

const clearFields = () =>{
    const fields = document.querySelectorAll('.fieldInputVariable')
    fields.forEach(field => field.value = '')
    if(autoFixed){
        varsFixed = []
    }
    calculate()
    renderMainDefault()
}

const highlightCurrentVar = (variable) =>{
    const vr = `.${variable}`
    const fieldVariable = document.querySelector(vr)
    removeAllHighlights=()=>{
        const allFields = document.querySelectorAll('.fieldVariable')
        allFields.forEach(div => {
            div.classList.remove('currentVariable')
        });        
    }
    removeAllHighlights()
    try{
        fieldVariable.classList.add('currentVariable')
        currentVariable = variable
    }catch{}
}






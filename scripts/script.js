const dataResults = {
    'A' : '',
    'B' : '',
    'C': '',
    // 'D' : '',
    // 'E' : '',
    // 'F': '',
    
}
const calculations = {
    'A': ['C + B' , 'B + 1' , 'D+2'],
    'B': ['A + C'],
    'C': ['A + B']
}

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

const renderMainDefault = () =>{
    const main = document.querySelector('main')
    main.innerHTML = `
        <div class="fieldsVariableValues"></div>
    `
    renderVariables()
    showResultsInInputs()
}

const toogleFixed = (variable, pushInArray = true) =>{
    
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
        const delVariableInArray = (variable , pushInArray) =>{
            if (pushInArray){
                varsFixed.forEach((v,i)=>{
                    if(v == variable){
                        varsFixed.splice(0,1)
                    }
                })
            }
        }

        delVariableInArray(variable, pushInArray)

        idBtnFixed.classList.remove ('checked')
       
    }else{
        const addVariableInArray = (variable, pushInArray)=>{
            if (pushInArray){
                varsFixed.push(variable)
            }
        }
        addVariableInArray(variable, pushInArray)

        idBtnFixed.classList.add ('checked')
    }
    
}

const showResultsInInputs = () =>{
    const keys = Object.keys(dataResults)
    keys.forEach(key => {
        const inputs = document.querySelector(`#fieldInputVariable_${key}`)
        inputs.value = dataResults[key]
    })  
}

const deleteVariable=(variable)=>{
    delete dataResults[variable]
    delete calculations[variable]
    delete responses.solved[variable]
    delete responses.notSolved[variable]
    delete responses.sequence[variable]

    renderMainDefault()
    
}






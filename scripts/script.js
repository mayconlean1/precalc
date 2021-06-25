const dataResults = {
    'A' : '',
    'B' : '',
    'C': '',
    'D' : '',
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
                        varsFixed.splice(i,1)
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

    (handleControllerWithToggle = ()=>{
        if (varsFixed.length > 0){
            const controlBar = {
                rightButton:{
                    'Add' : 'createVariableWindow()'
                },
                middleButton:{
                    'Calc': `calculate()`
                }
            }
            renderController(controlBar)
            
        }else{
            const controlBar = {
                rightButton:{
                    'Add' : 'createVariableWindow()'
                },
            }
            renderController(controlBar)
        }  
    })()
}

const showResultsInInputs = () =>{
    const keys = Object.keys(dataResults)

    const clearAllResultsStatus = ()=>{
        const solvedStatus = document.querySelectorAll(`.variableSolvedStatus`)
        solvedStatus.forEach(div =>{
            div.textContent = ''
            div.parentElement.classList.remove('varSolved')
        })
        
    }
    clearAllResultsStatus()

    const clearAllInputsField = () =>{
        const fields = document.querySelectorAll('.fieldInputVariable')
        fields.value = ''
    }
    clearAllInputsField()

    keys.forEach(variable => {
        const inputs = document.querySelector(`#fieldInputVariable_${variable}`)
        inputs.value = dataResults[variable] || ''

        if (responses.solved[variable]){
            (showResStatusGreaterThan1 = (variable)=>{
                const varSolvedlenght = Object.values(responses.solved[variable]).length

                if(varSolvedlenght > 1){
                    const solvedStatus = document.querySelector(`#variableSolvedStatus_${variable}`)
                    solvedStatus.textContent = `${varSolvedlenght} resultados`
                    solvedStatus.parentElement.classList.add('varSolved')      
            }
            })(variable)
    
        }
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

const highlightCurrentVar = (self , variable) =>{
    (removeAllHighlights=()=>{
        const allFields = document.querySelectorAll('.fieldVariable')
        allFields.forEach(div => {
            div.classList.remove('currentVariable')
        });        
    })()
    self.classList.add('currentVariable')
    currentVariable = variable
}






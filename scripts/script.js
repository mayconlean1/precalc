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
    addDeleteInSelectedCalculations(variable , calc , response)
    addBorderInVariableDetails()
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

    handleControllerWithToggle = ()=>{
        if (varsFixed.length > 0){
            // const controlBar = {
            //     rightButton:{
            //         'Add' : 'createVariableWindow()'
            //     },
            //     middleButton:{
            //         'Calc': `calculate()`
            //     }
            // }
            // renderController(controlBar)
            
        }else{
            // const controlBar = {
            //     rightButton:{
            //         'Add' : 'createVariableWindow()'
            //     },
            // }
            // renderController(controlBar)
        }  
    }
}


const deleteVariable=(variable)=>{
    delete dataResults[variable]
    delete calculations[variable]
    delete responses.solved[variable]
    delete responses.notSolved[variable]
    delete responses.sequence[variable]
    delete selectedCalculations[variable]

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






const dataResults = {
    'A' : '',
    'B' : '',
    'C': '',
}
const calculations = {
    // 'A': ['C + B' , 'B + 1' , 'D+2'],
    // 'B': ['A + C'],
    // 'C': ['A + B']
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

const addCalculations = (variable) =>{
    // calculations[variable] = calculation
    console.log(variable)
}

const renderMainDefault = () =>{
    const main = document.querySelector('main')
    main.innerHTML = `
        <div class="newVariable"></div>
        <div class="fieldsVariableValues"></div>
    `
    renderVariables()
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

const deleteVariable=(variable)=>{
    delete dataResults[variable]
    delete calculations[variable]
    delete responses.solved[variable]
    delete responses.notSolved[variable]
    delete responses.sequence[variable]

    renderMainDefault()
    
}

const renderController = (data={buttonAdd:''}) =>{
    const controller = `
    <div class="controlBar">
        <div class="controllerAdd" onclick="${data.buttonAdd}">Add</div>
        <div class="controls">
            <div class="controller" onclick="renderMainDefault()">back</div>
            <div class="spacer"></div>
            <div class="controller">next</div>
        </div>
    </div>
    `
    return controller
}


const calculate = (self) => {

    if(typeof(self) === 'object'){
        
        const variableName = self.id.split('_').map( (pos , index) => index !== 0? pos : '').join('')
        variableCurrent = variableName
        const varValue = self.value
        dataResults[variableName] = varValue
        updateResponses()
        updateDataResults()
        showResultsInInputs()

    }else if (typeof(self) === 'string'){

        const variableName = self
        variableCurrent = variableName
        const varValue = self.value
        dataResults[variableName] = varValue
        updateResponses()
        updateDataResults()

    }else if (typeof(self) === 'undefined'){

        const addInputValuesInDataResults = ()=>{
            const inputs = document.querySelectorAll('.fieldInputVariable')
            inputs.forEach(input => {
                const variable = input.parentNode.parentNode.classList[1]
                const value = input.value
                dataResults[variable] = value
            })
        }

        const clearAllFields = ()=>{
            const inputs = document.querySelectorAll('.fieldInputVariable')
            inputs.forEach(input => {               
                input.value = ''
                input.placeholder = ''
            })
        }

        addInputValuesInDataResults()
        clearAllFields()
        updateResponses()
        updateDataResults()
        updateSelectedCalculations()
        showResultsInInputs()
        showSelectedResults()
    }
}

const updateSelectedCalculations = () =>{
    for(variable in selectedCalculations){
        const [calc] = selectedCalculations[variable]
        try{
            const newResp = responses.sequence[variable][calc][1]
            selectedCalculations[variable] = [calc , newResp]
        }catch{} 
    }
}

const showSelectedResults = ()=>{
    for(let variable in selectedCalculations){
        const [calculation,resp] = selectedCalculations[variable]
        const input = document.getElementById(`fieldInputVariable_${variable}`)
        input.value = varsFixed.includes(variable)? dataResults[variable] : resp
        input.placeholder =  calculation == undefined? '':calculation
    }
}

const initDebounce = ( fn,wait=600,time) =>{
    return (self) =>{
        clearTimeout(time)
        time = setTimeout(()=>fn(self),wait)
    }
}
const debounce = initDebounce(calculate)

const keyupDiv = (self)=>{
    debounce(self)
}

const updateDataResults = () =>{
    const updateDataRes = getResults.uniqueResults(responses)
    
    for(let vari in updateDataRes){
        const result = updateDataRes[vari]
        if(!varsFixed.includes(vari)){

            dataResults[vari] = result 
        }
    }
}

const updateResponses=()=>{
    const filtredCalculations = {...calculations}
    const tempDataResults = {...dataResults} 
    const resolvedExpressions = resolveAllExpressions(filtredCalculations , tempDataResults)

    const createObjectSolvedNotSolved = (resolvedExpressions) =>{
        let responses = {
            solved:{}, 
            notSolved:{}, 
            sequence:{}
        }
    
        for (variable in resolvedExpressions){
            const results = resolvedExpressions[variable]
            results.forEach(response =>{
            const [resp , solved , exp] = response
                if(solved){
                    responses.solved[variable] = responses.solved[variable] || {}
                    responses.solved[variable][exp] = responses.solved[variable][exp] || []
                    responses.solved[variable][exp].push(resp)
    
                }else{
                    
                    responses.notSolved[variable] = responses.notSolved[variable] || {}
                    responses.notSolved[variable][exp] = responses.notSolved[variable][exp] || []
                    responses.notSolved[variable][exp].push(resp)
                }
                responses.sequence[variable] = responses.sequence[variable] || {}
                responses.sequence[variable][exp] = responses.sequence[variable][exp] || []
                responses.sequence[variable][exp].push(solved)
                responses.sequence[variable][exp].push(resp)

            })
        
        }
        return responses
    }
    responses = createObjectSolvedNotSolved(resolvedExpressions)
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


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
    }
}

const initDebounce = ( fn,wait=1000,time) =>{
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
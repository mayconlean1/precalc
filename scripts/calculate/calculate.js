const calculate = (self) => {
    const variableName = self.id.split('_').map( (pos , index) => index !== 0? pos : '').join('')
    const vn = variableName
    variableCurrent = variableName

    const input = self.value

    dataResults[vn] = input
    const filtredCalculations = {...calculations} 
    //delete filtredCalculations[vn]
    const resolvedExpressions = resolveAllExpressions(filtredCalculations , dataResults)

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
    
    const updateDataResults = getResults.uniqueResults(responses)
    
    delete updateDataResults[vn] // deletar current
    for(let variable in updateDataResults){
        const result = updateDataResults[variable]
        if(currentVariable != variable){
            dataResults[variable] = result 
        }
    }
    update()
}
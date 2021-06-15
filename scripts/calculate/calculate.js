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
            notSolved:{}
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
            })
        
        }
        return responses
    }

    responses = createObjectSolvedNotSolved(resolvedExpressions)
    
    showResult()
    
}
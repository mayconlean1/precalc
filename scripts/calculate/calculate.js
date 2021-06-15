const calculate = (self) => {
    const variableName = self.id.split('_').map( (pos , index) => index !== 0? pos : '').join('')
    const vn = variableName
    variableCurrent = variableName

    const input = self.value

    dataResults[vn] = input
    const filtredCalculations = {...calculations} 
    delete filtredCalculations[vn]
    const resolvedExpressions = resolveAllExpressions(filtredCalculations , dataResults)
    
    let responses 

    for (variable in resolvedExpressions){
        const results = resolvedExpressions[variable]

        responses = results.reduce((responses , response)=>{
             const [resp , solved , exp] = response
            if (solved){
                responses['solved'] = responses['solved'] || {}
                responses['solved'][variable] = responses['solved'][variable] || []
                responses['solved'][variable].push (resp)
            }else{
                responses['notSolved'] = responses['notSolved'] || {}
                responses['notSolved'][variable] = responses['notSolved'][variable] || []
                responses['notSolved'][variable].push (resp)

            }
            console.log(exp , resp)
            return responses

            // console.log(resp , solved)
        },{})
    // console.log(responses)

        // for (result of results){
        //     const [resp , resolved] = result
        //      if(resolved){
        //         console.log(variable, resp)

        //     }else{
        //         console.log(variable, resp )
        //     }
        // }
    }

    // if (input != '' ){
        // dataResults[vn] = input
        // const filtredCalculations = {...calculations} 
        // delete filtredCalculations[vn]
        // const resolvedExpressions = resolveAllExpressions(filtredCalculations , dataResults)
        // console.log(resolvedExpressions )
    // }else{
        
    // }
    // const filtredCalc = calculations.filter( (value)=>  vn !== value[0]  )
    

    // let index = 0 
    // const cKeys = Object.keys(calculations)
    // const cValues = Object.values(calculations)
    // for (let v in calculations){
    //     if (variableCurrent != v){
    //         // calculations[v].map()
    //         // console.log (v , calculations[v])
    //     }
    // }

    // const multliplier = filtredCalc.length * filtredCalc.length
    // let cont = 0
    // for(let c = 0 ; c < multliplier ; c++ ){
    //     cont = cont > filtredCalc.length -1 ? 0 : cont
    //     cont ++
    // }
}
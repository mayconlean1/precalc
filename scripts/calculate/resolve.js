const resolveExpression = (expression ='', dataToReplace = {} ) =>{
    const exp = expression
    const data = dataToReplace

    for(let i in data){
        if(data[i] == ''){
            delete data[i]
        }
    }
    
    const insertSpaces = (string) =>{
        let filtredString = string
        const characters = ['+' , '-', '*', '/', '^', '(' , ')', ',']
        
        filtredString = filtredString.split('+')
        filtredString = filtredString.join(' + ' )

        filtredString = filtredString.split('-')
        filtredString = filtredString.join(' - ' )

        filtredString = filtredString.split('*')
        filtredString = filtredString.join(' * ' )

        filtredString = filtredString.split('/')
        filtredString = filtredString.join(' / ' )

        filtredString = filtredString.split('^')
        filtredString = filtredString.join(' ^ ' )

        filtredString = filtredString.split('(')
        filtredString = filtredString.join(' ( ' )

        filtredString = filtredString.split(')')
        filtredString = filtredString.join(' ) ' )

        filtredString = filtredString.split(',')
        filtredString = filtredString.join(' , ' )

        return filtredString
    }

    const assignValues = (dataObject={}, stringSpaced='')=>{
        let assignedValues = stringSpaced.split(' ')
        for (let key in dataObject){
            assignedValues = assignedValues.map((element ) => String(element) === String(key) ? dataObject[key] : element)
        };
        assignedValues = assignedValues.join(' ')
        // console.log ( assignedValues)
        return assignedValues
    }

    const varsNotAssigned = (assignedValues='') =>{
        const isNumber = (numero) => {
            let tnumero = String(Number(numero)) == numero
            return tnumero
        }
        
        const isOperator = (caract)=>{
            let resposta = false
            if (caract.length == 1 && caract == '+' || caract == '-'|| caract == '*'|| caract == '/'|| caract == '^'|| caract == '('|| caract == ')' || caract == ',' ){
                resposta = true
            }
            return resposta
        }
        let notAssigned = assignedValues.split(' ')
        notAssigned = notAssigned.filter(element => !isNumber(element) && !isOperator(element) && element !== '')
        return notAssigned
    }

    let resp = insertSpaces(exp)
    resp = assignValues(data, resp)

    //return resposta ou variaveis nao encontradas dentro da expressão com um booleno de confirmação 

    try{
        return [eval( resp ) , true , exp]
    }catch{
        const notFound = varsNotAssigned(resp)
        //console.error(`Variavel ${notFound} não encontrada ou sem valor atribuido na expressão ${exp}`)
        
        return [notFound , false , exp]
    }
}

const resolveAllExpressions = ( calculations = {} , dataResults={})=>{
    // console.log (variableCurrent , calculations, dataResults )
    const results = {}
    for (let key in calculations ){
        // if (key != variableCurrent){
            const exps = calculations[key] 
      
            results[key] =( exps.map(exp => resolveExpression(exp , dataResults)) )

        // }

    }
    // console.log(results)
    return results
}

//Verificaçao
const allResolved = (results = {}) => {
    const cValues = Object.values(calculations)
    const verification = cValues.filter(value => value.filter(exp => !Number(exp)).length != 0).length == 0
    return verification
}
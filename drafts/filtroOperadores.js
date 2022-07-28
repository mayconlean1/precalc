const data = {
    'a':1,
    'b':2,
    'c':3,
    'abc' : 1
}


//console.log (resp)

const resolveExpression = (expression ='', dataToReplace = {} ) =>{
    const exp = expression
    const data = dataToReplace

    for(let i in data){
        if(data[i] == ''){
            delete data[i]
            //console.log('deletado')
        }
    }

    //console.log (data)


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
        return [eval( resp ) , true]
    }catch{
        console.error('Variavel(eis) não encontrada')
        return [varsNotAssigned(resp) , false]
    }
}


// const [result , resolved] = resolveExpression ('(a+2+a+abc/2-b*5)/2^2' , data)

// console.log (result , resolved)

const teste = resolveExpression('(a+2+a+abc/2-b*5)/2^2' , data)

console.log (teste)
 
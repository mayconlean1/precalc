const renderVariables = (args = {toggle:true ,reversedObject:true}) =>{ 
    const defaults = {toggle:true ,reversedObject:true}
    args = {
        ...defaults,
        ...args,
    }

    const {toggle , reversedObject} = args
    if (toggle){

        const reverseObject = (data={}) =>{
            const dataKeys = Object.keys( data ).reverse()
            const dataValues = Object.values( data ).reverse()
            reverseData = {}
            dataKeys.forEach((key , index) => reverseData[String(key)] = dataValues[index])
            return reverseData
        }

        const field = document.querySelector('.fieldsVariableValues')
        field.innerHTML = ''
        const datas = reversedObject ? reverseObject(dataResults) : dataResults

        for (variable in datas){
            field.innerHTML += `
                <div class="fieldVariable">
                    <input
                        id = 'checkbox_${variable}'
                        class = 'checkboxFixed' 
                        type="checkbox"  
                        hidden>
                    <span id='variableName' > ${variable} </span>
                    <div class="inputs fieldVariableButtons">
                        <input
                            class = 'fieldInputVariable' 
                            type="number" 
                            name="fieldInputVariable_${variable}" 
                            id="fieldInputVariable_${variable}"
                            onchange="calculate(this)">
                        <input
                            id = 'btnFixed_${variable}'
                            type="button" 
                            value="Fixar"
                            onclick="toogleFixed('${variable}')"
                            >
                        
                        <input
                            id="btnEditVariableCalculation" 
                            value='Cfg.' 
                            type='button'
                            onclick="renderVaraibleDetails('${variable}')"
                            >
                    </div> 
                </div>
            `
        }
    }   
}
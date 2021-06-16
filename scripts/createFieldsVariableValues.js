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

        for (data in datas){
            field.innerHTML += `
                <div class="fieldVariable">
                    <input
                        id = 'checkbox_${data}'
                        class = 'checkboxFixed' 
                        type="checkbox"  
                        hidden>
                    <span id='variableName' > ${data} </span>
                    <div class="inputs fieldVariableButtons">
                        <input
                            class = 'fieldInputVariable' 
                            type="number" 
                            name="fieldInputVariable_${data}" 
                            id="fieldInputVariable_${data}"
                            onchange="calculate(this)">
                        <input
                            
                            type="button" 
                            value="Fixar"
                            onclick="checkFixed(this,'${data}')"
                            >
                        
                        <input
                            id="editVariableCalculation" 
                            value='Con' 
                            type='button'
                            onclick="edit( this,'${data}')"
                            >
                    </div> 
                </div>
            `
        }
    }   
}
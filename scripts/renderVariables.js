const renderVariables = (args = {toggle:true ,reversedObject:true}) =>{ 
    const defaults = {toggle:true ,reversedObject:true}
    args = {
        ...defaults,
        ...args,
    }

    const {toggle , reversedObject} = args
    if (toggle){
        const controlBar = {
            rightButton:{
                'Add' : 'createVariableWindow()'
            },
            middleButton:{
                'Calc': `calculate()`
            }
        }

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
                <div class="fieldVariable ${variable}" 
                
                onclick='highlightCurrentVar("${variable}")'>
                    <input
                        id = 'checkbox_${variable}'
                        class = 'checkboxFixed' 
                        type="checkbox"  
                        hidden>
                    <div class='headerVariableName'>
                        <span id='variableName' > ${variable} </span>
                        <div 
                        id='variableSolvedStatus_${variable}'
                        class = 'variableSolvedStatus'
                        ></div>
                    </div>
                    <div class="inputs fieldVariableButtons">
                        <input
                            class = 'fieldInputVariable' 
                            type="number" 
                            name="fieldInputVariable_${variable}" 
                            id="fieldInputVariable_${variable}"
                            >
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
                            onclick="renderVariableDetails('${variable}')"
                            >
                    </div> 
                </div>
                
            `
        }
        renderController(controlBar)

    }   
}

{/* <div class="inputs fieldVariableButtons">
<input
class = 'fieldInputVariable' 
type="number" 
name="fieldInputVariable_${variable}" 
id="fieldInputVariable_${variable}"
onchange="calculate(this)"
onkeyup= "keyupDiv(this)"
></input> */}
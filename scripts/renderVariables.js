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
                '<img src="./svg/add_black_24dp.svg" alt="add">' : 'createVariableWindow()'
            },
            middleButton:{
                '<img src="./svg/calculate_black_24dp.svg" alt="calc">': `calculate()`
            },leftButton:{
                '<img src="./svg/clear_black_24dp.svg" alt="limpar">': `clearFields()`
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

        const ifAutoResults = ()=>{
            if (autoResults){
                return`
                    onchange="calculate(this)"
                    onkeyup="keyupDiv(this)"
                `
            }
        }

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
                            onclick = "autoToogleFixed('${variable}')"

                            ${ifAutoResults()}>
                        
                        <div
                            class = 'btnFixed'
                            id = 'btnFixed_${variable}'
                            onclick="toogleFixed('${variable}')">

                            <img
                            class = 'smallSvg' 
                            src="./svg/anchor_black_24dp.svg" alt="Fixar">
                        </div>

                        <div
                            class = 'btnFixed'
                            id="btnEditVariableCalculation" 
                            onclick="renderVariableDetails('${variable}')">

                            <img
                                class = 'smallSvg' 
                                src="./svg/settings_black_24dp.svg" 
                                alt="Cfg.">
                        </div>    
                    </div>
                    
                </div>
                
            `
        }
        renderController(controlBar)

    }   
}

/*
    <input
    id = 'btnFixed_${variable}'
    type="button" 
    value="Fixar"
    onclick="toogleFixed('${variable}')">

    <input
    id="btnEditVariableCalculation" 
    value='Cfg.' 
    type='button'
    onclick="renderVariableDetails('${variable}')"
    >
*/


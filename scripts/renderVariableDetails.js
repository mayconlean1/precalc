const renderVariableDetails = (variable)=>{
    const controlBar = {
        middleButton:{
            '<img src="./svg/add_black_24dp.svg" alt="add">' : `createCalculationWindow('${variable}')`
        },
        leftButton:{
            '<img src="./svg/arrow_back_black_24dp.svg" alt="voltar">' : 'renderMainDefault()'
        },
        rightButton:{
          '<img src="./svg/delete_black_24dp.svg">'  :`deleteVariable('${variable}')`
        }
    }
    const varaibleDetails = (variable) =>{
        const main = document.querySelector('main')
        main.innerHTML = `
        <div class="btnDetails">
        
        </div>
        
        <div class="variableDetailsMenu">
            <div class="detailsHeader">
                <h2 class="detailsVariableName">${variable}</h2>       
            </div>
            
            <div class="detailsBody">
            ${calculationsFields(variable)}
            </div>
        </div>
        `
    }
/*
<input 
    class="btnDetails" 
    type="button" 
    value="Voltar"
    onclick="renderMainDefault()">
<input class="btnDetails" 
    type="button" 
    value="delete"
    onclick="deleteVariable('${variable}')">
*/

    //${renderController({buttonAdd:'addCalculations(variable)'})}
    const calculationsFields=(variable)=>{
        let fields = ''
        const varResponses = responses.sequence[variable]
        for (calc in varResponses){
            const [solved , response] = varResponses[calc]
            fields += `
                <div id='calculationValue_${calc}'
                onclick='selectCalculations(this ,"${variable}" ,"${calc}" , "${response}")' 
                class="calcultationField ${solved? 'calcSolved' : 'calcNotSolved'}">
                    <div id='calculationValue_${calc}'
                    class="calculationValue">${calc}</div>
                    <div id='calculationResp_${calc}' class="calculationInfo">${solved? response : 'Não encontrada '+response.join(' , ')}</div> 
                </div>
            `
        }
        return fields

    }

    renderController(controlBar)
    varaibleDetails(variable)
    addBorderInVariableDetails(variable)
    
}

const addBorderInVariableDetails= ()=>{
    const removeAllBorders = ()=>{
        const fields = document.querySelectorAll('.calcultationField')
        fields.forEach(field =>{
            field.classList.remove('selected')
        })
    }
    const addBorder = ()=>{
        for (let variabl in selectedCalculations){
            const calc = selectedCalculations[variabl][0]
            const calcDiv = document.getElementById(`calculationValue_${calc}`)
            if (calcDiv != null){
                calcDiv.classList.add('selected')
            }
        }
    }
    removeAllBorders()
    addBorder()
}



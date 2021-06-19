const renderVaraibleDetails = (variable)=>{
    const controlBar = {
        middleButton:{
            'Add' : `addCalculations('${variable}')`
        },
        leftButton:{
            'Voltar' : 'renderMainDefault()'
        },
    }
    const varaibleDetails = (variable) =>{
        const main = document.querySelector('main')
        main.innerHTML = `
        <div class="btnDetails">
            <input 
            class="btnDetails" 
            type="button" 
            value="Voltar"
            onclick="renderMainDefault()">
            <input class="btnDetails" 
                type="button" 
                value="delete"
                onclick="deleteVariable('${variable}')"
                >

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
    //${renderController({buttonAdd:'addCalculations(variable)'})}
    const calculationsFields=(variable)=>{
        let fields = ''
        const varResponses = responses.sequence[variable]
        for (calc in varResponses){
            const [solved , response] = varResponses[calc]
            fields += `
                <div id='calculationValue_${calc}'  
                class="calcultationField ${solved? 'calcSolved' : 'calcNotSolved'}">
                    <div id='calculationValue_${calc}'
                    class="calculationValue">${calc}</div>
                    <div id='calculationResp_${calc}' class="calculationInfo">${solved? response : 'Não encontrada '+response.join(' , ')}</div> 
                </div>
            `
        }
        return fields

    }

    varaibleDetails(variable)
    renderController(controlBar)
}

const addCalculations = (variable) =>{
    // calculations[variable] = calculation
    console.log(variable)
}

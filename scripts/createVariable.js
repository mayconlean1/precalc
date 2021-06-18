const createVariableWindow=() =>{
    const divNewVariable = document.querySelector('.newVariable')
    if(divNewVariable.children.length == 0){
        divNewVariable.innerHTML = `
            <span>Nome da Variavel</span>
            <input id='InputVariableName' type="text">
            <div 
                id="btnCreateVariable"
                onclick ='addNewVariable()'
                >Criar</div>
            <div 
                id="btnCancelCreateVariable"
                onclick ="closeNewVariable()"
            >Cancelar</div>
        `
    }

    //openCloseMenu()  
}

const closeNewVariable = () =>{
    const divNewVariable = document.querySelector('.newVariable')
    divNewVariable.innerHTML = ''
}

const addNewVariable=()=>{
    const input = document.querySelector('#InputVariableName').value
    if (input !== '' && !input.includes(' ')){
        dataResults[input] = ''
        closeNewVariable()
        renderVariables()
    }
}
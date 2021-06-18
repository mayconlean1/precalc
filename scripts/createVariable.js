const createVariableWindow=() =>{
    const createDivClassFirstChild= (SelectorOwnerElement='', classNewDiv='') =>{
        const main = document.querySelector(SelectorOwnerElement)
        const firstChild = main.firstChild
        const div = document.createElement('div')
        div.classList.add( classNewDiv)
        main.insertBefore(div , firstChild)
    }

    createDivClassFirstChild('main' , 'newVariable')

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
                onclick ="renderMainDefault()"
            >Cancelar</div>
        `
    }

    //openCloseMenu()  
}

const addNewVariable=()=>{
    const input = document.querySelector('#InputVariableName').value
    if (input !== '' && !input.includes(' ')){
        dataResults[input] = ''
        renderMainDefault()
    }
}
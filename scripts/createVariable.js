const createVariableWindow=() =>{
    const controlBar = {
        leftButton:{
            'Voltar' : 'renderMainDefault()'
        },
        rightButton:{
            'Confirmar' : 'addNewVariable()'
        }

    }
    const createDivClassFirstChild= (SelectorOwnerElement='', classNewDiv='') =>{
        const main = document.querySelector(SelectorOwnerElement)
        const firstChild = main.firstChild
        const div = document.createElement('div')
        div.classList.add( classNewDiv)
        main.insertBefore(div , firstChild)
    }
    let divNewVariable = document.querySelector('.newVariable')
    if(divNewVariable === null){
        createDivClassFirstChild('main' , 'newVariable')
        divNewVariable = document.querySelector('.newVariable')
    }
    

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
    renderController(controlBar)
    //openCloseMenu()  
}

const addNewVariable=()=>{
    const input = document.querySelector('#InputVariableName').value
    if (input !== '' && !input.includes(' ')){
        dataResults[input] = ''
        renderMainDefault()
    }
}
const createCalculationWindow=(variable)=>{

    const controlBar = {
        leftButton:{
            '<img src="./svg/arrow_back_black_24dp.svg" alt="voltar">' : `renderVariableDetails('${variable}')`
        },
        rightButton:{
            '<img src="./svg/done_black_24dp.svg" alt="confirmar">':`confirmCalculation('${variable}')`
        }
    }

    renderController(controlBar)

    const createDivClassBeforeElement = (classNameNewDiv, classNameElement)=>{
        const childDiv = document.querySelector(`.${classNameElement}`)
        const parentDiv = childDiv.parentNode
        const newDiv = document.createElement('div')
        newDiv.classList.add(classNameNewDiv)
        parentDiv.insertBefore(newDiv, childDiv)
    }
    let divNewCalculation = document.querySelector('.newCalculation')
        
    if (divNewCalculation == null){
        createDivClassBeforeElement('newCalculation' , 'detailsBody')
        divNewCalculation = document.querySelector('.newCalculation')
    }

    divNewCalculation.innerHTML = `
        <div class="newCalculation">
            <h3>Novo calculo</h3>
            <input 
                class='inputNewCalculation' 
                type="text"
                >
        </div>
    `
}

const confirmCalculation = (variable) =>{
    const inputNewCalculation = document.querySelector('.inputNewCalculation').value

    if(inputNewCalculation != ''){
        try {
            calculations[variable].push(inputNewCalculation)
        } catch (error) {
            calculations[variable] =[inputNewCalculation]
        }
    
        calculate(variable)
        renderVariableDetails(variable)

    }
}
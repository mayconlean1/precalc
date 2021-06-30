// let varsFixed = [] script.js

const getFixedCheckboxAndButton= (variable)=>{
    const idCheckbox = document.querySelector(`#checkbox_${variable}`)
    
    const idBtnFixed = document.querySelector(`#btnFixed_${variable}`)

    return [idCheckbox , idBtnFixed]
}

const addVariableInArray = (variable, pushInArray)=>{
    if (pushInArray){
        varsFixed.push(variable)
    }
}

const autoToogleFixed = (variable) =>{
    if (autoFixed){
        const [idCheckbox , idBtnFixed] = getFixedCheckboxAndButton(variable)
        idCheckbox.checked = true
        idBtnFixed.classList.add ('checked')
    }
}

const toogleFixed = (variable, pushInArray = true) =>{
    const [idCheckbox , idBtnFixed] = getFixedCheckboxAndButton(variable)
    idCheckbox.checked = !idCheckbox.checked

    const checkClass = (classList)=>{
        let tempClass = []
        classList.forEach(v => tempClass.push(v) )
        return tempClass.includes('checked')
    }
    const checked = checkClass(idBtnFixed.classList)

    if (checked){
        const delVariableInArray = (variable , pushInArray) =>{
            if (pushInArray){
                varsFixed.forEach((v,i)=>{
                    if(v == variable){
                        varsFixed.splice(i,1)
                    }
                })
            }
        }

        delVariableInArray(variable, pushInArray)
        idBtnFixed.classList.remove ('checked')
       
    }else{
        addVariableInArray(variable, pushInArray)
        idBtnFixed.classList.add ('checked')
    }

    const handleControllerWithToggle = ()=>{
        if (varsFixed.length > 0){
            // const controlBar = {
            //     rightButton:{
            //         'Add' : 'createVariableWindow()'
            //     },
            //     middleButton:{
            //         'Calc': `calculate()`
            //     }
            // }
            // renderController(controlBar)
            
        }else{
            // const controlBar = {
            //     rightButton:{
            //         'Add' : 'createVariableWindow()'
            //     },
            // }
            // renderController(controlBar)
        }  
    }
}


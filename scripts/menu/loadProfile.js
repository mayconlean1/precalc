let selectedProfile

const loadProfile = () =>{
    const controlBar = {
        leftButton: {
            voltar:'renderMenu()'},
        middleButton:{
            carregar: 'loadSelectedProfile()'
        },
        rightButton:{
            deletar : 'deleteSelectedProfile()'
        }
    }
    renderController(controlBar)

    const createFieldsOfStorage = ()=>{
        const profiles = Object.keys(localStorage)
        const fields = profiles.map((profile)=> `
        <div 
        class='fieldLoadProfile' 
        id='fieldLoadProfile_${profile}'
        onmouseup='selectFieldProfile("${profile}")'>
            ${profile}
        </div>
        `).join('')
        return fields
    }

    const main = document.querySelector('main')
     
    main.innerHTML = `
        <div id='mainLoadProfile'>
            ${createFieldsOfStorage()}
        </div>
    `
}

const selectFieldProfile = (profile)=>{
    const removeAllSelections =() =>{
        const fields = document.querySelectorAll('.fieldLoadProfile')
        fields.forEach(field=>field.classList.remove('selected'))
    }

    const field = document.getElementById(`fieldLoadProfile_${profile}`)
    const classField = Object.values( field.classList )
    if (classField.includes('selected')){
        removeAllSelections()
        selectedProfile = undefined
    }else{
        removeAllSelections()
        field.classList.add('selected')
        selectedProfile = profile
    }
}

const loadSelectedProfile = () =>{
    if(selectedProfile != undefined){
        const datas = JSON.parse(localStorage[selectedProfile])
        dataResults = datas.dataResults
        calculations = datas.calculations
        selectedCalculations = datas.selectedCalculations
        varsFixed = datas.varsFixed
        responses = datas.responses
        currentVariable = datas.currentVariable

        const idProfileText = document.querySelector('#idProfileText')
        idProfileText.textContent = selectedProfile
        selectedProfile = undefined
        renderMainDefault()
    }
}

const deleteSelectedProfile = () =>{
    if (selectedProfile != undefined){
        const check = confirm(`Deseja realmente deletar ${selectedProfile}`)

        if (check){
            localStorage.removeItem(selectedProfile)
            selectedProfile = undefined
            loadProfile()
        }
    }
}


//loadSelectedProfile , deleteselectedprofile



let selectedProfile

const loadProfile = () =>{
    const controlBar = {
        leftButton: {
            '<img src="./svg/arrow_back_black_24dp.svg" alt="voltar">':'renderMenu()'},
        middleButton:{
            '<img src="./svg/get_app_black_24dp.svg" alt="carregar">': 'loadSelectedProfile()'
        },
        rightButton:{
            '<img src="./svg/delete_black_24dp.svg" alt="excluir">' : 'deleteSelectedProfile()'
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



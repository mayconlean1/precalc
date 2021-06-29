const renderNewProfile=()=>{
    const controlBar = {
        leftButton: {
            voltar:'renderMenu()'
        },
        rightButton:{
            confirmar :'newProfile()'
        }
    }
    renderController(controlBar)
    const main = document.querySelector('main')
    main.innerHTML = `
    <div id='mainNewProfile'>
        <div id='fieldNewProfile'>
            <h3>
                Novo Perfil
            </h3>
            <input type='text' id='inputNewProfile'/>
        </div>
    </div>
    `
}

const newProfile = () =>{
    const input = document.querySelector('#inputNewProfile')
    console.log (input.value)
    if (input.value != ''){
        const handleidProfileText = () =>{
            const idProfileText = document.querySelector('#idProfileText')
            idProfileText.textContent = input.value
            sliceDivButton()
            renderMenu()
        }
        clearAllDatas()
        handleidProfileText()
        renderMainDefault()
    }
}
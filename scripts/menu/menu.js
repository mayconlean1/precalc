const renderMenu = () =>{
    const controlBar = {
        leftButton: {
            voltar:'renderMainDefault()'}
    }
    renderController(controlBar)

    const profileName = document.querySelector('#idProfileText').textContent
    const main = document.querySelector('main')
    main.innerHTML = `
    <div class='menu'>
        <div class="option" onmouseup='renderNewProfile()'>Novo Perfil</div>
        <div class="option" onmouseup='saveProfile()'>Salvar</div>
        <div class="option">Carregar</div>
        <div class="option">Renomear</div>
        <div class="option">Resposta automática</div>
    </div>
    `
}

const sliceDivButton = ()=>{
    const headerButton = document.querySelector('#idProfileText')
    const textLength = headerButton.textContent.length
    if (textLength > 25){
        headerButton.textContent = headerButton.textContent.slice(0 , 25 ) + '...'
    }
    //headerButton.textContent.slice(0 , 25 )
}

// const openCloseMenu = (self) =>{
//     const menu = document.querySelector('.menu') //self.parentElement
//     menu.innerHTML = menu.children[1] ?  `
//     <div class="select" onclick="openCloseMenu(this)"> Menu  </div>
//     ` 
//     : 
//     `
//     <div class="select" onclick="openCloseMenu(this)"> 
//         Menu  
//     </div>
//     <div class="options">
//     <div class="option" onclick ='createVariableWindow()'>
//         Nova Variavel
//     </div>
//     <div class="option">
//         Salvar
//     </div>
//     <div class="option">
//         Limpar
//     </div>
// </div>`
// }
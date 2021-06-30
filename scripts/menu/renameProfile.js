const renameProfile = ()=>{
    const idProfileText = document.querySelector('#idProfileText')
    const newProfileName = prompt('Novo nome do perfil')
    if (newProfileName != null ){
        idProfileText.textContent = newProfileName
    }
}
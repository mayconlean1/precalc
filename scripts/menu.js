const openCloseMenu = (self) =>{
    const menu = document.querySelector('.menu') //self.parentElement
    menu.innerHTML = menu.children[1] ?  `
    <div class="select" onclick="openCloseMenu(this)"> Menu  </div>
    ` : `
    <div class="select" onclick="openCloseMenu(this)"> 
        Menu  
    </div>
    <div class="options">
    <div class="option" onclick ='createVariableWindow()'>
        Nova Variavel
    </div>
    <div class="option">
        Salvar
    </div>
    <div class="option">
        Limpar
    </div>
</div>`
}
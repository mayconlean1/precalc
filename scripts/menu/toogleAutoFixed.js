const toogleAutoFixed = (render = false) =>{
    autoFixed = render? autoFixed : !autoFixed
    const divAutoFixed = document.getElementById('autoFixed')
    if(autoFixed){
        divAutoFixed.classList.add('selected')
    }else{
        divAutoFixed.classList.remove('selected')
    }
}


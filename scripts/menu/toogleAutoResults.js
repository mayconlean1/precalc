const toogleAutoResults = (render=false)=>{
    autoResults = render? autoResults: !autoResults
    const divAutoResults = document.getElementById('autoResults')
    if(autoResults){
        divAutoResults.classList.add('selected')
    }else{
        divAutoResults.classList.remove('selected')
    }
}
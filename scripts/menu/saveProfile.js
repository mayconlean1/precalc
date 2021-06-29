const saveProfile = ()=>{

    const stringfyDatas = () =>{
        const datas = {
            dataResults,
            calculations,
            selectedCalculations,
            varsFixed ,
            responses ,
            currentVariable}
        return JSON.stringify(datas)
    }

    const idProfileText = document.querySelector('#idProfileText').textContent

    if (localStorage[idProfileText ] == undefined){

        const datas = stringfyDatas()
        localStorage[idProfileText] = datas

        renderMainDefault()
        alert('Perfil salvo!')  

    }else{

        const confirmated = confirm('Perfil com mesmo nome encontrado, deseja sobrescrever-lo?')

        if(confirmated){
            const datas = stringfyDatas()
            localStorage[idProfileText] = datas

            renderMainDefault()

        }
     }
}



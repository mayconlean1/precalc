const handleFieldProfile = (value) =>{
    let vari = value
   
    return {
        change (value){
            vari = value
        },
        get (){
            return vari
        }
    }
}

const teste = handleFieldProfile()
teste.change('3')
console.log (

    teste.get()
)
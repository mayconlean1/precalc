const teste = ['oi' , 'ok']

teste.forEach((v,i)=>{
    if (v == 'ok'){
        teste.splice(i, 1)

    }
})


console.log(teste)
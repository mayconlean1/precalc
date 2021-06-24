function acaoPretendida  () {
    console.log ('funcao executada' , arguments)
}

const debounce = (fn, wait = 2000) =>{
    let time
    console.log ('debounce criado')
    return()=>{
        clearTimeout(time)
        console.log ('digitado')
        time = setTimeout(()=>{fn('1')} , wait)
    }
}

const initDebounce = debounce(acaoPretendida)

//Simulando keyUP Event

//testar se cria uma vez so no keyup do html
// setTimeout(debounce(acaoPretendida) , 1850)
// setTimeout(debounce(acaoPretendida) , 250)
// setTimeout(debounce(acaoPretendida) , 950)
// setTimeout(debounce(acaoPretendida) , 1950)
// setTimeout(debounce(acaoPretendida) , 1450)


// setTimeout(initDebounce , 1850)
setTimeout(initDebounce , 250)
// setTimeout(initDebounce , 950)
// setTimeout(initDebounce , 1950)
// setTimeout(initDebounce , 1450)


// const debounce=(teste = 3)=>{
    
//     return (value)=>{
//         teste = value === undefined? teste: value
//         return teste 
//         console.log(teste)
//     }
// }

// const db = debounce()

// console.log (db(5))
// console.log (db())

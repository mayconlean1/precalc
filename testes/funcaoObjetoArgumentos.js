const dataResults = {
    'A' : 1,
    'B' : 2,
    'C': 3,
}

const funcao = (args = {dados:'1' , dados2 : '2'}) => {
    const defaults =  {dados:'1' , dados2 : '2'}
    args = {
        ...defaults,
        ...args
    }
    const {dados, dados2} = args
    console.log ( `dados = ${dados} \nargs = ` , args )
}

funcao ({dados:'3' , outrosdados:'45543'})
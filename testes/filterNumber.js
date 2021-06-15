const calculations = { // calculos resolvidos
    'A': ['5' ],
    'B': ['5' ],
    'C': ['2']
}

const cValues = Object.values(calculations)
//const verification = cValues.filter(exp => !Number(exp)).length == 0

const verification = cValues.filter(value =>{
   const exps= value.filter(exp =>{
       return !Number(exp)
   })
   return exps.length != 0
}).length == 0

const short = cValues.filter(value => value.filter(exp => !Number(exp)).length != 0).length == 0


console.log(short)
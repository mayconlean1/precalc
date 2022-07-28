const data = {
    'a':1,
    'b':2,
    'c':3
}

const exp = 'a+2+a+abc'

const rep = exp.replace( /a/gi , data['b'])

console.log (rep)
const dataResults = {
    'A' : 1,
    'B' : 2,
    'C': 3,
}

const reverseObject = (data) =>{
    const dataKeys = Object.keys( data ).reverse()
    const dataValues = Object.values( data ).reverse()
    reverseData = {}
    dataKeys.forEach((key , index) => reverseData[String(key)] = dataValues[index])
    return reverseData
}

console.log (dataResults ,reverseObject(dataResults) )

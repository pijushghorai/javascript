const convertCtoF = ((cel)=>{
    const farenhite = cel * (9/5) + 32
    return farenhite
})

const celsus = 22
const result = convertCtoF(celsus)
console.log(`${celsus}°C becomes ${result}°F`);
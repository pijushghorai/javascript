const calculateAreaofTrangle = ((b, h)=>{
    const areaofTrangle = (b * h)/2
    return areaofTrangle
})

const base = 20
const height = 14
const result = calculateAreaofTrangle(base, height)
console.log(`Length of the base ${base} and Height ${height}, The area of Trangle = ${result}`);
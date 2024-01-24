const genarateFactorial = (num)=>{
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac = fac * i
    }
    return fac
}

const number = 6
const result = genarateFactorial(number)
console.log(`The factorial of ${number} is ${result}`);
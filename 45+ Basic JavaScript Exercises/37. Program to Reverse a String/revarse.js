const revarseString = (txt) => {
    let newTxt = Array.from(txt);
    let revaese = '';

    for (let i = newTxt.length-1; i >= 0; i--) {
        revaese = revaese + newTxt[i]
    }
    return revaese
}

const text = 'javascript'
const result = revarseString(text)
console.log(result);





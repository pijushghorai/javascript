const findAscii = (char) => {
    let ascii;
    ascii = char.charCodeAt(0)
    return ascii
}

const charecter = "X"
const result = findAscii(charecter)
console.log(`The ASCII value is: ${result}`);

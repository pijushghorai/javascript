const checkLetter = (str, ltr) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ltr) {
            count++
        }
    }
    return count
}

const strng = "awesome";
const letter = "e"
const result = checkLetter(strng, letter);
console.log(`Occurrences of a Character in the String ${letter} is ${result}`);
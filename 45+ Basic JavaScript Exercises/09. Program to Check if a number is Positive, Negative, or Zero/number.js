const checkNumber = ((num) => {
    if (num > 0) {
        return "Positive";
    } else if (num === 0) {
        return "Zero";
    } else {
        return "Negative";
    }
});

const nuumber = -8
const result = checkNumber(nuumber)
console.log(`${nuumber} is a ${result} number`);
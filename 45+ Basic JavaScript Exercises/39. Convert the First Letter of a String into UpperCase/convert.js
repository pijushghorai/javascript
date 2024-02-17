const upperCase = (ltr) => {
    return ltr.charAt(0).toUpperCase() + ltr.slice(1);
};

const letter = "hello world";
const result = upperCase(letter);
console.log(result);

const isPalindrome = (text) => {
    let start = 0;
    let end = text.length-1;
    
    while (end > start) {
        if (text[start] !== text[end]) {
            return `Not Palindrome`
        }
        start++;
        end--;
    }
    return `Palindrome`
}

// const txt = "refer"
// const txt = "mom"
const txt = "pijush"
const result = isPalindrome(txt);
console.log(`${txt} is ${result}`);
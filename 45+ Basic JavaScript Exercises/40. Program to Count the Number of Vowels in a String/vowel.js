const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
};

const str = "The quick brown fox jumps over the lazy dog";
const result = countVowels(str);
console.log(result);

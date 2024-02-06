const compareArray = (a1, a2) => {
    if (a1.length !== a2.length) {
        return `Both the Array is Same`
    }

    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return `Both the Array is Same`
        }
        
    }
    return `Its an two different Array`
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];

console.log(compareArray(array1, array2));
console.log(compareArray(array1, array3));
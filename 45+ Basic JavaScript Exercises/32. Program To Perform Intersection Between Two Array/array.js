const intersection = (a1, a2) => {
    let set1 = new Set(a1);
    return a2.filter(element => set1.has(element));
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = intersection(array1, array2);
console.log(result); // Output: [4, 5]

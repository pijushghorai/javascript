const margeArray = (a1, a2) => {
    let marge = a1.concat(a2)
    return marge
}

const arr1 = ["one", "two", "three", "four", "five"]
const arr2 = [1, 2, 3, 4, 5]

const result = margeArray(arr1, arr2)
console.log(result);

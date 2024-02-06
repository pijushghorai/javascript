const splitArray = (arr, chanks) => {
    for (let i = 0; i < arr.length; i = i + chanks) {
        let newArray;
        newArray = arr.splice(i, i + chanks)
        return newArray
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 5;
console.log(splitArray(array, chunk));
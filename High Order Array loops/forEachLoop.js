// foreach loop
const programingLang = ["C", "C++", "Java", "Python"]
// programingLang.forEach(function (items) {
//     console.log(items);
// })

// programingLang.forEach( (items) => {
//     console.log(items);
// } )

// function printMe(items) {
//     console.log(items);
// }
// programingLang.forEach(printMe)

// the forEach method is used on the programmingLang array to iterate over each element, and the printMe function is applied to each element. The printMe function will log each element of the array to the console.


programingLang.forEach( (items, index, arr)=>{
    console.log(items, index, arr);
} )


const myCoding = [
    {
        "LanguageName": "Javascript",
        "LanguageNameFileName": "js"
    },
    {
        "LanguageName": "Java",
        "LanguageNameFileName": "java"
    },
    {
        "LanguageName": "Python",
        "LanguageNameFileName": "py"
    }
]

myCoding.forEach((items)=>{
    console.log(items.LanguageName);
})
const multiplicationTable = (num) => {
    let mt = 0;
    for (let index = 1; index <= 10; index++) {
        mt = num * index;
        console.log(`${num} * ${index} = ${mt}`);
    }
};

const number = 5;
multiplicationTable(number);
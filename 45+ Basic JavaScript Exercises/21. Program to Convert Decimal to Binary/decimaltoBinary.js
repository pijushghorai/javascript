function convertToBinary(num) {
    let binary = 0;
    let reminder;
    let i = 1;
    while (num != 0) {
        reminder = num % 2;
        // console.log(reminder);
        num = parseInt(num / 2)
        // console.log(num);
        binary = binary + reminder * i
        // console.log(binary);
        i = i * 10;
        // console.log(i);
    }
    return binary;
  }

const  number = 22;
const result = convertToBinary(number)
console.log(`Binary: ${result}`);

  
function sum(message: string, ...numbers: number[]): string {
  let total = numbers.reduce((anterior, atual) => {
    return anterior + atual;
  }, 0);
  return `${message} ${total}`;
}

let res = sum("The total is: ", 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);

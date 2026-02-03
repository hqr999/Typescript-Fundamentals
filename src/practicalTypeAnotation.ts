const books = ["1984", "Brave New World", "Fahrenheit 1945"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

console.log(`The foundbook is ${foundBook}`);

let arrayNames: string[] = ["Rose", "Charles", "John", "Stella"];

function isNameInList(name: string): boolean {
  return arrayNames.includes(name);
}

let nameC = "Rose";

if (isNameInList(nameC)) {
  console.log("Name on the list");
} else {
  console.log("Name is not on the list");
}

function processInput(inp: string | number) {
  if (typeof inp === "number") {
    console.log(inp * 2);
  } else {
    console.log(inp.toLowerCase());
  }
}

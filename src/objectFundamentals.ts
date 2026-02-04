let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

car.brand = "Ford";

let car1: { brand: string; year: number } = { brand: "audi", year: 2022 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { title: string; cost?: number }[] = [book, pen, notebook];
//items[o].title = 'new book'

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
let laptop: { brand: string; year: number } = { brand: "Dell", year: 2018 };

//laptop.year = false
let prod1 = { title: "shirt", price: 20 };
let prod2 = { title: "shirt", price: 20 };
let products: { title: string; price?: number }[] = [prod1, prod2];

products.push({ title: "A title" });

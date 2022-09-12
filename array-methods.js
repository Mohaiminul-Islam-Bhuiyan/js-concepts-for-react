const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 22000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3300, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'camera', price: 3000, brand: 'canon', color: 'gray'}
];

// map has return
const brands = products.map(product => product.brand)
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices)

// forEach has no return
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

products.forEach(product=> {

})

// filter (returns array fulfilling conditions)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'))
console.log(specificName)

// find 
const special = products.find(p => p.name.includes('n'));
console.log(special)
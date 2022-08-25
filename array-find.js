const product = [
    {name: 'Laptop', price: 5000},
    {name: 'Mobile', price: 3000},
    {name: 'Bike', price: 30000}
];

const expectedPrice = product.filter(x => x.price == 5000);

console.log(expectedPrice);
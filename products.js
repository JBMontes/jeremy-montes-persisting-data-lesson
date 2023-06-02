// generating fake product data
// npm install @faker-js/faker@7 --save-dev
// we need to bring in faker
// const {name} = {name: "Jay"}

const {faker} = require("@faker-js/faker")
//console.log(faker) = if we want to see the faker module/objects


const randomFakeProduct = {
    id: `${faker.datatype.uuid()}`,
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`
}
// console.log(randomFakeProduct)

const productsFromTheLessonsReadMe = {
    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 2, "$"),
    currency: "USD",
    inStock: faker.datatype.boolean(),
    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },
  };
//  console.log(productsFromTheLessonsReadMe)



// writing a function to generate/create random product
function createRandomProduct(){
const newProduct = {
    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 2, "$"),
    currency: "USD",
    inStock: faker.datatype.boolean(),
    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },
}
//do something with newProduct
return newProduct
}
// console.log(createRandomProduct())


module.exports = {
    createRandomProduct,
}
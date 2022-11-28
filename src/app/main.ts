import { addProduct, findProducts, products, updateProduct } from "./products/product.service";
import { faker } from '@faker-js/faker';
import { Product } from "./products/product.model";

//Create Products
for(let i = 0; i < 50; i++) {
    addProduct({
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({ min: 10, max: 100}),
        size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
        categoryId: faker.datatype.uuid(),
    })
}

//Update Products
const product:Product = products[0];

const updatedProduct = updateProduct(product.id, {
    title: 'New Title',
    stock: 80,
});

//Find products
const items = findProducts({
    color: 'white',
});

console.log(items);
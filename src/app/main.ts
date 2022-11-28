import { addProduct, products } from "./products/product.service";
import { faker } from '@faker-js/faker';

for(let i = 0; i < 50; i++) {
    addProduct({
        id: faker.datatype.uuid(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(),
        title: faker.commerce.productName(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        stock: faker.datatype.number({ min: 10, max: 100}),
        size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
        category: {
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    })
}

console.log(products);
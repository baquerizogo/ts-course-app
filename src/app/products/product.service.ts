
import { Product } from './product.model';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export let products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct:Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct);
  return(newProduct);
}

export const updateProduct = (id: string, changes: UpdateProductDto ): Product | undefined => {
  let selectedProduct:Product | undefined;

  const updatedProducts = products.map(product => {
    if(id === product.id) {
      selectedProduct = {...product, ...changes};
      return selectedProduct;
    } else {
      return product
    }

  });
  
  products = updatedProducts;
  return selectedProduct;
  
}

export const findProducts = (dto: FindProductDto):Product[] => {
  const filteredProducts:Product[] = products.filter(item => dto.color == item.color);
  return filteredProducts;
}
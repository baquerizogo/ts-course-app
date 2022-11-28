import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
    title: string;
    image: string;
    description: string;
    stock: number;
    color: string;
    price: number;
    isNew: boolean;
    tags: string[];
    category: Category;
    size?: Sizes;
}
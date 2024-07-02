interface ProductImage {
    id: number;
    url: string;
    product_id: number;
    }

export type Product = {

    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: ProductImage[]; 
    category_id: number;

    }

export interface User {
    id: number;
    name: string;
    email: string;
  }

export interface Category {
    name: string;
    image_url: string;
  }
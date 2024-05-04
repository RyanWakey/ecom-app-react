interface Image {
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
    images: Image[]; 
    category_id: number;

}
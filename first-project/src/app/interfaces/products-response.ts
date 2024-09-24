export interface Product {
    title : string,
    description : string,
    category : string,
    price : number,
    thumbnail : string
}


export interface ProductsResponse {
    products: Product[]
}
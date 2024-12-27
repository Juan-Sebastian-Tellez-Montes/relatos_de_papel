export interface Book {
    quantity?: number;
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    image?: string;
    stock?: number;
}
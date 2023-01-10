import { ICartItem } from '@/types/cart.interface';
export const cart: ICartItem[] = [
    {
        id: 1,
        quantity: 1,
        product: {
            id: 1,
            name: "Usual",
            images: ["first", "second"],
            description: "some points about product",
            price: 100,
            reviews: []
        }
    }
]
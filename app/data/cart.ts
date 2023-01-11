import { ICartItem } from '@/types/cart.interface';
import { products } from './products';

export const cartData: ICartItem[] = [
    {
        id: 1,
        quantity: 1,
        product: products[0]
    },
    {
        id: 2,
        quantity: 4,
        product: products[1]
    },
    {
        id: 3,
        quantity: 1,
        product: products[2]
    },

]
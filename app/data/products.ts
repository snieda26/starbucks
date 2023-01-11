import { IProduct } from "@/types/product.interface";

export const products: IProduct[] = [
    {
        id: 1,
        name: "Peppermint",
        description: 'peppermint history and description',
        images: ['/images/peppermint.png', '/images/peppermint-white.png', '/images/hot-chocolate.png'],
        price: 10,
        reviews: []
    },
    {
        id: 2,
        name: "Tea Latte",
        description: 'peppermint history and description',
        images: ['/images/tea-latte.png', '/images/matcha-tea-latte.png', '/images/tea.png'],
        price: 12,
        reviews: []
    },
    {
        id: 3,
        name: "Tea Latte",
        description: 'peppermint history and description',
        images: ['/images/iced-tea.png', '/images/iced-matcha-lemonad.png', '/images/iced-passion-tea.png'],
        price: 12,
        reviews: []
    },
]
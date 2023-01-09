import { FC } from 'react';
import { ICartItem } from '@/types/cart.interface';
import Image from 'next/image';

const CartItem: FC<ICartItem> = ({ product }) => {
    return (
        <div>
            <Image
                src={product.images[0]}
                alt="product"
                width={100}
                height={100} />
            <span>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)}</span>
        </div>
    )
}

export default CartItem
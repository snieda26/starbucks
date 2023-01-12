import { FC, useState } from 'react'
import styles from './Cart.module.scss'

import { cartData } from '@/data/cart'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
    //                                 for boolean
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={styles.cart}>
            <div className={styles.heading}>
                <span className={styles.badge}>1</span>
                <button className={styles.text} onClick={() => setIsOpen(!isOpen)}>MY BASKET</button>
                {isOpen &&
                    <div className={styles["cart-items"]}>
                        {
                            cartData.map(el => {
                                return <CartItem key={el.id} id={el.id} quantity={el.quantity} product={el.product} />
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart
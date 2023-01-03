import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'



const Menu: FC = () => {
    return (
        <div>
            Menu
            <Link href="/">
                <Image height={50} width={50} src={'/logo.png'} alt="fav" />
            </Link>
        </div>
    )
}

export default Menu
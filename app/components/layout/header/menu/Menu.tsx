import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { menu } from './menu.data'
import MenuItem from './menu-item/MenuItem'
import styles from './Menu.module.scss'


const Menu: FC = () => {
    return (
        <div className={styles.menu}>
            <Link href="/">
                <Image height={50} width={50} src={'/logo.png'} alt="xmas shop" />
            </Link>

            <nav>
                <ul>
                    {
                        menu.map(({ name, link }) => (
                            <MenuItem name={name} link={link} key={name + link} />
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Menu
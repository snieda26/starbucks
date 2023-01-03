import { FC } from 'react'
import Menu from './menu/Menu'
import Search from './search/Search'
import Cart from './cart/Cart'

type Props = {}

const Header: FC = (props: Props) => {
    return (
        <header>
            <Menu />
            <Search />
            <Cart />
        </header>
    )
}

export default Header
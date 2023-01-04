import Link from 'next/link'
import React, { FC } from 'react'
import { menu } from '../menu.data'
import { IMenuLink } from './menu-item.interface'

const MenuItem: FC<IMenuLink> = ({ name, link }) => {
    return (
        <li>
            <Link href={link}>{name}</Link>
        </li>
    )
}

export default MenuItem



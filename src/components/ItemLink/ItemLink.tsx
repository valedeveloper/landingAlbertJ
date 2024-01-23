import React from 'react'
import "./ItemLink.css"

type Props = {
    href: string,
    title: string
    className?:string
}
function ItemMenu({ href, title,className }: Props) {
    return (
        <li>
            <a href={href} className={className ?? "navbar-link"} data-navbar-link>{title}</a>
        </li>
    )
}

export default ItemMenu
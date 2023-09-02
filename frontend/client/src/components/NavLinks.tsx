import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks:React.FC = () => {

    const NavLinks = ['home', 'products', 'about', 'blog']

    return (
        <ul className='flex space-x-5'>
            {NavLinks.map((nav, navIndex) =>
            <li className='selection:text-sm text-skin-links hover:text-skin-links_hover capitalize nav-links py-[0.5px]'>
                <Link key={navIndex} to={nav === 'home' ? '/' : nav}>{nav}</Link>
            </li>)}
        </ul>
    )
}

export default NavLinks;
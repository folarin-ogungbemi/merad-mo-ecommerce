import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks:React.FC = () => {

    const NavLinks = ['home', 'shop', 'about', 'contact']

    return (
        <ul className='flex gap-5 pr-4'>
            {NavLinks.map((nav, navIndex) =>
            <li key={navIndex} className='text-skin-links hover:text-skin-links_hover transition-all ease-in-out delay-300 duration-500 capitalize w-10'>
                <Link to={nav === 'home' ? '/' : nav} className='w-fit nav-links hover:font-medium mx-auto py-2'>{nav}</Link>
            </li>)}
        </ul>
    )
}

export default NavLinks;
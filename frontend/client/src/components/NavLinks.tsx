import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks:React.FC = () => {

    const NavLinks = ['Home', 'Products', 'About', 'Contact']

    return (
        <aside className='flex space-x-5'>
            {NavLinks.map((nav, navIndex) =>
            <nav className='font-medium text-[#333333cc]'>
                <Link key={navIndex} to={nav}>{nav}</Link>
            </nav>)}
        </aside>
    )
}

export default NavLinks;
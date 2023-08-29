import React from 'react'
import NavLinks from './NavLinks'
import ContactMo from './ContactMo'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdClose} from 'react-icons/md'
import SearchBar from './SearchBar'
import Checker from './Checker'
import Category from './Category'


const Header:React.FC = () => {
    const [showCategory, setShowCategory] = React.useState<boolean>(false)

  return (
    <>
        <header className="w-full h-20 bg-white sticky top-0 z-40 border-b-[1px] border-b-gray-200">
            <nav className="h-full px-4 container mx-auto relative">
                <div className='flex items-center justify-between h-full'>
                    <h1 className='text-2xl font-bold'>Merad & Mo</h1>
                    <NavLinks />
                    <ContactMo/>
                </div>
            </nav>
        </header>
        <nav className='w-full bg-[#f5eef8]'>
            <div className='container h-20 mx-auto grid grid-cols-3 content-center px-4'>
                <span className='flex text-[#000] my-auto cursor-pointer' onClick={()=>setShowCategory(prevState => !prevState)}>{!showCategory ? <RxHamburgerMenu className='my-auto mr-2'/> : <MdClose className='my-auto mr-2'/>} Shop by Category</span>
                <SearchBar/>
                <Checker/>
            </div>
        </nav>
        {showCategory ? <span className='block'><Category/></span> : <span className='hidden'><Category/></span>}
    </>
  )
}

export default Header;
import React from 'react'
import NavLinks from './NavLinks'
import ContactMo from './ContactMo'
import {AiOutlineBars} from 'react-icons/ai'
import {MdClose} from 'react-icons/md'
import SearchBar from './SearchBar'
import Checker from './Checker'
import Category from './Category'


const Header:React.FC = () => {
    const [showCategory, setShowCategory] = React.useState<boolean>(false)

  return (
    <>
        <header className="w-full h-20 bg-skin-auto_bg sticky top-0 z-40 border-b-[1px] border-b-skin-section_divide">
            <nav className="h-full px-4 container mx-auto relative">
                <div className='flex items-center justify-between h-full'>
                    <h1 className='text-2xl font-bold'>Merad & Mo</h1>
                    <NavLinks />
                    <ContactMo/>
                </div>
            </nav>
        </header>
        <nav className='w-full bg-skin-pry_bg'>
            <div className='container h-20 mx-auto flex justify-between content-center px-4'>
                <span 
                    className='flex text-skin-text_col my-auto cursor-pointer text-sm font-normal' 
                    onMouseEnter={()=>setShowCategory(true)}>
                    {!showCategory ? <AiOutlineBars className='my-auto mr-2'/>
                    : <MdClose className='my-auto mr-2'/>}
                     Categories
                </span>
                <SearchBar/>
                <Checker/>
            </div>
        </nav>
        {showCategory && <Category setShowCategory={setShowCategory}/>}
    </>
  )
}

export default Header;
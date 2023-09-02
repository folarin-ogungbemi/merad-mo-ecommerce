import React from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar:React.FC = () => {
  return (
    <form action="#" className='self-center'>
      <label className="relative block w-full lg:w-[600px] h-[50px]">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-5">
          <BsSearch className='text-skin-text_col'/>
        </span>
        <input 
        className="placeholder:text-[#333333b3] caret-skin-sec_col block bg-skin-auto_bg w-full lg:w-[600px] h-[50px] px-4 rounded-md py-4 pl-5 pr-3 focus:outline-none focus:border-[#734f96] focus:ring-[#734f96] focus:ring-1 sm:text-sm" 
        placeholder='Search Store'
        type="search"
        name="search"/>
        </label>
    </form>
  )
}

export default SearchBar;
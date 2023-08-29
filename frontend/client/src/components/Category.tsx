import React from 'react'
import {Link} from 'react-router-dom'

const Category:React.FC = () => {
    const categories = ['African special', 'corporate wears', 'casual wears', 'summer wears']
  return (
    <div className='bg-[#f5eef8] py-2 border-t-[1px] border-b-gray-200 transition-all delay-400 duration-500'>
        <nav className='flex space-x-5 container mx-auto px-4'>
            {categories.map((category, index) =>
            <Link key={index} to='/' className='hover:bg-slate-200 py-1 px-3 rounded-full'>{category}</Link>
            )}
        </nav>
    </div>
  )
}

export default Category
import {Link} from 'react-router-dom'

interface IProps{
  setShowCategory:React.Dispatch<React.SetStateAction<boolean>>
}

const Category:React.FC<IProps> = ({setShowCategory}) => {

    const categories = ['african special', 'corporate wears', 'casual wears', 'summer wears']
  return (
    <ul className='bg-[#f5eef8] border-t-[1px] border-t-gray-200 mx-auto fixed w-full' onMouseLeave={()=>setShowCategory(false)}>
        <li className='flex space-x-3 container mx-auto px-4 text-skin-text_col text-sm capitalize'>
            {categories.map((category, index) =>
            <Link key={index} to='/' className='py-3 rounded-full animate-bg-opacity nav-links font-normal hover:text-skin-text_col_hover hover:bg-opacity-100 transition-opacity duration-500 ease-in-out'>{category}</Link>
            )}
        </li>
    </ul>
  )
}

export default Category;
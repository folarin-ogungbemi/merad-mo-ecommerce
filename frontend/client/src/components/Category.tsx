import {Link} from 'react-router-dom'

interface IProps{
  setShowCategory:React.Dispatch<React.SetStateAction<boolean>>
}

const Category:React.FC<IProps> = ({setShowCategory}) => {

    const categories = ['african special', 'corporate wears', 'casual wears', 'summer wears']
  return (
    <ul className='bg-skin-pry_bg border-t-[1px] border-t-skin-section_divide mx-auto fixed w-full z-40' onMouseLeave={()=>setShowCategory(false)}>
        <li className='flex space-x-3 container mx-auto px-4 text-sm capitalize'>
            {categories.map((category, index) =>
            <Link key={index} to='/' className='py-3 rounded-full text-skin-links hover:text-skin-links_hover animate-bg-opacity nav-links font-normal hover:bg-opacity-100 transition-opacity duration-500 ease-in-out'>{category}</Link>
            )}
        </li>
    </ul>
  )
}

export default Category;
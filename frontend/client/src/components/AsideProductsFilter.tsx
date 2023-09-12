import React from 'react'
import {Link} from 'react-router-dom'
import {PiCaretDownBold, PiCaretUpBold} from 'react-icons/pi'

const AsideProductsFilter = () => {

    const categories = ['african special', 'corporate wears', 'casual wears', 'summer wears']
    const [drowDown, setDropDown] = React.useState<boolean>(true)

    const handleClick = () =>{
        setDropDown(prevState => !prevState)
    }

  return (
    <div className='hidden lg:flex flex-col h-full w-[20%] sticky'>
        <section className='flex flex-col mb-2'>
            <h3 className='capitalize text-lg font-medium mb-2 w-full flex justify-between cursor-pointer' onClick={handleClick}>categories {drowDown? <PiCaretUpBold className='my-auto'/> : <PiCaretDownBold className='my-auto'/> }</h3>
            {drowDown && <ul className='flex flex-col text-md text-[#666] capitalize'>
                {categories.map((category, catIndex) =>
                <li key={catIndex} className='hover:text-[#333] py-2'>
                    <Link to='category'>{category}</Link>
                </li>
                )}
            </ul>}
        </section>
    </div>
  )
}

export default AsideProductsFilter
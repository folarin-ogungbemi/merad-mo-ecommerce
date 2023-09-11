import React from 'react'
import {BsPersonFill, BsHeart} from 'react-icons/bs'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Checker:React.FC = () => {
  return (
    <div className='justify-self-end flex justify-between items-center space-x-5'>
        <div className='relative flex flex-col justify-center align-center space-y-1 cursor-pointer z-100 text-skin-links hover:text-skin-links_hover'>
          <span className='flex mx-auto text-xs'>Hello,<BsPersonFill className=' ml-1 my-auto'/></span>
          <span className='flex text-sm'>
            <span className='mr-1 font-medium'>Account & Orders</span>
            <span className='my-auto text-xs'>
              {/* {!showMyAccount ? (<BsFillCaretDownFill/>) : (<BsFillCaretUpFill/>)} */}
            </span>
          </span>
          {/* {showMyAccount && (
            <div className='absolute top-[110%] left-[-50%] mx-auto bg-[#e6e6fa] border-t-2 border-[#734f96] rounded-b-md shadow-lg w-[200%] h-fit p-3 z-50'>
              <AuthenticatedComponent/>
            </div>
          )} */}
        </div>
        <Link to='' className='flex flex-col justify-center align-center space-y-1 cursor-pointer text-skin-links hover:text-skin-links_hover'><div className='relative w-fit h-fit mx-auto'><BsHeart className='mx-auto font-medium'/> <span className='absolute bottom-[-50%] right-[-50%] bg-skin-sec_bg text-skin-pry_text rounded-full text-xs w-4 h-4 flex justify-center text-center'>0</span></div> <span className='text-sm font-medium'>Wishlist</span></Link>
        <Link to='' className='flex flex-col justify-center align-center space-y-1 cursor-pointer text-skin-links hover:text-skin-links_hover'><div className='relative w-fit h-fit mx-auto'><HiOutlineShoppingBag className='mx-auto text-lg' /> <span className='absolute bottom-[-50%] right-[-50%] bg-skin-sec_bg text-skin-pry_text rounded-full text-xs w-4 h-4 flex justify-center text-center'>0</span></div><span className='text-sm font-medium'>Basket</span></Link>
    </div>
  )
}

export default Checker;
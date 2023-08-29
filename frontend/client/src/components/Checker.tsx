import React from 'react'
import {BsPersonFill, BsHeart} from 'react-icons/bs'
import {PiShoppingCart} from 'react-icons/pi'


const Checker:React.FC = () => {
  return (
    <div className='justify-self-end flex justify-between items-center space-x-5'>
        <div className='relative flex flex-col justify-center align-center space-y-1 cursor-pointer z-100'>
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
        <div className='flex flex-col justify-center align-center space-y-1 cursor-pointer'><BsHeart className='mx-auto' /> <span className='text-sm font-medium'>Wishlist</span></div>
        <div className='flex flex-col justify-center align-center space-y-1 cursor-pointer'><PiShoppingCart className='mx-auto' /> <span className='text-sm font-medium'>Basket</span></div>
    </div>
  )
}

export default Checker
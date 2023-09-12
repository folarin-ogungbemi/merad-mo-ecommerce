import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {SiTrustpilot} from 'react-icons/si'

const Benefits:React.FC = () => {
  return (
    <div className='container mx-auto my-5 text-skin-text_col'>
        <div className='flex justify-around mx-4 space-x-4 '>
          <section className='p-2 text-center'>
            <h4 className="flex justify-center text-xl font-bold mb-2"><TbTruckDelivery className='mr-1 text-skin-sec_text my-auto'/>  Speed</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        <section className='p-2 text-center'>
            <h4 className="flex justify-center text-xl font-bold mb-2"><SiTrustpilot className='mr-1 text-skin-sec_text my-auto'/> Reliable</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        <section className='p-2 text-center'>
            <h4 className="flex justify-center text-xl font-bold mb-2"><VscWorkspaceTrusted className='mr-1 text-skin-sec_text my-auto'/> Secure</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        </div>
      </div>
  )
}

export default Benefits
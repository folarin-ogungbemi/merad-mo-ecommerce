import React from 'react'
import { Link } from "react-router-dom";

const ContactMo:React.FC = () => {
  return (
    <Link to='/' className='bg-skin-button_bg hover:bg-skin-button_bg_hover px-5 py-2 font-medium text-skin-button_text hover:text-skin-button_text_hover text-md'>Contact Mo</Link>
  )
}

export default ContactMo;
import React from 'react'
import "./Nav.scss"
import { BsTelephone } from "react-icons/bs";
import{ HiOutlineMail } from "react-icons/hi"


const Nav = () => {
  return (
   <nav>
      <div className="main_nav">  
           <div className="img_flag">
               <img style={{width:"60px", height:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/2560px-Flag_of_Uzbekistan.svg.png" alt="" />
               <img style={{width:"60px", height:"40px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="" />
               <a href="+998946402112">
                   <BsTelephone></BsTelephone>+998946402112
               </a>
             <a href="zikrullaevsanjar@gmail.com" className='a'>  <HiOutlineMail className='icon_email'></HiOutlineMail> zikrullaevsanjar@gmail.com</a>
           </div>
      </div>
   </nav>
  )
}

export default Nav
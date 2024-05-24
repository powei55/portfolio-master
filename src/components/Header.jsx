import React from 'react'
import ProfilePics from '../assets/images/profilePhoto.png'
import { 
    FaPhoneAlt,
    FaEnvelopeOpen
} from "react-icons/fa";


const Header = () => {
  return (
    <section className='flex flex-col  w-full  p-5 sm:items-center  lg:flex-row max-w-[1000px] m-auto  bg-[#FFFFFF] rounded-[10px] shadow-lg'>
            <div className='lg:w-[300px] md:mr-5  mb-2 md:mb-0'>
                <img src={ProfilePics} className="object-cover block rounded-[5px]  " alt="" />
            </div>

            <div className='flex flex-col ml-6 md:m-0'>
                <div className='flex flex-col md:items-center lg:flex-row lg:justify-between lg:text-left '>
                    <div className='lg:mt-[-3.2rem] flex flex-col'>
                        <h1 className='text-[1rem] sm:text-[1.5rem] font-bold lg:text-[1.5rem]'>Ikechukwu Powei Mathias</h1>
                        <span className='text-[#828282] text-[1.1rem]font-semi-bold'>Front end developer</span>
                    </div>
                   
                    <div  className='lg:mt-[-2.5rem]'>
                       <span className='block  text-[.9rem] lg:text-[.9rem] text-[#4F4F4F] mb-2'>
                            <FaEnvelopeOpen size={20} className=' mr-2 inline'/>
                            ikechukwupowei21@gmail.com
                       </span>

                       <span className='block text-[.9rem] lg:text-[1rem] text-[#4F4F4F] '>
                            <FaPhoneAlt className=' mr-2 inline' size={20} />
                            (+234)9014855164
                       </span>
                    </div>
                </div>
                <div className='my-5'>
                    <p className='mb-5 text-[#828282] leading-5 tracking-wider'>Self-motivated developer, who is willing to learn and create outstanding UI applications. </p>
                    <p className=' text-[#828282] leading-5 tracking-wider'>I will help you create a top-notch website for your brand/business that will bring about traffic!</p>
                </div>
                
            </div>
    </section>
  )
}

export default Header

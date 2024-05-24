import React from 'react'
import {article, data, experiece} from '../data'

// import {
//      FaReact,
//     FaLaptopCode
//  } from "react-icons/fa";

 

const Activities = () => {
  return (
    <section className='flex flex-col  items-center w-full  md:flex-row md:items-start  max-w-[1000px] m-auto shadow-lg '>
        <div className='mt-10 flex flex-col  w-full md:mr-[5em]'>
            <article className='bg-[#ffff]  rounded-[10px] w-full  px-4 shadow-lg'>
                 <h1 className='text-[#4F4F4F] font-bold text-[1rem] py-2'>Front End</h1>
                 
                    <div className='flex flex-col sm:flex-row sm:items-center  mb-2 pr-4'>
                        <p className='text-[.9rem] mr-5 w-[10em] '>React</p>
                        <div className='bg-[#C4C4C4] w-full  rounded-lg  '>
                            <div className='bg-[#2F80ED] rounded-lg w-[70%]  h-2'></div>
                        </div>
                    </div>

                    <div className='flex flex-col  sm:flex-row sm:items-center mb-2'>
                        <p className='text-[.9rem] mr-5 w-[10em]'>Javascripts</p>
                        <div className='bg-[#C4C4C4] w-full  rounded-lg'>
                            <div className='bg-[#2F80ED] rounded-lg w-[70%]  h-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center mb-2'>
                        <p className='text-[.9rem] mr-5 w-[10em] '>Tailwind Css</p>
                        <div className='bg-[#C4C4C4] w-full rounded-lg'>
                            <div className='bg-[#2F80ED] rounded-lg w-[80%]  h-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col  sm:flex-row sm:items-center mb-2'>
                        <p className='text-[.9rem] mr-5 w-[10em]'>Next Js</p>
                        <div className='bg-[#C4C4C4] w-full  rounded-lg'>
                            <div className='bg-[#2F80ED] rounded-lg w-[50%]  h-2'></div>
                        </div>
                    </div>
                    <div className='flex flex-col  sm:flex-row sm:items-center mb-2'>
                        <p className='text-[.9rem] mr-5 w-[10em]'>Git & GitHub</p>
                        <div className='bg-[#C4C4C4] w-full  rounded-lg'>
                            <div className='bg-[#2F80ED] rounded-lg w-[60%]  h-2'></div>
                        </div>
                    </div>
            </article> 

            <article className='bg-[#ffff]  w-full  rounded-[10px]  px-4 shadow-lg mt-10'>
               
                <h1 className='text-[#4F4F4F] font-bold text-[1.5rem] my-4'>Hobbies</h1>
                    {data.map(item => {
                        const {id, img, title, info} = item 

                        return ( 
                            <div key={id} className='flex flex-col'>
                                <img src={img} className='object-cover block mb-2 rounded-[10px]' alt="" />
                                <h1 className='text-[#333333] font-bold text-[1.2rem] my-2 '>{title}</h1>
                                <p className='text-[.8rem] sm:text-[1rem] text-[#828282] leading-5 tracking-wider mb-5 '>{info}</p>
                            </div>
                        )
                    })}

            </article> 
        </div>
        
        <div className='my-5 flex flex-col w-full mt-8'>
                {article.map(item => {
                    const {id, image, heading, info, addedInfo, link} = item

                    return (
            <article key={id} className='bg-[#ffff] mb-10 px-4 md:p-0 md:pl-4 shadow-lg rounded-[10px]  '>
                <div className='flex flex-col w-full md:flex-row py-2'>
                    <div>
                        <span className='text-[#E0E0E0] text-[.8rem]'>Blog</span>
                        <h2 className='pb-2 text-[1rem]  text-[#333333] font-semibold'>{heading}</h2>
                    </div>

                    <div className=''>
                         <img className='object-cover block rounded-l-xl w-full ' src={image} alt={image} />
                    </div>
                </div>

                    <div className='py-2'>
                            <p className='text-[#828282] lg:w-[400px] text-[.7rem] pb-2'>{info}</p>

                            <p className='text-[#828282] lg:w-[400px] text-[.8rem] pb-[2em]'>{addedInfo}</p>

                            <a href={link} className="hover:text-red-600 text-[.8rem] text-[#2F80ED] font-medium" target="_blank" rel="noreferrer">Hashnode</a>

                    </div>
                    
            </article>
                    )
                })}
                
            

            <article className='bg-[#ffff]  rounded-[10px]  px-4 md:p-0 md:pl-4 shadow-lg '>
                <h1 className='text-[#4F4F4F] font-bold text-[1.5rem] '>Experience</h1>
                {experiece.map(item => {
                    const {id, date, title, image, info} = item

                    return (
                        <div key={id} className='flex flex-col w-full  py-2'>
                            <div>
                                <span className='text-[#E0E0E0] text-[.8rem]'>{date}</span>
                                <h2 className='pb-2 text-[1rem]  text-[#333333] font-semibold'>{title}</h2>
                            </div>
    
                            <div className='mb-2'>
                                <img className='object-cover block rounded-l-xl w-full md:h-[10em] 'src={image} alt={image} />
                            </div>

                            <div>
                                <p className='text-[#828282] lg:w-[400px] text-[.7rem] lg:text-[.8rem] pb-4'>{info}</p>
                            </div>
                        </div>
                    )
                })}
               
               
            </article>
        </div>
        
    </section>
  )
}

export default Activities

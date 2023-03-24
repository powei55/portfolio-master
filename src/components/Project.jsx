import React from 'react'
// import project1 from '../assets/images/project1.png'
import {  projectData } from '../data'

const Project = () => {
  return (      
    <section className=' mt-10 w-full  max-w-[1000px] m-auto'>

        <div className='bg-[#ffffff]'>
            <h1 className='px-4 text-[#4F4F4F] font-bold text-[1.2rem] py-4'>Projects (3)</h1>
        </div>
        
        <article className=' w-full mt-5 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:gap-[3em] mb-10 '>
            {projectData.map(item => {
                const {title, info, image} = item

                return (
                    <div className='flex flex-col  w-full mt-5  bg-[#ffffff] p-2 sm:w-[240px] lg:w-[300px] shadow-lg rounded-[10px]'>
                        <div className='h-full'>
                            <img className='object-cover block' src={image} alt="" />
                        </div>
        
                        <div className='flex flex-col'>
                            <div className='my-2'>
                                <span className='text-[.6rem] text-[#4f4f4f] '>#HTML</span>
                                <span className='text-[.6rem] text-[#4f4f4f] pl-5'>#CSS</span>
                                <span className='text-[.6rem] text-[#4f4f4f] pl-5'>#Responsive</span>
                            </div>
        
                            <div className='mb-2'>
                                <h1 className='mb-2 text-[#333333] text-[1rem] '>{title}</h1>
                                <p className='mb-2 leading-5 text-[.7rem] text-[#828282]'>{info}</p>
                            </div>
        
                            <div className='mb-5'>
                                <a href="https://my-recipe-blog.netlify.app" className='text-[.6rem] text-[#2f80ed] border-2 py-2 px-5 rounded-lg mr-5 hover:bg-[#2F80ED] hover:text-[#ffffff]'>Demo</a>
                                <a href="https://my-recipe-blog.netlify.app" className='text-[.6rem] text-[#2f80ed] border-2 py-2 px-5 rounded-lg mr-5 hover:bg-[#2F80ED] hover:text-[#ffffff]'>Code</a>
                            </div>
                        </div>
                </div>
                )
            })  }
           
        </article>
             <footer className='text-center text-[1rem] text-[#828282] font-bold'>created by powei55 - devChallenges.io</footer>
    </section>
  )
}

export default Project

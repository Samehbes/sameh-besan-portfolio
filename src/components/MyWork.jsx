import React from 'react'
import WorkImg1 from '../assets/WorkImg1.png'
import WorkImg2 from '../assets/WorkImg2.png'
import WorkImg3 from '../assets/WorkImg3.png'
import WorkImg4 from '../assets/WorkImg4.png'
import WorkImg5 from '../assets/WorkImg5.png'
import WorkImg6 from '../assets/WorkImg6.png'


const MyWork = () => {
  return (
    <div name='work' className='w-full md:h-fit text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
        {/* Container */}
         
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               {/* Grid item */}
                <div 
                    style={{backgroundImage:`url(${WorkImg1})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                  {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Electronic Appliance Store
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Samehbes/Electronic-Appliance-Store-WEB'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid item */}
                 <div 
                    style={{backgroundImage:`url(${WorkImg2})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                  {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Pizza Shop
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Samehbes/pizza-Shop'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid item */}
                 <div 
                    style={{backgroundImage:`url(${WorkImg3})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                  {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Netflix Information Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Samehbes/NetflixInformationWebsite'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid item */}
                 <div 
                    style={{backgroundImage:`url(${WorkImg4})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                  {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Climate Change Newsletter
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Samehbes/Climate-Change-Newsletter-Project'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid item */}
                 <div 
                    style={{backgroundImage:`url(${WorkImg5})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                 
                  {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Tindog
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Samehbes/TinDog-Responsive-Website/blob/main/README.md'>
                                <button className=' text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Grid item */}
                 <div 
                    style={{backgroundImage:`url(${WorkImg6})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Employee++ WIP
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                            </a>
                            <a href=''>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MyWork
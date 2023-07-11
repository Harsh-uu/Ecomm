import React from 'react'
import Footer from './Footer'

function Gallery() {
  return (
    <div className='md:bg-black lg:bg-white'>
    <h1 className='font-abril pt-16 text-4xl text-center'>Recent gallery</h1>
    <p className='text-[#979EA9] xl:text-[1.12rem] text-center pt-3'>We're not just a store, we're your story!</p>
    <div className=' mx-auto w-[75rem] mt-5 grid grid-cols-2 gap-10 h-fit'>
        <div className=''>
            <img src="/assets/mp2okkyhztbiaqwqo0rmsrnb40m_300x.png" alt="" className='h-[83.6%] w-full object-cover' />
        </div>
        <div className=' grid grid-cols-2 gap-5'>
            <div className=''>
                <img src="/assets/peakpx.jpg" alt="" />
                <br />
                <img src="/assets/pxfuel (5).jpg" alt="" />
            </div>
            <div className=''>
                <img src="/assets/pxfuel (3).jpg" alt="" />
                <br />
                <img src="/assets/pxfuel (6).jpg" alt="" />
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Gallery
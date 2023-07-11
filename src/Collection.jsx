import React from 'react'
import Category from './Category'

function Collection() {
  return (
     <div className='lg:bg-white md:bg-black'>
    <h1 className='font-abril pt-24 text-4xl text-center'>New collection of us</h1>
    <div className='grid grid-cols-2 gap-20 mt-10 mx-auto max-w-[68rem] font-pop bg-[f3f4f6]'>
        <span className=' grid grid-cols-2 rounded-lg overflow-hidden'>
        <div className='bg-[#f3f4f6] '>
            <h1 className=' mt-10 ml-10 text-[1.8rem] font-bold'>
                Stylish Round Colorful Glass
            </h1>
            <p className='ml-10 mt-6 text-slate-600'>
                $34.55
            </p>
        </div>
        <div className=' overflow-hidden'>
            <img src="/assets/ca6718f265ea3b9dff4e54d5c84e52366728d8b5-transformed.png" className='bg-[#f3f4f6] h-full w-full object-cover' alt="" />
        </div>
        </span>
        <span className=' grid grid-cols-2 rounded-lg overflow-hidden'>
        <div className='bg-[#f3f4f6] '>
            <h1 className=' mt-10 ml-10 text-[1.8rem] font-bold'>
                Elegant Clive Flat Cap
            </h1>
            <p className='ml-10 mt-6 text-slate-600'>
                Free Shipping
            </p>
        </div>
        <div className=' overflow-hidden'>
            <img src="/assets/clive-wax-3-transformed.png" className='bg-[#f3f4f6] h-full w-full object-cover' alt="" />
        </div>
        </span>
        <span className=' grid grid-cols-2 rounded-lg overflow-hidden'>
        <div className='bg-[#f3f4f6] '>
            <h1 className=' mt-10 ml-10 text-[1.8rem] font-bold'>
            Couple on the Go
            </h1>
            <p className='ml-10 mt-6 text-slate-600'>
                45% Off
            </p>
        </div>
        <div className=' overflow-hidden'>
            <img src="/assets/c8e3cce7c6fd6b1768aeb1aa30202835_jpg_720x720q80-transformed.png" className='bg-[#f3f4f6] h-full w-full object-cover' alt="" />
        </div>
        </span>
        <span className=' grid grid-cols-2 rounded-lg overflow-hidden'>
        <div className='bg-[#f3f4f6] '>
            <h1 className=' mt-10 ml-10 text-[1.8rem] font-bold'>
                Trendy Women Heels
            </h1>
            <p className='ml-10 mt-6 text-slate-600'>
                $34.55
            </p>
        </div>
        <div className=' overflow-hidden'>
            <img src="/assets/78364888-transformed.png" className='bg-[#f3f4f6] h-full w-full object-cover' alt="" />
        </div>
        </span>
    </div>
    <Category/>
    </div>
  )
}

export default Collection
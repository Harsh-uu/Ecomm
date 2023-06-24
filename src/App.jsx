import React from 'react'
import { IoSearchOutline,IoCartOutline,IoPersonAddOutline } from "react-icons/io5";
import { FaSlack,FaPaypal } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";
import Collection from './Collection';

function App() {
  return (
    <div>
      <div className='grid grid-cols-3 relative'>
      <img src="/assets/cheerful-young-man-dressed-shirt-wearing-hat-transformed.png" className='absolute lg:h-[94%] md:h-[84%] xl:h-full bottom-0 object-cover right-1/2 xl:translate-x-[46%] lg:translate-x-[40%] md:translate-x-[40%] -scale-x-100 z-10 hidden sm:hidden md:block'  alt="" />
      <div className='flex justify-between  mt-6 absolute top-0 w-full left-0 bg-transparent z-40'>
        <nav className='flex gap-6 xl:ml-28 lg:ml-20 md:ml-16 cursor-pointer'>
          <li className='list-none hover:text-teal-500 hover:scale-110'>Shop</li>
          <li className='list-none'>▪️</li>
          <li className='list-none hover:text-teal-500 hover:scale-110'>Category</li>
          <li className='list-none'>▪️</li>
          <li className='hover:text-teal-500 list-none hover:scale-110'>Contact</li>
        </nav>
        <h1 className='font-medium'>🖤ERIKO</h1>
        <div className=' xl:mr-28 lg:mr-20 md:mr-16 text-xl'>
          <button><IoSearchOutline className='hover:text-teal-500 hover:scale-110'/></button>
          <button><IoCartOutline className='ml-6 hover:text-teal-500 hover:scale-110'/></button>
          <button><IoPersonAddOutline className='ml-6 hover:text-teal-500 hover:scale-110'/></button>
        </div>
        </div>
        <div className=' my-auto'>
          <h1 className='font-abril xl:text-[3.82rem] mb-7 leading-none pt-32 lg:text-[3.09rem] md:text-[2.3rem] xl:ml-[3.8rem] lg:ml-[2.8rem] md:ml-[1.8rem]'>Discover <br /> your favorite <br /> brand</h1>
          <div className='max-w-[100%] min-w-[80%] overflow-y-scroll list_container max-h-28 xl:ml-[3.8rem] lg:ml-[2.8rem] md:ml-[1.8rem]'>
          <p className='text-[#979EA9] item_direction xl:text-[1.12rem] lg:text-[0.9rem] md:text-[0.8rem] md:ml-[1.1rem]  lg:ml-[1.5rem]'>Amazing Shopping play an important role <br className='md:hidden lg:block'/> in making the Sale shop a brand  <br /> 
          </p>
          <div className=' text-xl mt-8 item_direction text-[#979EA9] md:ml-[1.25rem] lg:ml-[1.5rem]'>
            <button><FaSlack className=''/></button>
            <button><RiNetflixFill className='ml-10'/></button>
            <button><FaPaypal className='ml-10'/></button>
          </div>
          <div className=' mr-20 text-xl mt-8 item_direction text-[#979EA9]'>
            <button><FaSlack className=''/></button>
            <button><RiNetflixFill className='ml-10'/></button>
            <button><FaPaypal className='ml-10'/></button>
          </div>
          <div className=' mr-20 text-xl mt-8 item_direction text-[#979EA9]'>
            <button><FaSlack className=''/></button>
            <button><RiNetflixFill className='ml-10'/></button>
            <button><FaPaypal className='ml-10'/></button>
          </div>
          </div>
            <img src="https://cdn.vox-cdn.com/thumbor/jFhIJ7yPAtDIW8Qp2cJS3JaJcl8=/0x0:3144x3144/1200x800/filters:focal(1321x1321:1823x1823)/cdn.vox-cdn.com/uploads/chorus_image/image/50217517/AM1_20Ultra_20Flyknit_207.0.png" className=' xl:max-w-[90%] mt-1 xl:h-52 lg:max-w-[80%] lg:h-44 md:max-w-[90%] md:h-36 xl:ml-[3.8rem] lg:ml-[2.8rem] md:ml-[0.1rem]' alt="Nike air" />
            <h1 className='font-abril mt-4  xl:text-[1.7rem] lg:text-[1.5rem] md:text-[1.2rem] xl:ml-[6rem] lg:ml-[3.8rem] md:ml-[2rem]'>Nike Air shoes</h1>
        </div>
        <div className='bg-gradient-to-t from-[#e0e0e4] to-[#f6f6fa] h-screen -skew-x-6 relative' >
        </div>
        <div className='my-auto mx-auto xl:ml-28 xl:max-w-[80%] lg:ml-16 md:ml-8'>
          <img src="https://www.freepnglogos.com/uploads/sunglasses-png/sunglasses-png-ray-ban-transparent-aviator-louisiana-bucket-brigade-2.png" className='xl:max-w-[90%] xl:h-28 xl:mx-auto xl:mr-44 xl:ml-4 lg:max-w-[70%] lg:h-24 lg:ml-10 md:max-w-[65%] md:h-16 md:ml-10'  alt="Sunglasses" />
          <h1 className='font-abril mt-4 xl:text-[1.7rem] mb-6 ml-3 lg:text-[1.5rem] md:text-[1.2rem]'>Best sunglasses for men</h1>
          <li className='text-[#979EA9] list-outside xl:text-[1.12rem] xl:leading-7 lg:text-[0.9rem] md:text-[0.8rem]'>White Frame Sunglasses</li>
          <li className='text-[#979EA9] list-outside xl:text-[1.12rem] xl:leading-7 lg:text-[0.9rem] md:text-[0.8rem]'>100% accurate Original sunglasses</li>
          <li className='text-[#979EA9] xl:text-[1.12rem] xl:leading-7 lg:text-[0.9rem] md:text-[0.8rem]'>Most Trendy Sunglasses</li>
          <div className='flex border-b-2 border-[#e45731] mt-8 w-fit ml-5 gap-2 hover:scale-110 cursor-pointer group'>
          <p className='text-[#e45731] xl:text-[1.12rem] lg:text-[0.9rem] md:text-[0.8rem]'>Show all men collection </p>
          <BsArrowUpRight className='text-[#e45731] group-hover:animate-bounce'/>
          </div>
        </div>
      </div>
      <Collection />
    </div>
  )
}

export default App
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
      <div className='flex justify-between  mt-6 absolute top-0 w-full left-0 bg-transparent z-40'>
        <nav className='flex gap-6 ml-28 cursor-pointer'>
          <li className='list-none hover:text-teal-500 hover:scale-110'>Shop</li>
          <li className='list-none'>▪️</li>
          <li className='list-none hover:text-teal-500 hover:scale-110'>Category</li>
          <li className='list-none'>▪️</li>
          <li className='hover:text-teal-500 list-none hover:scale-110'>Contact</li>
        </nav>
        <h1 className='font-medium'>🖤ERIKO</h1>
        <div className=' mr-28 text-xl'>
          <button><IoSearchOutline className='hover:text-teal-500 hover:scale-110'/></button>
          <button><IoCartOutline className='ml-6 hover:text-teal-500 hover:scale-110'/></button>
          <button><IoPersonAddOutline className='ml-6 hover:text-teal-500 hover:scale-110'/></button>
        </div>
        </div>
        <div className=' my-auto col-span-1 ml-20'>
          <h1 className='font-abril text-6xl mb-7 leading-none pt-32'>Discover <br /> your favorite <br /> brand</h1>
          <div className='max-w-[80%] min-w-[80%] overflow-y-scroll list_container max-h-28'>
          <p className='text-[#979EA9] item_direction '>Amazing Shopping play an important role <br /> in making the Sale shop a brand  <br /> 
          </p>
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
          <div className=' mr-20 text-xl mt-8 item_direction text-[#979EA9]'>
            <button><FaSlack className=''/></button>
            <button><RiNetflixFill className='ml-10'/></button>
            <button><FaPaypal className='ml-10'/></button>
          </div>
          </div>
            <img src="https://cdn.vox-cdn.com/thumbor/jFhIJ7yPAtDIW8Qp2cJS3JaJcl8=/0x0:3144x3144/1200x800/filters:focal(1321x1321:1823x1823)/cdn.vox-cdn.com/uploads/chorus_image/image/50217517/AM1_20Ultra_20Flyknit_207.0.png" className=' max-w-[70%] mt-10 h-40' alt="Nike air" />
            <h1 className='font-abril mt-4 text-2xl ml-8'>Nike air shoes</h1>
        </div>
        <div className='bg-gradient-to-t from-[#e0e0e4] to-[#f6f6fa] h-screen -skew-x-6 relative'>
        <img src="/assets/cheerful-young-man-dressed-shirt-wearing-hat-transformed.png" className='absolute h-full object-cover -scale-x-100'  alt="" />
        </div>
        <div className='my-auto mx-auto ml-32 '>
          <img src="https://www.freepnglogos.com/uploads/sunglasses-png/sunglasses-png-ray-ban-transparent-aviator-louisiana-bucket-brigade-2.png" className='max-w-[90%] h-28 mx-auto mr-44 ml-4'  alt="" />
          <h1 className='font-abril mt-4 text-2xl mb-6 ml-5'>Best sunglasses for men</h1>
          <li className='text-[#979EA9] list-inside'>White Frame Sunglasses</li>
          <li className='text-[#979EA9]'>100% accurate Original sunglasses</li>
          <li className='text-[#979EA9]'>Most Trendy Sunglasses</li>
          <div className='flex border-b-2 border-[#e45731] mt-8 w-fit ml-5 gap-2 hover:scale-110 cursor-pointer group'>
          <p className='text-[#e45731]'>Show all men collection </p>
          <BsArrowUpRight className='text-[#e45731] group-hover:animate-bounce'/>
          </div>
        </div>
      </div>
      <Collection />
    </div>
  )
}

export default App
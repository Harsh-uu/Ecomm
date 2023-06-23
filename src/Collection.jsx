import React from 'react'

function Collection() {
  return (
    <div className='bg-white'>
    <h1 className='font-abril pt-24 text-4xl text-center'>New collection of us</h1>
    <div className='grid grid-cols-2 gap-10 mt-6 mx-auto h-96 max-w-[70%] font-pop'>
        <span className=' grid grid-cols-2 rounded-lg border-2 border-black overflow-hidden'>
        <div className='bg-[#e7b790] '>
            <h1 className=' mt-8 ml-10 text-3xl font-bold'>
                Stylish Round Colorful Glass
            </h1>
            <p className='ml-10 mt-6 text-slate-600'>
                $34.55
            </p>
        </div>
        <div className=' overflow-hidden'>
            <img src="https://img.freepik.com/free-photo/portrait-handsome-young-european-man-looks-directly-camera-with-serious-expression-feels-self-confident-wears-round-transparent-glasses-casual-sweater-isolated-beige-background_273609-56727.jpg" className='h-full w-full object-scale-down scale-150' alt="" />
        </div>
        </span>
        <span className=' grid grid-cols-2 rounded-lg border-2 border-black overflow-hidden'>
        <div className='bg-[#015faa] '>
            <h1 className=' mt-8 ml-10 text-3xl font-bold'>
                Stylish Round Colorful Glass
            </h1>
            <p className='ml-10 mt-6 text-slate-600'>
                $34.55
            </p>
        </div>
        <div className=' overflow-hidden'>
            <img src="https://images.jackjones.com/12235410/4221157/008/jackjones-hatte-beige.jpg?v=fc905d5790f5ad04bbf4653ab9b4f589" className='h-full w-full object-contain' alt="" />
        </div>
        </span>
        <span className='border-2 border-black'>r</span>
        <span className='border-2 border-black'>s</span>
    </div>
    </div>
  )
}

export default Collection
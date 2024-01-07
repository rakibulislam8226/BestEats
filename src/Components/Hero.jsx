import React from 'react'

export const Hero = () => {
    return (
        <div className='max-w-[1640px] m-auto p-4 z-10'>
            <div className="relative max-h-[500px]">


                <div className='absolute bg-black/40 w-full h-full max-h-[500px] text-white flex flex-col m-auto justify-center'>
                    <p className='text-xl px-4 font-bold sm:text-3xl md:text-5xl lg:text-7xl'>The <span className='text-orange-500'>Best</span></p>
                    <p className='text-xl px-4 font-bold sm:text-3xl md:text-5xl lg:text-7xl'> <span className='text-orange-500'> Foods </span> Delivered</p>
                </div>

                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            </div>
        </div>
    )
}

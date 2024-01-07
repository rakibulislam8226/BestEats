

export const HeadLinesCards = ({ headcard }) => {
    return (
        <div className="group relative w-full h-[200px] rounded-2xl overflow-hidden transition-transform duration-300 cursor-pointer">
            <img src={headcard.linkImg} alt="food" className='w-full h-full object-cover' />

            <div className='absolute top-0 left-0 right-0 p-2 bg-black/50'>
                <h1 className='text-white text-2xl font-bold'>{headcard.title}</h1>
                <h1 className='text-gray-400'>{headcard.category}</h1>
            </div>

            <div className='absolute bottom-0 left-0 right-0 flex justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <button className="rounded-lg bg-white hover:bg-orange-500 hover:text-white text-black px-4 py-1">Order Now</button>
            </div>
        </div>
    )
}



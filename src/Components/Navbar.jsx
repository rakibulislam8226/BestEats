import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTags } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaWallet, FaUserFriends } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 w-full z-10 flex items-center p-4 justify-between bg-gray-100 transition-transform duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='flex gap-4 items-center'>
                <AiOutlineMenu size={25} onClick={() => setShow(!show)} />

                <div className='text-xl sm:text-2xl'>
                    <p className='flex'> Best <span className='font-bold'>Eats</span></p>
                </div>
                <div className='hidden md:flex gap-2 bg-gray-200 rounded-full p-1 items-center'>
                    <p className='bg-black text-white rounded-full p-1'>Delivery</p>
                    <p>Pickup</p>
                </div>

            </div>

            {/* search  */}
            <div className='bg-gray-200 hidden md:flex items-center rounded-full ml-2 px-4'>
                <AiOutlineSearch size={20} />
                <input className='outline-none bg-transparent p-2 w-full' type="text" placeholder='Search' />
            </div>

            <button className='bg-black text-white flex p-2 rounded-full gap-2'>
                <BsFillCartFill size={25} /> Cart
            </button>

            {/* Overlay  */}
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-black transition-opacity duration-300 ${show ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setShow(!show)}
            ></div>

            {/* drawer menu  */}
            <div className={`fixed top-0 left-0 w-[200px] md:w-[300px] h-screen bg-gray-300 transition-all duration-300 z-50 ${show ? 'translate-x-0' : '-translate-x-full'}`}>
                <AiOutlineClose size={25} className='absolute top-2 right-2 cursor-pointer' onClick={() => setShow(!show)} />
                <p className='absolute top-2 text-2xl'>Best <span className='font-bold'>Eats</span></p>

                <nav>
                    <ul className='flex flex-col gap-2 p-4 mt-12'>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <TbTruckDelivery />  Order</li>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <MdFavorite />  Favourite</li>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <FaWallet />  Wallet</li>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <MdHelp />  Help</li>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <AiFillTags />  Promotions</li>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <BsFillSaveFill />  Best Ones</li>
                        <li className='text-xl flex items-center gap-2 cursor-pointer'> <FaUserFriends />  Invite Friends</li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

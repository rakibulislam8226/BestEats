import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SlSocialDribbble } from "react-icons/sl";

export const Footer = () => {
    return (
        <div className='w-full bg-[#e9f8f3b3] py-12'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
                <div className='col-span-2 ml-2'>
                    <div className='text-xl sm:text-2xl'>
                        <p className='flex text-2xl font-bold'> Best <span className='font-bold'>Eats</span></p>
                    </div>
                    <p className='text-2xl font-bold mt-6 mb-1'>Contact Us</p>

                    <div className='text-[#6D737A] text-sm'>
                        <p>Call : +123 400 123</p>
                        <p>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                    </div>
                    <h3 className='mt-4'>Email: example@mail.com</h3>
                    <div className="flex gap-2">
                        <div className="p-4 cursor-pointer bg-[#E9F8F3] fle"><a href="#"><FaFacebookSquare size={30} style={{ color: "#4DC39E" }} /></a></div>
                        <div className="p-4 cursor-pointer bg-[#E9F8F3] fle"><a href="#"><SlSocialDribbble size={30} style={{ color: "#4DC39E" }} /></a></div>
                        <div className="p-4 cursor-pointer bg-[#E9F8F3] fle"><a href="#"><BsLinkedin size={30} style={{ color: "#4DC39E" }} /></a></div>
                        <div className="p-4 cursor-pointer bg-[#E9F8F3] fle"><a href="#"><FaInstagram size={30} style={{ color: "#4DC39E" }} /></a></div>

                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Explore</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Home</li>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Course</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Contact</li>

                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Category</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Design</li>
                        <li className='py-2'>Development</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Business</li>
                        <li className='py-2'>Lifestyle</li>
                        <li className='py-2'>Photography</li>
                        <li className='py-2'>Music</li>

                    </ul>
                </div>
                <div className='max-[780px]:col-span-2 ml-2'>
                    <h3 className='text-2xl font-bold'>Subscribe</h3>
                    <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                    <form className='py-4'>
                        <input
                            className='bg-[#F2F3F4] p-4 w-full rounded'
                            placeholder='Email here'
                        />
                        <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium'>Subscribe Now</button>

                    </form>


                </div>

            </div>
        </div>
    )
}
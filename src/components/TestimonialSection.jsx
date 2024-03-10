import testimonialImage from '../assets/testimonial.png'
import littleDot from '../assets/100.png'
import { IoMdStar } from "react-icons/io"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
    return (
        <div>
            <div className="container">
                <p className='uppercase text-purple-800 text-xl py-6 font-semibold'>Testimonial</p>
                <h1 className='text-4xl font-bold tracking-wide'>Check what our <br />clients are saying</h1>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-16 pt-10">
                    <div className='lg:w-1/2'>
                        <div className='relative'>

                            <img src={testimonialImage} alt="image" className='w-full' />
                            <img src={littleDot} alt="dot" className='absolute top-10 -left-5 w-[50px] sm:w-full sm:max-w-[100px]' />
                            <div className='-right-10 absolute top-1/2 transform  -translate-y-1/2 w-20 h-20 bg-orange-600 rounded-full flex justify-center items-center'><FaQuoteLeft className='text-white text-xl' /></div>
                        </div>
                        <div className='flex items-center gap-3 py-6'>
                            <p className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-800 transition-colors'>
                                <IoIosArrowRoundBack className='' />
                            </p>
                            <p className='w-10 h-10 text-black rounded-full flex items-center justify-center text-2xl cursor-pointer'>
                                <IoIosArrowRoundForward />
                            </p>

                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <p className='text-orange-600 text-xl'><FaQuoteLeft /></p>
                        <h3 className='text-2xl font-bold py-2 lg:py-4'>Save Time Managing Social
                            <br />Media For Your Business</h3>
                        <p className='text-lg font-light lg:py-4'>
                            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                            <br />
                            <br />
                            Believing neglected so so allowance existence departure in. In design active temper be uneasy.
                        </p>
                        {/* ratting */}
                        <div className='flex items-center gap-1'>
                            <IoMdStar className='text-orange-600' />
                            <IoMdStar className='text-orange-600' />
                            <IoMdStar className='text-orange-600' />
                            <IoMdStar className='text-orange-600' />
                            <IoMdStar className='text-orange-600' />
                        </div>
                        <div className='py-5'>
                            <h5 className='font-bold text-xl'>Angela Taylor</h5>
                            <p className='font-light pt-3'>CEO SAMSUNG</p>
                        </div>
                    </div>
                </div>

                <div className='py-4 lg:py-12 my-4 lg:my-10 flex flex-col lg:flex-row items-center gap-5 justify-center w-full px-2 sm:px-10 border-[0.5px] border-gray-400 rounded-md shadow-xl'>
                    <p className='lg:text-lg'>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
                    <button className="text-xl px-6 lg:px-10 py-2 rounded-3xl bg-orange-600 hover:bg-orange-400  text-white transition-colors">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
import paymentContent from '../assets/Illustration.png'
import union from '../assets/Union 2.png'
const ContentSection3 = () => {
    return (
        <div className='py-8 md:py-10 xl:py-20 relative'>

            <div className="container flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
                <div className='sm:w-5/12'>
                    <p className='uppercase text-purple-800 text-xl py-6 font-semibold'>Feature</p>
                    <h1 className='text-2xl sm:text-3xl xl:text-5xl font-bold tracking-wide py-3 sm:py-4 xl:py-8'>Receive payments quickly from anywhere</h1>
                    <p className='text-xl py-2 sm:py-4 lg:py-6 xl:py-10'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <button className="text-xl px-10 py-2 rounded-3xl bg-blue-800 hover:bg-blue-300 hover:text-black text-white transition-colors">Get Started</button>
                </div>
                <div className='sm:w-7/12'>
                    <img src={paymentContent} alt="image" className='w-full' />
                </div>
            </div>
            <div className='absolute top-0 -z-10'>
                <img src={union} alt="union" className='w-screen -z-10' />
            </div>
        </div>
    );
};

export default ContentSection3;
import birds from '../assets/birds.png'
const RegisterCTA = () => {
    return (
        <div className="container xl:my-20">
            <div className="bg-[#F3F7FA] flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 xl:gap-10 px-2 md:px-4 xl:px-28 py-4 md:py-6 xl:py-10 rounded-lg relative">
                <div className="absolute -top-8 right-0">
                    <img src={birds} alt="birds" className='w-auto' />
                </div>
                <div className="lg:w-8/12">
                    <p className='uppercase text-purple-800 text-xl py-2 md:py-4 xl:py-6 font-semibold'>Feature</p>
                    <h1 className='text-2xl sm:text-3xl xl:text-5xl font-bold tracking-wide py-3 sm:py-4 xl:py-8'>Receive payments quickly from anywhere</h1>
                    <p className='text-xl xl:py-10'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>

                </div>
                <div className="lg:w-1/3">
                    <form className="">
                        <p className="text-2xl text-orange-500 font-semibold">Get Started for Free</p>
                        <input type="text" placeholder="Enter your Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-10" />
                        <input type="text" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-10" />
                        <button className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg w-full sm:w-full px-5 py-2.5 text-center transition-colors shadow-md shadow-orange-300">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterCTA;
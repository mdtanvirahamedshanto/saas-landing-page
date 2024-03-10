const FooterCTA = () => {
    return (
        <div className='bg-blue-700'>

            <div className="container mt-4 xl:mt-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 xl:gap-10 py-4 md:py-6 xl:py-10 rounded-lg relative">

                    <div className="md:w-1/2 text-white">
                        <p className='uppercase text-md md:text-xl py-2 md:py-4 xl:py-6 font-semibold'>Why Choose Us</p>
                        <h1 className='text-2xl sm:text-3xl xl:text-5xl font-bold tracking-wide py-3 sm:py-4 xl:py-8'>Track your crytpo portfolio on the best way possible</h1>
                        <p className='text-xl xl:py-10'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize. </p>

                    </div>
                    <div className="md:w-1/2 lg:px-20">
                        <form className="">

                            <input type="text" placeholder="Enter your Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-10" />
                            <input type="text" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-10" />
                            <button className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-lg w-full sm:w-full px-5 py-2.5 text-center transition-colors shadow-md shadow-orange-500">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCTA;
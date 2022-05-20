function About() {
    return (
        <>
            <div className="pt-12 pb-12 px-4 md:hidden block bg-[#f3f3f3] ">
                            <h1 className="text-2xl font-semibold text-[#293e40]">About service now</h1>
                            <p className="pt-4 text-[#293e40]" >We believe in the power of technology to reduce the complexity in our jobs. At<br></br> ServiceNow, we make work, work better for people with modern digital<br></br> workflows.</p>
                        
                        <div className="pt-8  text-[#293e40]  md:hidden block">
                            <a href="" class="   border-2 border-[#293e40] font-semibold text-md  px-8 py-2  text-[#293e40] transition duration-300 ease-in-out hover:bg-[#293e40] hover:text-white ">
                                Learn More
                            </a>

</div>
</div>
                    
               
            <div className=" md:grid grid-cols-2   ">
                    <div className="md:flex md:gap-x-28 px-8 mt-12">
                        <div className="text-[#293e40] font-semibold ">
                            <h1>COMPANY</h1>
                            <ul>
                                <li className="mt-6">About</li>
                                <li className="mt-6">Careers</li>
                                <li className="mt-6">Leadership</li>
                                <li className="mt-6">Investors</li>
                                <li className="mt-6">Gloval Impact</li>
                                <li className="mt-6">Diversity,Equity,and Inclusion </li>
                            </ul>
                        </div>

                        <div className=" pt-8 md:pt-0  leading-5 w-max text-[#293e40] font-semibold">
                            <h1 className="">PARTNERS</h1>
                            <ul className="mt-4">
                                <li className="mt-6 hover: hover:border-gray-500">Partner programs</li>
                                <li className="mt-6">Partner  portal</li>
                                <li className="mt-6">partner Finder</li>
                                <li className="mt-6">App store</li>

                            </ul>
                        </div>
                    </div>




                    <div className="md:bg-[#f3f3f3] w-full pb-36  ">
                        <div className="mt-20 px-12 md:block hidden">
                            <h1 className="text-2xl font-semibold text-[#293e40]">About service now</h1>
                            <p className="pt-4 text-[#293e40]" >We believe in the power of technology to reduce the complexity in our jobs. At<br></br> ServiceNow, we make work, work better for people with modern digital<br></br> workflows.</p>
                        </div>
                        <div className="pt-8 px-12  text-[#293e40]  md:block hidden">
                            <a href="" class="   border-2 border-[#293e40] font-semibold text-md  px-8 py-2  text-[#293e40] transition duration-300 ease-in-out hover:bg-[#293e40] hover:text-white ">
                                Learn More
                            </a>
                        </div>
                        <div className="lg:flex">
                            <div className="pt-16 px-12  sm:w-[50%] md:w-full lg:w-[50%]">
                                <img src="./about.jpeg"></img>
                            </div>

                            <div className="pt-12 lg:w-[50%] lg:px-0 px-4 md:px-16">
                                <h1 className="text-sm font-semibold text-[#293e40]">
                                    Dream big, work with a purpose
                                </h1>
                                <p className="text-sm font-light text-[#293e40]">
                                    Encouraging diverse teams to explore big ideas works. We're humbled to be a 100 Best Companies to Work For®.
                                </p>
                                <div className=' flex'>
                                    <p className="text-[#293e40]  mt-6 cursor-pointer">Explore Careers</p>

                                    <div className="px-1 sm:flex">
                                        <div className='px-2 mt-7'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5 hover:translate-x-1 '><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" /></svg>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
           








        </>

    );
}

export default About;
import Image from 'next/image'
import myImg1 from '../../images/background.png'

function Hero() {
    return (

        <>
            <div className=" bg-[#68a1af] opacity-95">
                <div className='flex pt-8 hover:bg-white transition duration-200 pb-8 '>
                    <div className="  pl-12 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="182" height="30" viewBox="0 0 132 20"><path d="M32.022,6.391a5.626,5.626,0,0,0-3.61,1.3V6.523H25.119V19.35h3.425v-8.2a4.073,4.073,0,0,1,3.109-1.588,3.494,3.494,0,0,1,1.374.206V6.479a5.851,5.851,0,0,0-1.005-.088" fill="#000000" fill-rule="evenodd" /><path d="M2.16,15.436a5.369,5.369,0,0,0,3.5,1.269c.922,0,1.633-.45,1.633-1.084,0-1.931-6.191-1.243-6.191-5.369,0-2.459,2.371-3.993,4.9-3.993a7.9,7.9,0,0,1,4.32,1.3L8.72,10.04a4.3,4.3,0,0,0-2.45-.872c-.948,0-1.739.37-1.739,1.031,0,1.666,6.192,1.005,6.192,5.448,0,2.46-2.4,3.967-5.085,3.967A8.815,8.815,0,0,1,.5,17.9Z" fill="#000000" fill-rule="evenodd" /><path d="M23.657,12.817c0-3.57-2.5-6.558-6.034-6.558-3.794,0-6.218,3.12-6.218,6.691A6.4,6.4,0,0,0,18.1,19.614a6.919,6.919,0,0,0,5.243-2.3l-1.95-1.957a4.515,4.515,0,0,1-3.214,1.481A3.36,3.36,0,0,1,14.725,13.8h8.853A5.735,5.735,0,0,0,23.657,12.817Zm-8.774-1.533a2.775,2.775,0,0,1,2.74-2.248,2.552,2.552,0,0,1,2.53,2.248Z" fill="#000000" fill-rule="evenodd" /><polygon points="41.19 14.351 44.694 6.523 48.252 6.523 42.376 19.35 40.005 19.35 34.129 6.523 37.686 6.523 41.19 14.351" fill="#000000" fill-rule="evenodd" /><path d="M51.128.5A2.2,2.2,0,1,1,48.888,2.7,2.2,2.2,0,0,1,51.128.5" fill="#000000" fill-rule="evenodd" /><rect x="49.415" y="6.523" width="3.425" height="12.827" fill="#000000" /><path d="M67,16.731a6.766,6.766,0,0,1-5.8,2.883,6.68,6.68,0,1,1,.026-13.355,6.808,6.808,0,0,1,5.375,2.565l-2.424,2.142a3.7,3.7,0,0,0-2.951-1.534A3.433,3.433,0,0,0,57.78,12.95a3.383,3.383,0,0,0,3.531,3.49,3.741,3.741,0,0,0,3.056-1.692Z" fill="#000000" fill-rule="evenodd" /><path d="M79.442,17.313a6.918,6.918,0,0,1-5.243,2.3,6.4,6.4,0,0,1-6.692-6.664c0-3.571,2.424-6.691,6.218-6.691,3.53,0,6.033,2.988,6.033,6.558a5.635,5.635,0,0,1-.079.979H70.826a3.36,3.36,0,0,0,3.452,3.041,4.52,4.52,0,0,0,3.215-1.481Zm-3.188-6.029a2.551,2.551,0,0,0-2.529-2.248,2.774,2.774,0,0,0-2.74,2.248Z" fill="#000000" fill-rule="evenodd" /><path d="M81.12,19.35V6.523h3.293V7.554a5.625,5.625,0,0,1,3.609-1.295,5.747,5.747,0,0,1,4.427,2.063,6.482,6.482,0,0,1,1.317,4.5V19.35H90.341v-6.8a3.11,3.11,0,0,0-.764-2.407,2.69,2.69,0,0,0-1.923-.714,4.076,4.076,0,0,0-3.109,1.587V19.35Z" fill="#000000" fill-rule="evenodd" /><path d="M102.586,6.259A7.5,7.5,0,0,0,97.419,19.21a1.481,1.481,0,0,0,1.926.1,5.355,5.355,0,0,1,6.394,0,1.485,1.485,0,0,0,1.937-.113,7.5,7.5,0,0,0-5.09-12.94M102.542,17.5a3.637,3.637,0,0,1-3.734-3.733,3.734,3.734,0,1,1,7.468,0,3.637,3.637,0,0,1-3.734,3.733" fill="#62d84e" fill-rule="evenodd" /><polygon points="116.788 19.35 114.237 19.35 109.15 6.523 112.57 6.523 115.359 13.853 118.094 6.523 120.952 6.523 123.662 13.853 126.475 6.523 129.896 6.523 124.809 19.35 122.258 19.35 119.523 12.046 116.788 19.35" fill="#000000" fill-rule="evenodd" /><path d="M129.935,17.9h-.289v.543H129.4V16.957h.6a.476.476,0,0,1,.478.478.469.469,0,0,1-.295.432l.338.579h-.268Zm-.289-.219H130a.249.249,0,0,0,0-.5h-.351Z" fill="#000000" /><path d="M129.9,16.348a1.379,1.379,0,1,1-1.378,1.379,1.381,1.381,0,0,1,1.378-1.379m0-.218a1.6,1.6,0,1,0,1.6,1.6,1.6,1.6,0,0,0-1.6-1.6Z" fill="#000000" /></svg>
                    </div>
                    <div className=' px-6 pt-1  flex gap-x-4'>
                        <span className='cursor-pointer'>Solutions</span>
                        <span className='cursor-pointer'>Products</span>
                        <span className='cursor-pointer'>Platform</span>
                        <span className='cursor-pointer'>Customers</span>
                        <span className='cursor-pointer'>Events</span>
                        <span className='cursor-pointer'>About</span>
                    </div>

                    <div className='pl-64'>
                        <a href="" class=" font-1  border-2 border-[#293e40] font-semibold text-sm lg:text-xl  xl:px-2 py-2  text-white bg-[#293e40]  ">
                            Get Started
                        </a>
                    </div>
                    <div className='px-4'>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
                        
                    </div>

                </div>

                <div className='lg:flex   justify-between  '>

                    <div className='xl:pt-[100px] lg:pt-24 md:pt-0 md:w-1/2  md:px-0 ml-8'>


                        <h1 className='text-5xl  font-bold text-[#293e40] font-1 '>Customer workflows</h1>


                        <p className='mt-12 text-2xl text-[#293e40]  font-2'>Drive customer loyalty with connected digital workflows .<br></br>
                            Go beyond traditional CRM and field service.</p>



                        <div className='lg:flex sm:mt-16 mt-16 text-center'>

                            <div>
                                <a href="" class=" font-1  border-2 border-[#293e40] font-semibold text-md lg:text-xl  xl:px-8 py-2  text-[#293e40] transition duration-300 ease-in-out hover:bg-[#293e40] hover:text-white ">
                                    Get Insights
                                </a>
                            </div>

                            <div className='flex sm:px-16 lg:pt-0 md:pt-12 sm:pt-12 pt-12 md:pb-12   '>
                                <div>
                                    <span className='text-xl font-semibold  text-[#293e40] whitespace-nowrap  font-1'>Find Out how</span>
                                </div>




                                <div className='lg:px-2 md:px-16 sm:px-20 px- mt-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-7 h-7  hover:scale-x-100'><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <Component2-2 /> */}
                    <div className='md:w-1/2'>
                        <Image
                            src={myImg1}
                            className='' /></div>
                </div>
            </div>

        </>
    )
}
export default Hero;


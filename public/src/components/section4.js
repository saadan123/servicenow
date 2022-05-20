import Image from 'next/image'
import myImg4 from '../../images/img4.png'

function Section4() {
    return (
        <>
            <div className="">
                <div className="  md:flex  justify-between px-4 md:order-none order-last ">
                <div className='lg:pt-[200px]  md:w-1/2 '>


                <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293e40] lg:leading-[40px]'>Optimize field service </h1>

                <p className='pt-12 text-xl md:text-xl lg:text-xl  text-[#293e40] '>
                        Manage location‑based work efficiently and safely. <br></br>
                        Schedule the right people to complete work on  <br></br>
                        work on the first visit, and proactively fix issues<br></br>
                        with real‑time IoT data.</p>



                        <div className='md:flex mt-12'>
                            <div>
                                <span className='text-2xl font-semibold  text-[#293e40]'>Get Details</span>
                            </div>


                            <div className='px-2 mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-7 h-7 hover:translate-x-1 '><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" /></svg>
                            </div>
                        </div>
                    </div>
                
                
                    <div className='md:w-1/2'>
                        <Image
                            src={myImg4}
                            className='' /></div>
                
                
                
                </div>
            </div>



        </>
    )
}
export default Section4;
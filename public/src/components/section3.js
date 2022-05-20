import Image from 'next/image'
import myImg3 from '../../images/img3.png'

function Section3() {
    return (
        <>


            <div className="  ">
                <div className="  md:flex  justify-between lg:mt-0 sm:mt-12 mt-12">

                    <div className='md:w-1/2'>
                        <Image
                            src={myImg3}
                            className='' /></div>




                    <div className='lg:pt-[150px] px-20 md:w-1/2'>


                        <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293e40] lg:leading-[40px]'>
                            Scale customer operations</h1>


                        <p className='pt-12 text-xl md:text-xl lg:text-xl   text-[#293e40] '>
                            Automate processes across front, middle, and back <br></br>
                            offices with digital workflows. Analyze performance to   <br></br>
                            optimize operations and monitor customers’ services to<br></br>
                            prevent downtime.</p>



                        <div className='md:flex mt-12'>
                            <div>
                                <span className='text-2xl font-semibold  text-[#293e40]'>View Ebook </span>
                            </div>


                            <div className='px-2 mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-7 h-7 hover:translate-x-1 '><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" /></svg>
                            </div>
                        </div>
                    </div>





                </div>
            </div>



        </>
    )
}
export default Section3;
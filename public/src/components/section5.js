import Image from 'next/image'
import myImg5 from '../../images/img5.png'
function Section5() {
    return (
        <>
            <div className="  mt-24 px-12">
                <div className=" justify-between  md:flex   ">
                    <div className=" ">


                        <h1 className='text-lg sm:text-xl lg:text-3xl font-bold text-[#293e40] lg:leading-[40px]'>
                            The positive impact on our operations has been<br></br>
                            extraordinary. We’ve reduced daily ticket volumes by 41% by fixing <br></br>
                            problems before they occur.</h1>

                        <p className='text-[#293e40] font-bold  sm:text-lg pt-12 '>Scott Thomson</p>

                        <p className='pt-2 text-lg sm:text-lg  text-[#293e40] font-light'>
                            VP, Technical Customer Services, Rogers Communications
                            Inc.  
                        </p>


                        <div className='mt-28'>
                            <a href="" class="  border-2 border-[#293e40] font-semibold text-xl sm:px-12 py-3 px-4  text-[#293e40] transition duration-300 ease-in-out hover:bg-[#293e40] hover:text-white ">
                                Read Story
                            </a>
                        </div>
                    </div>



                    <div className=' md:block hidden'>
                        <Image
                            src={myImg5}
                            className='' /></div>




                </div>
            </div>



        </>
    )
}
export default Section5;
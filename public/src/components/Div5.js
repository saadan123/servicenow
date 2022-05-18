import Image from 'next/image'
import img5 from '../../images/image5.jpg'


export default function Div5() {
    return (
    <div className='container mx-auto'>
<div className='md:flex px-[20px] mt-[40px]'>
    <div className='md:w-1/2'><Image src={img5} className=""/></div>
    <div className='md:w-1/2 pl-[20px] pt-[30px] lg:pt-[70px]'>
        <div className=''><span className='text-[36px] font-bold'>Introducing ServiceNow Impact</span></div>
        <div className='mt-[10px]'><span className='text-[21px]'>Realize returns faster and personalize your digital transformation journey with our new value acceleration solution. Get proactive insights, expert guidance, and data-driven recommendations.  
</span></div>
<div className='mt-[40px]'><button className='border-2  rounded-lg px-[53px] py-[15px] font-semibold text-[16px] border-green-600'>Find Out How</button></div>


    </div>
    </div>

    </div>
    )}
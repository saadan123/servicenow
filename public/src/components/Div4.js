import Image from 'next/image'
import img4 from '../../images/image4.jpg'

export default function Div4() {
    return (
    <div className="container mx-auto">
<div className='md:flex px-[40px]'>
    <div className='md:w-1/2  md:pt-[80px] lg:pt-[130px] xl:pt-[200px] mr-[19px]'>
         <div className=''><span className='text-[16px] font-bold'>IT Workflows</span></div>
         <div className='mb-[16px]'><span className='font-bold text-[36px]'>Unleash the power of IT</span></div>
         <div className='mb-[20px] w-10/12'><span className='text-[20px]'>Transform your business with digital IT workflows. Modernize your operations to optimize productivity, cost, and resilience with a single platform for IT.</span></div>
         <div className=''><button className='border-2  rounded-lg px-[53px] py-[15px] font-semibold text-[16px] border-green-600'>Get Details</button></div>

    </div>
    <div className='md:w-1/2 md:pl-[30px]'>
    <Image 
src={img4}
className=''/>
    </div>
</div>

    </div>
    
    )}